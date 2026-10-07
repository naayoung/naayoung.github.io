import { ArrowDown, Check, ShieldCheck } from "lucide-react";
import { professionalProjects } from "../data/projects";
import type { ProfessionalProject } from "../data/types";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import Tag from "./ui/Tag";

function Flow({ flow }: { flow: ProfessionalProject["flow"] }) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-6 sm:p-7">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">{flow.title}</p>
      <p className="mt-2 text-sm text-muted">{flow.caption}</p>
      <ol className="mt-6">
        {flow.steps.map((step, i) => (
          <li key={step.label}>
            <div className="flex items-start gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-xs font-semibold"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <p className="font-semibold leading-tight">{step.label}</p>
                {step.detail && <p className="mt-1 text-sm text-muted">{step.detail}</p>}
              </div>
            </div>
            {i < flow.steps.length - 1 && (
              <span className="ml-[15px] flex h-6 items-center text-muted/60" aria-hidden="true">
                <ArrowDown size={14} className="-ml-[7px]" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-5 flex items-center gap-2 border-t border-line pt-4 font-mono text-xs text-ok">
        <ShieldCheck size={14} aria-hidden="true" />
        {flow.footnote ?? "모든 단계 통과 시에만 다음 처리로 진행"}
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: ProfessionalProject }) {
  return (
    <article
      aria-labelledby={`pro-${project.no}`}
      className="rounded-3xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/35 hover:shadow-[0_24px_60px_-36px_rgba(59,92,204,0.45)] sm:p-10"
    >
      <header className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
        <span className="text-sm font-semibold text-accent">PROJECT {project.no}</span>
        <span aria-hidden="true" className="text-line">
          |
        </span>
        <span>{project.client}</span>
        {project.period && (
          <>
            <span aria-hidden="true" className="text-line">
              |
            </span>
            <span>{project.period}</span>
          </>
        )}
      </header>
      <h3 id={`pro-${project.no}`} className="mt-4 text-2xl font-bold tracking-tight sm:text-[2rem] sm:leading-tight">
        {project.title}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="기술 태그">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag tone="accent">{t}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="text-base leading-relaxed sm:text-lg">{project.summary}</p>
          <h4 className="mt-9 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">What I Did</h4>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {project.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[0.95rem]">
                <Check size={16} className="mt-1 shrink-0 text-ok" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <figure className="mt-10 rounded-2xl bg-accent-soft p-6">
            <figcaption className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">Key Point</figcaption>
            <blockquote className="mt-3 text-base font-semibold leading-relaxed sm:text-lg">“{project.keyPoint}”</blockquote>
          </figure>
        </div>
        <Flow flow={project.flow} />
      </div>
    </article>
  );
}

export default function ProfessionalProjects() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="Professional Experience"
      caption={
        <>
          <span className="font-mono text-ink">Production systems I worked on.</span>
          <br />
          실제 금융 시스템에서 무엇을 맡았고, 어떻게 확인했는지 정리했습니다.
        </>
      }
    >
      <div className="space-y-8">
        {professionalProjects.map((p) => (
          <Reveal key={p.no}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">※ 보안상 기관 내부 시스템명과 실제 전문 데이터는 공개하지 않습니다.</p>
    </Section>
  );
}
