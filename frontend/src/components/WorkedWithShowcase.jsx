import React, { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function BackgroundKnot() {
  const ref = React.useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.25;
      ref.current.rotation.y = t * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <torusKnotGeometry args={[1.3, 0.42, 220, 36]} />
      <meshStandardMaterial color="#0a0a0a" metalness={0.75} roughness={0.2} />
    </mesh>
  );
}

function R3FBackdrop() {
  return (
    <Canvas camera={{ position: [0, 0, 3.4], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 1, 2]} intensity={0.9} />
      <BackgroundKnot />
    </Canvas>
  );
}

export default function WorkedWithShowcase({ items = [] }) {
  const [active, setActive] = useState(0);
  const cycle = useMemo(() => items.map((i, idx) => ({ ...i, idx })), [items]);

  useEffect(() => {
    if (cycle.length === 0) return;
    const t = setInterval(() => setActive((v) => (v + 1) % cycle.length), 1800);
    return () => clearInterval(t);
  }, [cycle.length]);

  return (
    <section className="relative my-16 rounded-2xl overflow-hidden border border-white/40">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <R3FBackdrop />
      </div>
      {/* gradient blend */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0.6)_50%,transparent_80%)]" />

      <div className="px-6 sm:px-10 py-10 md:py-16">
        <div className="flex items-center gap-4">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Worked with</h4>
          <div className="h-3 w-3 rounded-full bg-foreground/80 animate-ping" />
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <div key={it.label} className={`glass h-16 px-3 py-2 flex items-center justify-center transition-all ${i === active ? "scale-[1.03] ring-1 ring-foreground/20" : "opacity-80"}`} title={it.label}>
              {it.logo ? (
                <img src={it.logo} alt={it.label} className="max-h-8 object-contain" loading="lazy" />
              ) : (
                <span className="text-sm font-medium opacity-90">{it.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}