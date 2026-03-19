import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedStatCard from "@/components/AnimatedStatCard";
import { siteData } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="What your website should communicate"
        title="A stronger digital presence starts with stronger presentation"
        description="PrimePixel focuses on the signals that make a business feel more serious, more modern, and easier to trust."
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {siteData.stats.map((item) => (
          <Reveal key={item.label}>
            <AnimatedStatCard
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}