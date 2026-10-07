import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";

const STEPS = [
  { key: "MESSAGE", result: "Received" },
  { key: "VALIDATION", result: "Passed" },
  { key: "PROCESSING", result: "Completed" },
  { key: "LEDGER", result: "Updated" },
];

const STEP_MS = 520;

function Pipeline() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce ? STEPS.length : 0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduce) return;
    setDone(0);
    const timers = STEPS.map((_, i) => window.setTimeout(() => setDone(i + 1), 500 + STEP_MS * (i + 1)));
    return () => timers.forEach(clearTimeout);
  }, [run, reduce]);

  const complete = done === STEPS.length;

  return (
    <div className="font-mono text-[0.8rem] sm:text-sm">
      <div className="flex items-center justify-between text-code-muted">
        <span>TRANSACTION</span>
        <span>TXN-0001 · KRW</span>
      </div>
      <ol className="mt-5 space-y-0" aria-label="거래 처리 단계">
        {STEPS.map((s, i) => {
          const isDone = i < done;
          const isRunning = i === done && !complete;
          return (
            <li key={s.key} className="relative flex items-center gap-3 py-2.5">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[9px] top-[34px] h-[calc(100%-22px)] w-px transition-colors duration-300 ${
                    isDone ? "bg-emerald-400/60" : "bg-white/10"
                  }`}
                />
              )}
              <span
                aria-hidden="true"
                className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  isDone
                    ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                    : isRunning
                      ? "border-code-ink/50 text-code-ink"
                      : "border-white/15 text-transparent"
                }`}
              >
                {isDone ? (
                  <Check size={12} strokeWidth={3} />
                ) : isRunning ? (
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-code-ink"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                ) : null}
              </span>
              <span className={`tracking-wider ${isDone || isRunning ? "text-code-ink" : "text-code-muted"}`}>{s.key}</span>
              <span aria-hidden="true" className="mx-1 h-px flex-1 border-t border-dashed border-white/10" />
              <span className={`transition-colors duration-300 ${isDone ? "text-emerald-300" : "text-code-muted"}`}>
                {isDone ? s.result : isRunning ? "…" : "Pending"}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-code-muted">STATUS</span>
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={complete ? "done" : "run"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded px-2 py-0.5 text-xs font-semibold tracking-wider ${
                complete ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-code-muted"
              }`}
              role="status"
            >
              {complete ? "COMPLETED" : "PROCESSING"}
            </motion.span>
          </AnimatePresence>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            aria-label="거래 처리 애니메이션 다시 보기"
            className="rounded p-1 text-code-muted transition-colors duration-200 hover:text-code-ink"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

const CALL = "developer.build();";

function CodeView() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? CALL.length : 0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setTyped((n) => {
        if (n >= CALL.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 45);
    return () => window.clearInterval(id);
  }, [reduce]);

  const k = "text-[#c4a7ff]";
  const s = "text-emerald-300";
  const p = "text-[#8fb0ff]";
  const m = "text-code-muted";

  return (
    <pre className="overflow-x-auto font-mono text-[0.78rem] leading-relaxed text-code-ink sm:text-[0.85rem]">
      <code>
        <span className={k}>const</span> developer = {"{"}
        {"\n"}  <span className={p}>name</span>: <span className={s}>"Nayoung Lee"</span>,
        {"\n"}  <span className={p}>role</span>: <span className={s}>"Backend Developer"</span>,
        {"\n"}  <span className={p}>domain</span>: <span className={s}>"Financial System"</span>,
        {"\n"}  <span className={p}>focus</span>: [
        {"\n"}    <span className={s}>"Reliable Systems"</span>,
        {"\n"}    <span className={s}>"Data Integrity"</span>,
        {"\n"}    <span className={s}>"Maintainable Code"</span>
        {"\n"}  ]
        {"\n"}{"}"};
        {"\n"}
        {"\n"}
        {CALL.slice(0, typed)}
        {typed < CALL.length ? (
          <span className="ml-px inline-block h-[1.05em] w-[0.5em] translate-y-[2px] bg-code-ink/70" aria-hidden="true" />
        ) : (
          <span className={m}>{"\n"}// ✓ build succeeded</span>
        )}
      </code>
    </pre>
  );
}

const TABS = [
  { id: "pipeline", label: "transaction.log" },
  { id: "code", label: "developer.ts" },
] as const;

export default function HeroConsole() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("pipeline");

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-code shadow-[0_30px_60px_-30px_rgba(25,27,31,0.45)]">
      <div className="flex items-center gap-4 border-b border-white/10 px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div role="tablist" aria-label="콘솔 보기 전환" className="flex">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`border-b-2 px-3 py-3 font-mono text-xs transition-colors duration-200 ${
                tab === t.id ? "border-[#8fb0ff] text-code-ink" : "border-transparent text-code-muted hover:text-code-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="min-h-[300px] p-5 sm:p-6"
      >
        {tab === "pipeline" ? <Pipeline /> : <CodeView />}
      </div>
    </div>
  );
}
