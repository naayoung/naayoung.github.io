import { ArrowRight } from "lucide-react";
import { career, throughLine } from "../data/career";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import Tag from "./ui/Tag";

function ThroughLine() {
  return (
    <div className="mt-14 rounded-3xl border border-line bg-surface p-6 sm:p-9">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">Through-line</p>
      <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">{throughLine.title}</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{throughLine.caption}</p>

      {/* Desktop: 표 형태로 두 경력의 같은 단계를 나란히 비교 */}
      <div className="mt-8 hidden md:block" role="table" aria-label="이전 경력과 현재 업무의 문제 해결 방식 비교">
        <div role="row" className="grid grid-cols-[180px_1fr_1fr_1fr] gap-3 font-mono text-xs uppercase tracking-wider text-muted">
          <span role="columnheader" className="sr-only">
            경력
          </span>
          <span aria-hidden="true" />
          {throughLine.steps.map((s, i) => (
            <span role="columnheader" key={s} className="flex items-center gap-2">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> {s}
            </span>
          ))}
        </div>
        {throughLine.rows.map((row, r) => (
          <div role="row" key={row.label} className="mt-3 grid grid-cols-[180px_1fr_1fr_1fr] items-stretch gap-3">
            <span role="rowheader" className={`flex items-center text-sm font-semibold ${r === 1 ? "text-accent" : ""}`}>
              {row.label}
            </span>
            {row.values.map((v, i) => (
              <span
                role="cell"
                key={v}
                className={`relative flex items-center rounded-xl border px-4 py-3 text-sm ${
                  r === 1 ? "border-accent/30 bg-accent-soft" : "border-line bg-bg"
                }`}
              >
                {v}
                {i < row.values.length - 1 && (
                  <ArrowRight size={12} className="absolute -right-[10px] z-10 text-muted" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: 단계별로 이전/현재를 묶어서 표시 */}
      <div className="mt-8 grid grid-cols-2 gap-2 text-xs font-semibold md:hidden" aria-hidden="true">
        <span>{throughLine.rows[0].label}</span>
        <span className="text-accent">{throughLine.rows[1].label}</span>
      </div>
      <ol className="mt-4 space-y-5 md:hidden">
        {throughLine.steps.map((s, i) => (
          <li key={s}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> {s}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <span className="rounded-lg border border-line bg-bg px-3 py-2">{throughLine.rows[0].values[i]}</span>
              <span className="rounded-lg border border-accent/30 bg-accent-soft px-3 py-2">{throughLine.rows[1].values[i]}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Career() {
  return (
    <Section id="career" index="06" label="Career" title="Career">
      <ol className="relative">
        {career.map((item, i) => (
          <li key={item.role} className="relative grid gap-3 pb-12 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10">
            {i < career.length - 1 && (
              <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-3 w-px bg-line md:left-[220px]" />
            )}
            <p className="pl-8 font-mono text-sm text-muted md:pl-0 md:pt-0.5 md:text-right">{item.period}</p>
            <Reveal delay={0.04} className="relative pl-8 md:pl-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 md:-left-[25px] ${
                  item.current ? "border-ok bg-ok" : "border-muted bg-bg"
                }`}
              />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold tracking-tight">{item.role}</h3>
                {item.current && (
                  <span className="rounded-full bg-ok-soft px-2.5 py-0.5 font-mono text-[0.7rem] font-semibold text-ok">NOW</span>
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
              <p className="mt-4 max-w-2xl leading-relaxed">{item.summary}</p>
              {item.bullets && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {item.tags && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="학습 기술">
                  {item.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal>
        <ThroughLine />
      </Reveal>
    </Section>
  );
}
