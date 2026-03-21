import { useEffect, useRef, useState } from "react";
import { LOGO } from "./presentation.config";

export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export function Anim({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

export function Slide({ id, children, style }: { id: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section id={id} className="h-screen relative overflow-hidden flex items-center"
      style={{ scrollSnapAlign: "start", ...style }}>
      {children}
    </section>
  );
}

export function NikaLogo({ size = 64, className = "" }: { size?: number; className?: string }) {
  return <img src={LOGO} alt="Фонд НИКА" width={size} height={size} className={`object-contain ${className}`} />;
}

export function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={light
        ? { background: "rgba(255,255,255,0.12)", color: "#7dcfee", border: "1px solid rgba(125,207,238,0.3)" }
        : { background: "#e0f0fb", color: "#0d5a96" }}>
      {children}
    </div>
  );
}
