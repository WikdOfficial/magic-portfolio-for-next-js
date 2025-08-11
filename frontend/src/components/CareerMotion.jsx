import React from "react";

export default function CareerMotion() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '400ms' }} />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.10), transparent 35%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08), transparent 40%)'
      }} />
      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 16px)' }} />
    </div>
  );
}