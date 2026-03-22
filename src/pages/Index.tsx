import { useEffect, useRef, useState } from "react";
import { slides, slideLabels } from "@/components/presentation/presentation.config";
import { SlideHero, SlideWhatIs, SlideWhoHelp, SlideAccept } from "@/components/presentation/slides-part1";
import {
  SlideSvo, SlideChurches, SlideOrphans, SlideTrapeza,
  SlideHowWork, SlideBenefits, SlidePartners, SlideCta
} from "@/components/presentation/slides-part2";

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / window.innerHeight);
      setActiveSlide(Math.min(idx, slides.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) =>
    containerRef.current?.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>

      {/* NAV DOTS */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} title={slideLabels[i]}
            className={`slide-nav-dot ${activeSlide === i ? "active" : ""}`} />
        ))}
      </div>

      <SlideHero />
      <SlideWhatIs />
      <SlideWhoHelp />
      <SlideAccept />
      <SlideSvo />
      <SlideChurches />
      <SlideOrphans />
      <SlideTrapeza />
      <SlideHowWork />
      <SlideBenefits />
      <SlidePartners />
      <SlideCta />

    </div>
  );
}