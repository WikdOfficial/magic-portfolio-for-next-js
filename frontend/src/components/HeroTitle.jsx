import React, { useEffect, useState } from "react";

export default function HeroTitle({ text, className = "" }) {
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setTyped("");
    setIdx(0);
  }, [text]);

  useEffect(() => {
    if (idx > text.length) return;
    const t = setTimeout(() => {
      setTyped(text.slice(0, idx));
      setIdx((v) => v + 1);
    }, idx < 6 ? 120 : 28); // slower at start, then faster
    return () => clearTimeout(t);
  }, [idx, text]);

  return (
    <h1 aria-label={text} className={`${className} relative`}> 
      <span>{typed}</span>
      <span className="inline-block w-[0.65ch] -mb-1 h-[1.1em] align-middle ml-0.5 bg-foreground/80 animate-caret" />
      <style>{`
        @keyframes caret { 0%, 45% { opacity: 1 } 50%, 95% { opacity: 0 } 100% { opacity: 1 } }
        .animate-caret { animation: caret 1.1s steps(1) infinite; }
      `}</style>
    </h1>
  );
}