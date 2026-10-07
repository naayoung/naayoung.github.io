import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { techCategories, techStatusLabel } from "../data/tech";
import type { TechCategory, TechItem, TechStatus } from "../data/types";
import BrandIcon from "./ui/BrandIcon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

function StatusDot({ status }: { status: TechStatus }) {
  return status === "work" ? (
    <span className="h-2 w-2 shrink-0 rounded-full bg-ok" aria-hidden="true" />
  ) : (
    <span className="h-2 w-2 shrink-0 rounded-full border border-muted" aria-hidden="true" />
  );
}

type Selected = { cat: string; name: string } | null;

function CategoryCard({
  category,
  selected,
  onSelect,
}: {
  category: TechCategory;
  selected: Selected;
  onSelect: (s: Selected) => void;
}) {
  const current: TechItem | undefined =
    selected?.cat === category.id ? category.items.find((i) => i.name === selected.name) : undefined;
  const detailId = `tech-detail-${category.id}`;

  return (
    <article className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
      <header className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight">{category.title}</h3>
        <span className="font-mono text-xs text-muted">{category.caption}</span>
      </header>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {category.items.map((item) => {
          const isSel = current?.name === item.name;
          return (
            <li key={item.name}>
              <button
                type="button"
                aria-expanded={isSel}
                aria-controls={detailId}
                onClick={() => onSelect(isSel ? null : { cat: category.id, name: item.name })}
                className={`group inline-flex items-center gap-2.5 rounded-xl border py-2 pl-2 pr-3.5 text-sm font-medium transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 ${
                  isSel ? "border-accent bg-accent-soft text-accent" : "border-line bg-bg hover:border-ink/25"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 ${
                    isSel ? "bg-surface text-accent" : "bg-surface text-muted group-hover:text-ink"
                  }`}
                >
                  <BrandIcon slug={item.icon} mono={item.mono} label={item.name} className="h-[18px] w-[18px]" />
                </span>
                {item.name}
                <StatusDot status={item.status} />
                <span className="sr-only">({techStatusLabel[item.status]})</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div id={detailId} aria-live="polite">
        <AnimatePresence initial={false}>
          {current && (
            <motion.div
              key={current.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5 rounded-xl border border-line bg-bg p-4 font-mono text-[0.82rem]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted">
                    <span className="text-accent">$</span> where-used <span className="text-ink">{current.name}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelect(null)}
                    aria-label={`${current.name} 설명 닫기`}
                    className="rounded p-1 text-muted transition-colors duration-200 hover:text-ink"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="mt-2 flex items-center gap-2 text-xs">
                  <StatusDot status={current.status} />
                  <span className={current.status === "work" ? "text-ok" : "text-muted"}>{techStatusLabel[current.status]}</span>
                </p>
                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink">{current.usage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export default function TechStack() {
  const [selected, setSelected] = useState<Selected>(null);

  return (
    <Section
      id="tech"
      index="04"
      label="Tech"
      title="Tech Stack"
      caption="실무에서 쓴 기술과 프로젝트·학습으로 다룬 기술을 나눠 표시했습니다. 기술을 누르면 어디에 사용했는지 볼 수 있습니다."
    >
      <Reveal>
        <div className="mb-6 flex flex-wrap gap-5 text-sm text-muted" aria-label="범례">
          <span className="inline-flex items-center gap-2">
            <StatusDot status="work" /> {techStatusLabel.work}
          </span>
          <span className="inline-flex items-center gap-2">
            <StatusDot status="project" /> {techStatusLabel.project}
          </span>
        </div>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-2">
        {techCategories.map((c, i) => (
          <Reveal key={c.id} delay={(i % 2) * 0.05} className={c.items.length > 6 ? "lg:col-span-2" : undefined}>
            <CategoryCard category={c} selected={selected} onSelect={setSelected} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
