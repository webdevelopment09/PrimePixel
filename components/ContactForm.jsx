"use client";

import { useState } from "react";

const initialForm = {
  fullName: "",
  businessName: "",
  email: "",
  projectDetails: "",
};

function isValidEmail(email) {
  const normalized = String(email).trim().toLowerCase();

  // Basic structure
  if (!normalized) return false;
  if (normalized.includes(" ")) return false;
  if (!normalized.includes("@")) return false;

  const parts = normalized.split("@");

  // Must have exactly one @
  if (parts.length !== 2) return false;

  const [localPart, domainPart] = parts;

  // Local and domain must exist
  if (!localPart || !domainPart) return false;

  // Obvious invalid cases
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
  if (domainPart.startsWith(".") || domainPart.endsWith(".")) return false;
  if (localPart.includes("..") || domainPart.includes("..")) return false;

  // Domain must contain a dot
  if (!domainPart.includes(".")) return false;

  const domainSections = domainPart.split(".");
  const tld = domainSections[domainSections.length - 1];

  // TLD should be at least 2 letters
  if (!tld || tld.length < 2) return false;

  // Character whitelist
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(normalized);
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const fullName = form.fullName.trim();
    const businessName = form.businessName.trim();
    const email = form.email.trim();
    const projectDetails = form.projectDetails.trim();

    if (!fullName || !businessName || !email || !projectDetails) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          businessName,
          email,
          projectDetails,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("Your inquiry was sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900">
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          placeholder="Your business name"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900">
          Project Details
        </label>
        <textarea
          rows="6"
          name="projectDetails"
          value={form.projectDetails}
          onChange={handleChange}
          placeholder="Tell us about your business and the kind of website you need"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {message && (
        <p
          className={`text-sm font-medium ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}