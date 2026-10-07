import { about, stats } from "../data/profile";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" index="01" label="About" title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <blockquote className="relative border-l-2 border-accent pl-6 text-2xl font-semibold leading-snug tracking-tight sm:text-[1.75rem]">
            {about.quote.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
        </Reveal>
        <Reveal delay={0.05} className="space-y-5 text-base leading-[1.85] text-muted sm:text-[1.05rem]">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-surface p-6 sm:p-8">
              <dt className="order-2 mt-3 text-sm font-semibold">{s.label}</dt>
              <dd className="order-1 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">{s.value}</span>
                {s.unit && <span className="font-mono text-sm text-accent">{s.unit}</span>}
              </dd>
              {s.caption && <dd className="order-3 mt-1 text-xs text-muted sm:text-sm">{s.caption}</dd>}
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
