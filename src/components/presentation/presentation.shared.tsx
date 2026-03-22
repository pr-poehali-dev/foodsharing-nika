import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { LOGO } from "./presentation.config";

/* ─── useInView ─── */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Anim ─── */
interface AnimProps { children: ReactNode; delay?: number; className?: string; }
export function Anim({ children, delay = 0, className = "" }: AnimProps) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className}
      style={{ transition: `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(28px)" }}>
      {children}
    </div>
  );
}

/* ─── Slide ─── */
interface SlideProps { id: string; children: ReactNode; style?: CSSProperties; className?: string; }
export function Slide({ id, children, style, className = "" }: SlideProps) {
  return (
    <section id={id} className={`relative flex items-center overflow-hidden ${className}`}
      style={{ height: "100vh", scrollSnapAlign: "start", ...style }}>
      {/* Лого-ватермарк на каждом слайде */}
      <BrandWatermark />
      {/* Лого-пин в правом верхнем углу */}
      <SlideLogo />
      {children}
    </section>
  );
}

/* ─── Лого-ватермарк (большой, прозрачный, в углу) ─── */
function BrandWatermark() {
  return (
    <div className="absolute bottom-6 left-8 z-10 pointer-events-none select-none flex items-center gap-2 opacity-20">
      <img src={LOGO} alt="НИКА" className="h-10 object-contain" />
      <span className="text-white text-xs font-bold tracking-widest uppercase">fondnika.ru</span>
    </div>
  );
}

/* ─── Лого в правом верхнем углу (видимое, читаемое) ─── */
function SlideLogo() {
  return (
    <div className="absolute top-5 right-6 z-50 flex items-center gap-3 pointer-events-none select-none">
      <div className="text-right hidden sm:block">
        <div className="text-white/60 text-[9px] uppercase tracking-widest leading-tight">Благотворительный фонд</div>
        <div className="text-white font-black text-sm tracking-wider leading-tight" style={{ fontFamily: "'Golos Text', sans-serif" }}>НИКА</div>
      </div>
      <img src={LOGO} alt="НИКА" className="h-12 w-12 object-contain drop-shadow-lg" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} />
    </div>
  );
}

/* ─── NikaLogo (большой, для Hero) ─── */
interface NikaLogoProps { size?: number; className?: string; }
export function NikaLogo({ size = 72, className = "" }: NikaLogoProps) {
  return <img src={LOGO} alt="Фонд НИКА" width={size} height={size} className={`object-contain ${className}`} />;
}

/* ─── Tag ─── */
interface TagProps { children: ReactNode; light?: boolean; color?: string; }
export function Tag({ children, light = false, color }: TagProps) {
  const base = "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5";
  const style = color
    ? { background: color, color: "#fff" }
    : light
      ? { background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.25)" }
      : { background: "#e0f0fb", color: "#0d5a96" };
  return <div className={base} style={style}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{children}</div>;
}

/* ─── ProjectStat (цифра + подпись) ─── */
interface StatProps { value: string; label: string; light?: boolean; }
export function ProjectStat({ value, label, light = false }: StatProps) {
  return (
    <div className="text-center px-3">
      <div className={`font-black text-3xl md:text-4xl ${light ? "text-white" : "gradient-text-cyan"}`}
        style={{ fontFamily: "'Golos Text', sans-serif" }}>{value}</div>
      <div className={`text-[10px] uppercase tracking-wider mt-1 ${light ? "text-white/50" : "text-slate-500"}`}>{label}</div>
    </div>
  );
}
