import { Code2, Route, ScanSearch } from "lucide-react";
import { workStyle } from "../data/profile";
import type { Principle } from "../data/types";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const ICONS: Record<Principle["icon"], typeof Route> = { route: Route, scan: ScanSearch, code: Code2 };

export default function WorkStyle() {
  return (
    <Section index="02" label="Work Philosophy" title={workStyle.title} caption={workStyle.caption} className="pt-0 sm:pt-0">
      <ol className="grid gap-5 md:grid-cols-3">
        {workStyle.items.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.no}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-sm text-muted">{item.no}</span>
                  </div>
                  <h3 className="mt-8 font-mono text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
