import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function isValidEmail(email) {
  const normalized = String(email).trim().toLowerCase();

  if (!normalized) return false;
  if (normalized.includes(" ")) return false;
  if (!normalized.includes("@")) return false;

  const parts = normalized.split("@");

  if (parts.length !== 2) return false;

  const [localPart, domainPart] = parts;

  if (!localPart || !domainPart) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
  if (domainPart.startsWith(".") || domainPart.endsWith(".")) return false;
  if (localPart.includes("..") || domainPart.includes("..")) return false;
  if (!domainPart.includes(".")) return false;

  const domainSections = domainPart.split(".");
  const tld = domainSections[domainSections.length - 1];

  if (!tld || tld.length < 2) return false;

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(normalized);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName = body.fullName?.trim() || "";
    const businessName = body.businessName?.trim() || "";
    const email = body.email?.trim() || "";
    const projectDetails = body.projectDetails?.trim() || "";

    if (!fullName || !businessName || !email || !projectDetails) {
      return Response.json(
        { message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!resend) {
      return Response.json(
        {
          message:
            "Missing RESEND_API_KEY. Add it to .env.local before using the contact form.",
        },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!toEmail) {
      return Response.json(
        { message: "Missing CONTACT_TO_EMAIL in .env.local." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New PrimePixel inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Website Inquiry</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Details:</strong></p>
          <p>${projectDetails.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        { message: "Email could not be sent. Check your Resend setup." },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Your inquiry was sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}