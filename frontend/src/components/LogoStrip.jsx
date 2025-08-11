import React from "react";
import { Card } from "../components/ui/card";

export default function LogoStrip({ title, items = [], motion }) {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-4">
        <h4 className="text-sm uppercase tracking-wider text-muted-foreground">{title}</h4>
        {motion ? <div className="shrink-0">{motion}</div> : null}
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {items.map((it) => (
          <Card
            key={it.label}
            className="h-16 px-3 py-2 bg-white/45 border-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white/60 transition-colors"
            title={it.label}
          >
            {it.logo ? (
              <img
                src={it.logo}
                alt={it.label}
                className="max-h-8 object-contain opacity-80"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-medium opacity-80">{it.label}</span>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}