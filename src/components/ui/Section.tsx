import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  index: string;
  label: string;
  title: ReactNode;
  caption?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, label, title, caption, children, className = "" }: Props) {
  const headingId = `${id ?? label.toLowerCase().replace(/\s+/g, "-")}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-line">/</span>
            {label}
          </p>
          <h2 id={headingId} className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {title}
          </h2>
          {caption && <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{caption}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
