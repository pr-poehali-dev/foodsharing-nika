import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c406f5d0-d4a4-4ecd-a7e6-e79636fc12ae/files/b23f5696-4938-4f9e-9f31-f226c60488a6.jpg";

const slides = [
  "hero", "whatIs", "whoHelp", "accept", "howWork", "benefits", "partners", "cta"
];

const slideLabels = ["О проекте", "Фудшеринг", "Получатели", "Что принимаем", "Как работаем", "Ваша выгода", "Партнёры", "Контакты"];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {children}
    </div>
  );
}

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = window.innerHeight;
      const idx = Math.round(scrollTop / slideHeight);
      setActiveSlide(Math.min(idx, slides.length - 1));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (i: number) => {
    containerRef.current?.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>

      {/* NAV DOTS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 items-center">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goToSlide(i)}
            className={`slide-nav-dot transition-all duration-300 ${activeSlide === i ? "active" : ""}`}
            title={slideLabels[i]} />
        ))}
      </div>

      {/* ─── СЛАЙД 1: ТИТУЛЬНЫЙ ─── */}
      <section className="h-screen relative overflow-hidden flex flex-col items-center justify-center" style={{ scrollSnapAlign: "start", background: "linear-gradient(135deg, #0e2318 0%, #1a4a2e 40%, #0e2318 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #2da866 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #c8922a 0%, transparent 70%)" }} />
          <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #2da866 0%, transparent 70%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, #f0b94a, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, #2da866, transparent)" }} />

        <div className="relative z-10 text-center px-8 max-w-5xl">
          <div className="animate-slide-up inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c8922a, #f0b94a)" }}>
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'Golos Text', sans-serif" }}>Н</span>
            </div>
            <span className="text-white/80 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: "'Golos Text', sans-serif" }}>Благотворительный фонд «НИКА»</span>
          </div>

          <h1 className="animate-slide-up delay-200 text-6xl md:text-8xl font-black mb-4 leading-none" style={{ fontFamily: "'Golos Text', sans-serif", color: "#ffffff" }}>
            Фудшеринг<span className="gradient-text-gold">.</span><br />
            <span className="gradient-text-gold">Ника</span>
          </h1>

          <p className="animate-slide-up delay-400 text-xl md:text-2xl mb-12 font-light" style={{ fontFamily: "'Cormorant', serif", color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}>
            Превращаем товарные излишки в помощь людям
          </p>

          <div className="animate-slide-up delay-600 flex justify-center gap-8 md:gap-16">
            {[
              { num: "1000+", label: "семей ежемесячно" },
              { num: "5", label: "партнёров-компаний" },
              { num: "0 ₽", label: "стоимость вывоза" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text-gold" style={{ fontFamily: "'Golos Text', sans-serif" }}>{s.num}</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in delay-800 mt-14 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs text-white/50 uppercase tracking-widest">Листайте вниз</span>
            <div className="animate-float">
              <Icon name="ChevronDown" size={20} className="text-white/50" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
          <p className="text-white/30 text-xs tracking-wider text-center">+7 (963) 448-65-92 · helpnika0@gmail.com</p>
        </div>
      </section>

      {/* ─── СЛАЙД 2: ЧТО ТАКОЕ ФУДШЕРИНГ ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "#f7faf8" }}>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #1a7a4a, #2da866, #1a7a4a)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(45,168,102,0.06)", fontFamily: "'Golos Text', sans-serif" }}>02</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "#e8f5ee", color: "#1a7a4a" }}>
              Мировой тренд
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'Golos Text', sans-serif", color: "#0e2318" }}>
              Фудшеринг — выгоден<br /><span className="gradient-text-green">бизнесу</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection className="delay-200">
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#3a5244" }}>
                Каждый год миллионы тонн качественных продуктов и непродовольственных товаров отправляются на утилизацию, хотя они могут помочь тем, кто в них нуждается.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#3a5244" }}>
                <strong style={{ color: "#1a7a4a" }}>«Фудшеринг.Ника»</strong> — системное решение: мы бесплатно забираем ваши неликвиды, остатки, товары с истекающим сроком и передаём их подопечным фонда.
              </p>
            </AnimatedSection>

            <AnimatedSection className="delay-400">
              <div className="grid gap-4">
                {[
                  { icon: "🌍", title: "Экономия ресурсов", desc: "Качественные товары идут людям, а не на свалку" },
                  { icon: "🤝", title: "Социальная ответственность", desc: "Ваш бренд участвует в реальной помощи обществу" },
                  { icon: "📦", title: "Освобождение складов", desc: "Избавляемся от залежавшихся остатков быстро и законно" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-md" style={{ background: "#ffffff", border: "1px solid #e8f5ee" }}>
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="font-bold text-base" style={{ color: "#0e2318" }}>{item.title}</div>
                      <div className="text-sm mt-0.5" style={{ color: "#6b8c7a" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="delay-600 mt-10">
            <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, #0e2318, #1a4a2e)" }}>
              <div className="flex-1 text-center">
                <div className="text-2xl font-black" style={{ color: "#ff6b6b" }}>⬇ На утилизацию</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>без фудшеринга</div>
              </div>
              <div className="text-white/30 text-2xl">→</div>
              <div className="flex-1 text-center">
                <div className="text-2xl font-black gradient-text-gold">⬆ Людям в помощь</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>с «Фудшеринг.Ника»</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── СЛАЙД 3: КОМУ ПОМОГАЕМ ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "linear-gradient(135deg, #0e2318 0%, #1a3d28 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #f0b94a 0%, transparent 70%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #c8922a, #f0b94a, #c8922a)" }} />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(240,185,74,0.05)", fontFamily: "'Golos Text', sans-serif" }}>03</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(240,185,74,0.15)", color: "#f0b94a" }}>
              Получатели помощи
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight text-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Ваши товары получают<br /><span className="gradient-text-gold">те, кто ждёт</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🧸", title: "Детские дома и интернаты" },
              { icon: "⛪", title: "Храмы и приходы" },
              { icon: "👨‍👩‍👧‍👦", title: "Многодетные и малоимущие семьи" },
              { icon: "👵", title: "Пенсионеры и одинокие люди" },
              { icon: "🕊️", title: "Ветераны и участники СВО", subtitle: "совм. с фондом «Защитники Отечества»" },
              { icon: "🍲", title: "Трапезная Святой Екатерины", subtitle: "ежедневное горячее питание" },
            ].map((item, i) => (
              <AnimatedSection key={i} className={`delay-${(i + 1) * 100}`}>
                <div className="p-5 rounded-2xl h-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <div className="font-bold text-sm text-white leading-snug">{item.title}</div>
                  {"subtitle" in item && item.subtitle && <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{item.subtitle}</div>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── СЛАЙД 4: ЧТО ПРИНИМАЕМ ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "#fff8ee" }}>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #c8922a, #f0b94a, #c8922a)" }} />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #c8922a 0%, transparent 70%)" }} />
        <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(200,146,42,0.07)", fontFamily: "'Golos Text', sans-serif" }}>04</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "#fff0d0", color: "#c8922a" }}>
              Принимаем
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight" style={{ fontFamily: "'Golos Text', sans-serif", color: "#0e2318" }}>
              Любые товары,<br />которые <span className="gradient-text-gold">можно использовать</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection className="delay-200">
              <div className="p-6 rounded-3xl h-full" style={{ background: "linear-gradient(135deg, #1a7a4a, #2da866)", color: "white" }}>
                <div className="text-4xl mb-3">🍏</div>
                <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Golos Text', sans-serif" }}>Продукты питания</h3>
                <ul className="space-y-2">
                  {["Крупы, макароны, консервы", "Овощи и фрукты (свежие, некондиция)", "Хлеб, молочная и мясная продукция", "Напитки и сладости"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 px-3 py-2 rounded-xl text-xs font-semibold" style={{ background: "rgba(0,0,0,0.2)", color: "#fff" }}>
                  ✅ Принимаем товары с истекающим сроком, если пригодны
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="delay-400">
              <div className="p-6 rounded-3xl h-full" style={{ background: "linear-gradient(135deg, #c8922a, #f0b94a)", color: "white" }}>
                <div className="text-4xl mb-3">🧼</div>
                <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Golos Text', sans-serif" }}>Непродовольственные товары</h3>
                <ul className="space-y-2">
                  {["Средства гигиены (подгузники, шампуни)", "Бытовая химия, одежда и обувь", "Игрушки, книги, канцтовары, посуда", "Мелкая бытовая техника (рабочая)", "Товары для СВО (термобельё, носки)"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="delay-600 mt-5">
            <div className="p-4 rounded-2xl text-center font-semibold" style={{ background: "#e8f5ee", color: "#1a7a4a", border: "1px dashed #2da866" }}>
              📦 Забираем даже одну коробку — любое количество важно!
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── СЛАЙД 5: КАК РАБОТАЕМ ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "linear-gradient(160deg, #0e2318 0%, #1a4a2e 60%, #0a1a10 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[30%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #2da866 0%, transparent 70%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #1a7a4a, #2da866, #1a7a4a)" }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(45,168,102,0.2)", color: "#2da866" }}>
              Простой процесс
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-white leading-tight" style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Три шага<br />к <span className="gradient-text-gold">партнёрству</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: "📞", title: "Вы сообщаете", desc: "Звонок, e-mail или мессенджер — сообщите о наличии товаров любым удобным способом" },
              { step: "02", icon: "🤝", title: "Договариваемся", desc: "Согласуем список, дату вывоза, оформляем акт приёма-передачи" },
              { step: "03", icon: "🚛", title: "Бесплатный вывоз", desc: "Наша машина забирает груз в удобное для вас время. Никаких расходов с вашей стороны" },
            ].map((item, i) => (
              <AnimatedSection key={i} className={`delay-${(i + 1) * 200}`}>
                <div className="relative p-6 rounded-3xl h-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="absolute -top-4 -left-2 text-7xl font-black" style={{ color: "rgba(240,185,74,0.15)", fontFamily: "'Golos Text', sans-serif" }}>{item.step}</div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="delay-700 mt-8">
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: "rgba(240,185,74,0.1)", border: "1px solid rgba(240,185,74,0.3)" }}>
              <span className="text-2xl">📸</span>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                По желанию — <strong className="text-white">фотоотчёт</strong> о передаче и <strong className="text-white">благодарность в соцсетях</strong> с упоминанием вашей компании
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── СЛАЙД 6: ВЫГОДА ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "#f0fff6" }}>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #1a7a4a, #2da866, #1a7a4a)" }} />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1a7a4a 0%, transparent 70%)" }} />
        <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(26,122,74,0.06)", fontFamily: "'Golos Text', sans-serif" }}>06</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "#d4f0e0", color: "#1a7a4a" }}>
              Для бизнеса
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight" style={{ fontFamily: "'Golos Text', sans-serif", color: "#0e2318" }}>
              Почему бизнес<br /><span className="gradient-text-green">выбирает нас</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏭", title: "Свободный склад", desc: "Забираем неликвиды, возвраты и товары с истекающим сроком" },
              { icon: "💰", title: "Экономия бюджета", desc: "Ноль затрат на утилизацию, хранение и вывоз мусора" },
              { icon: "📋", title: "Прозрачная отчётность", desc: "Акты приёма-передачи и отчёты для бухгалтерии" },
              { icon: "🌟", title: "Репутация в соцсетях", desc: "Рассказываем о партнёрах по желанию — бесплатный PR" },
              { icon: "🌿", title: "Забота об экологии", desc: "Полезные товары не становятся отходами и мусором" },
              { icon: "❤️", title: "Социальная миссия", desc: "Ваш бизнес реально помогает сотням семей в трудной ситуации" },
            ].map((item, i) => (
              <AnimatedSection key={i} className={`delay-${(i + 1) * 100}`}>
                <div className="p-5 rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                  style={{ background: "#ffffff", border: "1px solid #d4f0e0" }}>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#0e2318" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#6b8c7a" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── СЛАЙД 7: ПАРТНЁРЫ ─── */}
      <section className="h-screen relative overflow-hidden flex items-center" style={{ scrollSnapAlign: "start", background: "linear-gradient(135deg, #0e2318 0%, #1a3d28 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #c8922a, #f0b94a, #c8922a)" }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #f0b94a 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(240,185,74,0.15)", color: "#f0b94a" }}>
              Социальное доказательство
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-white leading-tight" style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Нам <span className="gradient-text-gold">доверяют</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Marins Park Hotel", desc: "Передают продукты питания и бытовые товары", icon: "🏨" },
              { name: "АО «Тепличное»", desc: "Регулярные поставки свежих овощей и зелени", icon: "🌱" },
              { name: "Русская медная компания", desc: "Крупный партнёр по непродовольственным товарам", icon: "🏭" },
              { name: "Администрация Екатеринбурга", desc: "Системное взаимодействие и поддержка проекта", icon: "🏛️" },
              { name: "Фонд «Защитники Отечества»", desc: "Совместная помощь ветеранам и участникам СВО", icon: "🕊️" },
            ].map((p, i) => (
              <AnimatedSection key={i} className={`delay-${(i + 1) * 100}`}>
                <div className="p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <div className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Golos Text', sans-serif" }}>{p.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{p.desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection className="delay-600">
              <div className="p-5 rounded-2xl flex items-center justify-center text-center animate-pulse-glow cursor-pointer h-full min-h-[80px]"
                style={{ background: "linear-gradient(135deg, rgba(200,146,42,0.2), rgba(240,185,74,0.15))", border: "1px dashed rgba(240,185,74,0.5)" }}>
                <div>
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-bold text-sm gradient-text-gold" style={{ fontFamily: "'Golos Text', sans-serif" }}>Ваша компания</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Стать следующим партнёром</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── СЛАЙД 8: ПРИЗЫВ К ДЕЙСТВИЮ ─── */}
      <section className="h-screen relative overflow-hidden flex flex-col items-center justify-center" style={{ scrollSnapAlign: "start", background: "linear-gradient(160deg, #0e2318 0%, #1a4a2e 50%, #0a1a10 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #2da866 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #c8922a 0%, transparent 70%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: "linear-gradient(90deg, #c8922a, #f0b94a, #2da866, #f0b94a, #c8922a)" }} />

        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(14,35,24,0.9) 0%, rgba(26,74,46,0.7) 100%)" }} />

        <div className="relative z-10 text-center px-8 max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(240,185,74,0.15)", color: "#f0b94a", border: "1px solid rgba(240,185,74,0.3)" }}>
              Стать партнёром
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight" style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Один звонок —<br />сотни<br /><span className="gradient-text-gold">спасённых судеб</span>
            </h2>

            <p className="text-lg mb-10 font-light" style={{ fontFamily: "'Cormorant', serif", color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
              Свяжитесь с нами, чтобы обсудить детали партнёрства
            </p>
          </AnimatedSection>

          <AnimatedSection className="delay-300">
            <div className="inline-block p-6 rounded-3xl mb-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(20px)" }}>
              <div className="text-sm font-semibold mb-1 gradient-text-gold" style={{ fontFamily: "'Golos Text', sans-serif" }}>Валентина, координатор проектов</div>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-3">
                <a href="tel:+79634486592" className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #1a7a4a, #2da866)", fontFamily: "'Golos Text', sans-serif" }}>
                  <Icon name="Phone" size={16} />
                  +7 (963) 448-65-92
                </a>
                <a href="mailto:helpnika0@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#ffffff", fontFamily: "'Golos Text', sans-serif", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Icon name="Mail" size={16} />
                  helpnika0@gmail.com
                </a>
              </div>
            </div>

            <div className="block">
              <a href="mailto:helpnika0@gmail.com?subject=Хочу стать партнёром Фудшеринг.Ника"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #c8922a, #f0b94a)", color: "#0e2318", fontFamily: "'Golos Text', sans-serif" }}>
                <Icon name="Handshake" size={22} />
                Стать партнёром
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/30 text-xs tracking-wider">Благотворительный фонд «НИКА» · Фудшеринг.Ника</p>
          <p className="text-white/20 text-xs mt-1">Будем рады сотрудничеству!</p>
        </div>
      </section>

    </div>
  );
}
