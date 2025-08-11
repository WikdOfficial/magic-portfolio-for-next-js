import React, { useEffect, useMemo, useState } from "react";
import WorkedWithVortex from "./WorkedWithVortex";

export default function WorkedWithShowcase({ items = [] }) {
  const [active, setActive] = useState(0);
  const cycle = useMemo(() => items.map((i, idx) => ({ ...i, idx })), [items]);

  useEffect(() => {
    if (cycle.length === 0) return;
    const t = setInterval(() => setActive((v) => (v + 1) % cycle.length), 1600);
    return () => clearInterval(t);
  }, [cycle.length]);

  const spotlight = cycle[active] || {};

  return (
    <section className="relative my-16 rounded-2xl overflow-hidden border border-white/40">
      <WorkedWithVortex fallbackUrl={spotlight.fallback} />

      {/* Spotlight overlay with role snippet */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="glass rounded-2xl px-6 py-4 shadow-lg transition-all duration-500 animate-spotlight text-center">
          {spotlight?.logo ? (
            <img key={spotlight.logo + active} src={spotlight.logo} alt={spotlight.label} className="h-8 w-auto object-contain mx-auto" />
          ) : (
            <div className="text-sm font-medium opacity-90" key={spotlight.label + active}>{spotlight.label}</div>
          )}
          {spotlight?.about ? (
            <div className="mt-2 text-xs text-muted-foreground max-w-[42ch] mx-auto">{spotlight.about}</div>
          ) : null}
        </div>
      </div>

      <div className="relative px-6 sm:px-10 py-12 md:py-16">
        <div className="flex items-center gap-4">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Worked with</h4>
          <div className="h-3 w-3 rounded-full bg-foreground/80 animate-ping" />
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <div key={it.label} className={`glass h-16 px-3 py-2 flex items-center justify-center transition-all hover:scale-[1.06] ${i === active ? "scale-[1.04] ring-1 ring-foreground/20" : "opacity-85"}`} title={it.label}>
              {it.logo ? (
                <img src={it.logo} alt={it.label} className="max-h-8 object-contain" loading="lazy" />
              ) : (
                <span className="text-sm font-medium opacity-90">{it.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spotlightIn { from { transform: translateY(6px) scale(0.98); opacity: 0 } to { transform: translateY(0px) scale(1); opacity: 1 } }
        .animate-spotlight { animation: spotlightIn 420ms ease-out; }
      `}</style>
    </section>
  );
}