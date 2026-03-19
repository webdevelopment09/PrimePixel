import LoadingCard from "@/components/LoadingCard";

export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <LoadingCard />
        <LoadingCard />
      </div>
    </section>
  );
}