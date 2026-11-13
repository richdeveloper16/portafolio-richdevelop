"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let started: number | undefined;
    let frame: number;
    const tick = (now: number) => {
      started ??= now;
      const elapsed = Math.max(0, now - started);
      if (elapsed >= 1700) {
        setProgress(null);
        return;
      }
      setProgress(Math.min(100, Math.floor((elapsed / 1400) * 100)));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (progress === null) return null;

  const percentage = Number.isFinite(progress)
    ? Math.max(0, Math.min(100, Math.floor(progress)))
    : 0;
  const filled = Math.floor(percentage / 5);

  return (
    <div
      aria-hidden="true"
      className={`intro-loader fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1729] text-slate-300 transition-opacity duration-300 ${progress === 100 ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="px-4 text-center font-mono text-sm sm:text-lg">
        <p className="whitespace-pre text-sky-200">
          [{"#".repeat(filled)}{" ".repeat(20 - filled)}] {String(percentage).padStart(3, " ")}%
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 tracking-wider">
          <svg
            width="44"
            height="36"
            viewBox="0 0 48 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 text-cyan-300"
          >
            <rect x="7" y="2" width="34" height="25" rx="1" />
            <path d="M2 28h44v5H2zM19 28v2h10v-2" />
            <path d="m19 10-5 4 5 4m10-8 5 4-5 4m-3-10-4 12" className="text-cyan-400" />
          </svg>
          <span>LOADING...</span>
        </div>
      </div>
    </div>
  );
}
