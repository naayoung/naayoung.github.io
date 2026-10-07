import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero, profile } from "../data/profile";
import BrandIcon from "./ui/BrandIcon";
import HeroConsole from "./HeroConsole";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const [first, second] = hero.headline;
  const [before, after] = second.split(hero.highlight);

  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid w-full max-w-[1160px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {hero.status}
          </motion.p>

          <motion.p {...fade(0.05)} className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            id="hero-title"
            className="mt-4 text-[2.4rem] font-bold leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.6rem] lg:leading-[1.14]"
          >
            {first}
            <br />
            {before}
            <span className="text-accent">{hero.highlight}</span>
            {after}
            <br />
            <span className="text-muted">{hero.nameLine}</span>
          </motion.h1>

          <motion.div {...fade(0.18)} className="mt-8 max-w-xl space-y-1 text-base leading-relaxed text-muted sm:text-lg">
            {hero.description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>

          <motion.p {...fade(0.22)} className="mt-6 font-mono text-sm text-ink">
            {hero.stackLine.join("  ·  ")}
          </motion.p>

          <motion.div {...fade(0.26)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
            >
              프로젝트 보기
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <BrandIcon slug="github" label="GitHub" className="h-4 w-4" />
              GitHub
              <span className="sr-only">(새 창)</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
        >
          <HeroConsole />
        </motion.div>
      </div>

      <div className="border-y border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted">Core Experience</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="핵심 실무 경험">
            {hero.keywords.map((k) => (
              <li key={k} className="flex items-center gap-2 text-sm font-medium sm:text-[0.95rem]">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {k}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
