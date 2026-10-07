import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { personalProjects } from "../data/projects";
import type { PersonalProject } from "../data/types";
import BrandIcon from "./ui/BrandIcon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import Tag from "./ui/Tag";

function BrowserMockup({ project }: { project: PersonalProject }) {
  const host = project.demo ? new URL(project.demo).host : `${project.title.toLowerCase().replace(/\s+/g, "-")}.local`;
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2.5" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="flex-1 truncate rounded-md bg-surface px-3 py-1 text-center font-mono text-[0.7rem] text-muted">{host}</span>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-surface">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-sm text-muted">{project.title}</div>
        )}
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: PersonalProject | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="project-dialog-title"
      className="m-auto w-[min(720px,calc(100%-2rem))] max-h-[85vh] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-ink"
    >
      {project && (
        <div className="p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Personal Project</p>
              <h3 id="project-dialog-title" className="mt-2 text-2xl font-bold tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="rounded-full p-2 text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>
          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          {project.pipeline && (
            <div className="mt-8">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">Consistency Flow</h4>
              <ol className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs">
                {project.pipeline.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-line bg-bg px-2.5 py-1.5">{step}</span>
                    {i < project.pipeline!.length - 1 && <ArrowRight size={14} className="text-muted" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-8 space-y-5">
            {project.features.map((f, i) => (
              <div key={f.title} className="flex gap-4">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {project.verification && (
            <p className="mt-8 flex items-start gap-2 rounded-xl bg-ok-soft p-4 font-mono text-[0.8rem] text-ok">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {project.verification}
            </p>
          )}

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="기술 스택">
            {project.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg"
            >
              <BrandIcon slug="github" label="GitHub" className="h-4 w-4" />
              README와 코드 보기
              <span className="sr-only">(새 창)</span>
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}

function ProjectCard({ project, wide, onOpen }: { project: PersonalProject; wide: boolean; onOpen: () => void }) {
  const btn =
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200";
  return (
    <article
      className={`group h-full rounded-3xl border border-line bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_24px_50px_-34px_rgba(25,27,31,0.4)] sm:p-7 ${
        wide ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10" : "flex flex-col gap-6"
      }`}
    >
      <BrowserMockup project={project} />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.tagline}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="기술 스택">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag tone="accent">{s}</Tag>
            </li>
          ))}
        </ul>
        <ul className="mt-6 space-y-3">
          {project.features.map((f) => (
            <li key={f.title} className="flex items-start gap-2.5 text-[0.93rem]">
              <CheckCircle2 size={16} className="mt-1 shrink-0 text-ok" aria-hidden="true" />
              <span>
                <span className="font-semibold">{f.title}</span>
                <span className="text-muted"> — {f.body}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${btn} bg-ink text-bg`}>
              View Project <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">(새 창)</span>
            </a>
          ) : (
            <button type="button" onClick={onOpen} className={`${btn} bg-ink text-bg`} aria-haspopup="dialog">
              View Project <ArrowRight size={15} aria-hidden="true" />
            </button>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-line hover:border-accent hover:text-accent`}
            >
              <BrandIcon slug="github" label="GitHub" className="h-4 w-4" />
              GitHub
              <span className="sr-only">(새 창)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PersonalProjects() {
  const [open, setOpen] = useState<PersonalProject | null>(null);
  const wide = personalProjects.length === 1;

  return (
    <Section
      id="projects"
      index="05"
      label="Projects"
      title="Personal Projects"
      caption="실무에서 중요하게 본 정합성 문제를 직접 재현하고, 테스트로 검증해 본 프로젝트입니다."
    >
      <div className={wide ? "" : "grid gap-6 md:grid-cols-2"}>
        {personalProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.05} className="h-full">
            <ProjectCard project={p} wide={wide} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>
      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
