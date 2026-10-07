import {
  siBootstrap,
  siDocker,
  siGit,
  siGithub,
  siHibernate,
  siJavascript,
  siJquery,
  siLinux,
  siMariadb,
  siMysql,
  siOpenjdk,
  siReact,
  siSpring,
  siSpringboot,
  siStyledcomponents,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// 필요한 아이콘만 import해 번들 크기를 줄인다. 새 아이콘은 여기에 추가.
const ICONS: Record<string, SimpleIcon> = {
  bootstrap: siBootstrap,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  hibernate: siHibernate,
  javascript: siJavascript,
  jquery: siJquery,
  linux: siLinux,
  mariadb: siMariadb,
  mysql: siMysql,
  openjdk: siOpenjdk,
  react: siReact,
  spring: siSpring,
  springboot: siSpringboot,
  styledcomponents: siStyledcomponents,
};

type Props = { slug?: string; mono?: string; label: string; className?: string };

/** simple-icons 아이콘. 아이콘이 없는 기술은 monogram으로 대체한다. */
export default function BrandIcon({ slug, mono, label, className = "h-5 w-5" }: Props) {
  const icon = slug ? ICONS[slug] : undefined;
  if (!icon) {
    return (
      <span aria-hidden="true" className="font-mono text-[0.66rem] font-semibold tracking-tight">
        {mono ?? label.slice(0, 3).toUpperCase()}
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
