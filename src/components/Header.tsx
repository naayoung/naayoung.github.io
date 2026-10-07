import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import BrandIcon from "./ui/BrandIcon";

const ids = nav.map((n) => n.id);

export default function Header() {
  const active = useActiveSection(ids);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const iconBtn =
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? "border-line bg-bg/85" : "border-transparent bg-bg/60"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-[0.08em]" aria-label="맨 위로 이동">
          {profile.logo.left}
          <span className="text-accent">.</span>
          {profile.logo.right}
        </a>

        <nav aria-label="주요 메뉴" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-muted hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필 (새 창)" className={iconBtn}>
            <BrandIcon slug="github" label="GitHub" className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className={iconBtn}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${iconBtn} md:hidden`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="모바일 메뉴"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-line bg-bg shadow-[0_16px_30px_-20px_rgba(0,0,0,0.35)] md:hidden"
          >
            <ul className="mx-auto max-w-[1160px] px-5 py-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      // 메뉴가 닫히는 동안 스크롤이 취소되므로 닫힘 애니메이션(200ms)이 끝난 뒤 이동한다.
                      e.preventDefault();
                      setOpen(false);
                      history.replaceState(null, "", `#${item.id}`);
                      window.setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }), 220);
                    }}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`flex items-center justify-between py-3 text-base ${
                      active === item.id ? "font-semibold text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-muted">#{item.id}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
