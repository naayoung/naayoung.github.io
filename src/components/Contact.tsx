import { Mail } from "lucide-react";
import { contact, profile } from "../data/profile";
import BrandIcon from "./ui/BrandIcon";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [lead, ...rest] = contact.title.split(" ");
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
        <Reveal className="rounded-[2rem] border border-line bg-code px-6 py-16 text-code-ink sm:px-14 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-code-muted">
            <span className="text-[#8fb0ff]">07</span>
            <span className="mx-2 opacity-40">/</span>Contact
          </p>
          <h2 id="contact-title" className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {lead} {rest.slice(0, -2).join(" ")} <span className="text-[#8fb0ff]">{rest.slice(-2).join(" ")}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-code-muted">
            {contact.body.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-code-ink px-6 py-3 text-sm font-semibold text-code transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-white/50"
            >
              <BrandIcon slug="github" label="GitHub" className="h-4 w-4" />
              GitHub
              <span className="sr-only">(새 창)</span>
            </a>
          </div>
          <p className="mt-8 font-mono text-sm text-code-muted">{profile.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
