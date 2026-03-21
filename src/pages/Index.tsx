import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO         = "https://cdn.poehali.dev/projects/c406f5d0-d4a4-4ecd-a7e6-e79636fc12ae/bucket/c6d1571c-5fa5-4e3c-9598-b8ab32647fef.png";
const IMG_VOLUNTEERS = "https://cdn.poehali.dev/projects/c406f5d0-d4a4-4ecd-a7e6-e79636fc12ae/files/6a1940ce-4594-46af-b6f7-f074ce143edb.jpg";
const IMG_WAREHOUSE  = "https://cdn.poehali.dev/projects/c406f5d0-d4a4-4ecd-a7e6-e79636fc12ae/files/ffa8e230-d811-43bf-bff9-a4c35c6d93dc.jpg";
const IMG_TEAM       = "https://cdn.poehali.dev/projects/c406f5d0-d4a4-4ecd-a7e6-e79636fc12ae/files/6625532b-3415-4e69-af04-377d31017529.jpg";

const slides = ["hero","whatIs","whoHelp","accept","howWork","benefits","partners","cta"];
const slideLabels = ["О проекте","Фудшеринг","Получатели","Что принимаем","Как работаем","Выгода","Партнёры","Контакты"];

type IconName = string;

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Anim({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

function Slide({ id, children, style }: { id: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section id={id} className="h-screen relative overflow-hidden flex items-center"
      style={{ scrollSnapAlign: "start", ...style }}>
      {children}
    </section>
  );
}

function NikaLogo({ size = 64, className = "" }: { size?: number; className?: string }) {
  return <img src={LOGO} alt="Фонд НИКА" width={size} height={size} className={`object-contain ${className}`} />;
}

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={light
        ? { background: "rgba(255,255,255,0.12)", color: "#7dcfee", border: "1px solid rgba(125,207,238,0.3)" }
        : { background: "#e0f0fb", color: "#0d5a96" }}>
      {children}
    </div>
  );
}

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

  const G_DARK = "linear-gradient(145deg, #071e34 0%, #0d3a5e 55%, #071e34 100%)";
  const G_DEEP = "linear-gradient(145deg, #071e34 0%, #0a2e50 100%)";
  const G_BLUE = "linear-gradient(135deg, #0d5a96, #1a7abf)";
  const G_CYAN = "linear-gradient(135deg, #1a7abf, #4aaee0)";

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll" style={{ scrollSnapType: "y mandatory" }}>

      {/* NAV DOTS */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} title={slideLabels[i]}
            className={`slide-nav-dot ${activeSlide === i ? "active" : ""}`} />
        ))}
      </div>

      {/* ── СЛАЙД 1: ТИТУЛЬНЫЙ ── */}
      <Slide id="hero" style={{ background: G_DARK }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #1a7abf 0%, transparent 65%)" }} />
          <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 65%)" }} />
        </div>
        {/* photo strip right */}
        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden hidden md:block">
          <img src={IMG_VOLUNTEERS} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 40%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #4aaee0, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #7dcfee, transparent)" }} />

        <div className="relative z-10 px-8 md:px-20 w-full max-w-6xl mx-auto">
          <div className="animate-slide-up flex items-center gap-4 mb-10">
            <NikaLogo size={72} className="drop-shadow-lg" />
            <div>
              <div className="text-white/50 text-xs uppercase tracking-widest">Благотворительный фонд</div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: "'Golos Text', sans-serif" }}>НИКА</div>
            </div>
          </div>

          <h1 className="animate-slide-up delay-200 font-black leading-[0.95] mb-6"
            style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(3rem,7vw,6rem)", color: "#fff" }}>
            Фудшеринг<span className="gradient-text-blue">.</span><br />
            <span className="gradient-text-blue">Ника</span>
          </h1>

          <p className="animate-slide-up delay-400 text-xl md:text-2xl mb-12"
            style={{ fontFamily: "'Cormorant', serif", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
            Превращаем товарные излишки в помощь людям
          </p>

          <div className="animate-slide-up delay-600 flex flex-wrap gap-8 md:gap-14">
            {[
              { n: "1 000+", l: "семей ежемесячно" },
              { n: "5",      l: "партнёров-компаний" },
              { n: "0 ₽",   l: "стоимость вывоза" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-black text-3xl md:text-4xl gradient-text-cyan"
                  style={{ fontFamily: "'Golos Text', sans-serif" }}>{s.n}</div>
                <div className="text-xs text-white/45 mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in delay-800 mt-14 flex items-center gap-2 opacity-40">
            <span className="text-xs text-white/50 uppercase tracking-widest">Листайте вниз</span>
            <div className="animate-float"><Icon name="ChevronDown" size={18} className="text-white/50" /></div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <p className="text-white/25 text-xs tracking-widest text-center">+7 (963) 448-65-92 · helpnika0@gmail.com</p>
        </div>
      </Slide>

      {/* ── СЛАЙД 2: ЧТО ТАКОЕ ФУДШЕРИНГ ── */}
      <Slide id="whatIs" style={{ background: "#f0f8ff" }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />
        <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 text-[20rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(26,122,191,0.05)", fontFamily: "'Golos Text', sans-serif" }}>02</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <Anim>
            <Tag>Мировой тренд</Tag>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
              Фудшеринг — выгоден<br /><span className="gradient-text-blue">бизнесу</span>
            </h2>
          </Anim>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Anim delay={200}>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#2a4a65" }}>
                Каждый год миллионы тонн качественных товаров отправляются на утилизацию, хотя могут помочь тем, кто в них нуждается.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#2a4a65" }}>
                <strong style={{ color: "#0d5a96" }}>«Фудшеринг.Ника»</strong> — мы бесплатно забираем ваши неликвиды, остатки, товары с истекающим сроком и передаём подопечным фонда.
              </p>

              <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl" style={{ background: G_DARK }}>
                <div className="flex-1 text-center">
                  <div className="font-black text-red-400 text-base flex items-center justify-center gap-2">
                    <Icon name="TrendingDown" size={18} /> На утилизацию
                  </div>
                  <div className="text-xs mt-1 text-white/40">без фудшеринга</div>
                </div>
                <Icon name="ArrowRight" size={18} className="text-white/25" />
                <div className="flex-1 text-center">
                  <div className="font-black gradient-text-cyan text-base flex items-center justify-center gap-2">
                    <Icon name="TrendingUp" size={18} className="text-cyan-300" /> Людям в помощь
                  </div>
                  <div className="text-xs mt-1 text-white/40">с «Фудшеринг.Ника»</div>
                </div>
              </div>
            </Anim>

            <Anim delay={400}>
              <div className="grid gap-3">
                {[
                  { icon: "Globe",      title: "Экономия ресурсов",          desc: "Качественные товары идут людям, а не на свалку" },
                  { icon: "Handshake", title: "Социальная ответственность", desc: "Ваш бренд участвует в реальной помощи обществу" },
                  { icon: "Package",   title: "Освобождение складов",        desc: "Избавляемся от остатков быстро и законно" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl transition hover:shadow-md"
                    style={{ background: "#fff", border: "1px solid #cce4f7" }}>
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "#e0f0fb" }}>
                      <Icon name={item.icon as IconName} size={20} style={{ color: "#1a7abf" }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: "#071e34" }}>{item.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#5a7a95" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Anim>
          </div>
        </div>
      </Slide>

      {/* ── СЛАЙД 3: КОМУ ПОМОГАЕМ ── */}
      <Slide id="whoHelp" style={{ background: G_DEEP }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_CYAN }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 70%)" }} />
        </div>
        {/* photo left */}
        <div className="absolute left-0 top-0 h-full w-[36%] overflow-hidden hidden lg:block">
          <img src={IMG_VOLUNTEERS} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:pl-[calc(36%+2rem)]">
          <Anim>
            <Tag light>Получатели помощи</Tag>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white"
              style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Ваши товары получают<br /><span className="gradient-text-cyan">те, кто ждёт</span>
            </h2>
          </Anim>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "Baby",            title: "Детские дома и интернаты" },
              { icon: "Church",          title: "Храмы и приходы" },
              { icon: "Users",           title: "Многодетные семьи" },
              { icon: "HeartHandshake",  title: "Пенсионеры и одинокие" },
              { icon: "Shield",          title: "Ветераны и участники СВО", sub: "совм. с фондом «Защитники Отечества»" },
              { icon: "UtensilsCrossed", title: "Трапезная Святой Екатерины", sub: "ежедневное горячее питание" },
            ].map((item, i) => (
              <Anim key={i} delay={i * 80}>
                <div className="p-4 rounded-2xl h-full transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(125,207,238,0.18)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(74,174,224,0.2)" }}>
                    <Icon name={item.icon as IconName} size={20} className="text-cyan-300" />
                  </div>
                  <div className="font-bold text-sm text-white leading-snug">{item.title}</div>
                  {"sub" in item && item.sub && (
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
                  )}
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── СЛАЙД 4: ЧТО ПРИНИМАЕМ ── */}
      <Slide id="accept" style={{ background: "#f0f8ff" }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />
        <div className="absolute inset-0 overflow-hidden">
          <img src={IMG_WAREHOUSE} alt="" className="w-full h-full object-cover opacity-[0.07]" />
        </div>
        <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 text-[20rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(13,90,150,0.05)", fontFamily: "'Golos Text', sans-serif" }}>04</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <Anim>
            <Tag>Принимаем</Tag>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
              Любые товары,<br />которые <span className="gradient-text-blue">можно использовать</span>
            </h2>
          </Anim>

          <div className="grid md:grid-cols-2 gap-5">
            <Anim delay={200}>
              <div className="p-6 rounded-3xl h-full" style={{ background: G_BLUE, color: "#fff" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <Icon name="Apple" size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Golos Text', sans-serif" }}>Продукты питания</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    ["ShoppingBasket", "Крупы, макароны, консервы"],
                    ["Salad",          "Овощи и фрукты (свежие, некондиция)"],
                    ["Croissant",      "Хлеб, молочная и мясная продукция"],
                    ["GlassWater",     "Напитки и сладости"],
                  ].map(([ic, t], i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <Icon name={ic as IconName} size={15} className="text-cyan-200 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
                  style={{ background: "rgba(0,0,0,0.25)" }}>
                  <Icon name="CheckCircle2" size={14} className="text-cyan-300 flex-shrink-0" />
                  Принимаем товары с истекающим сроком, если пригодны
                </div>
              </div>
            </Anim>

            <Anim delay={400}>
              <div className="p-6 rounded-3xl h-full" style={{ background: "linear-gradient(135deg, #0d5a96, #0a4070)", color: "#fff" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <Icon name="Shirt" size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Golos Text', sans-serif" }}>Непродовольственные</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    ["Droplets",    "Средства гигиены (подгузники, шампуни)"],
                    ["Sparkles",    "Бытовая химия, одежда и обувь"],
                    ["Gamepad2",    "Игрушки, книги, канцтовары, посуда"],
                    ["Plug",        "Мелкая бытовая техника (рабочая)"],
                    ["Thermometer", "Товары для СВО (термобельё, носки)"],
                  ].map(([ic, t], i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <Icon name={ic as IconName} size={15} className="text-blue-200 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Anim>
          </div>

          <Anim delay={600} className="mt-4">
            <div className="p-3.5 rounded-2xl flex items-center gap-3"
              style={{ background: "#e0f0fb", border: "1px dashed #4aaee0" }}>
              <Icon name="PackageCheck" size={20} style={{ color: "#1a7abf" }} className="flex-shrink-0" />
              <span className="font-semibold text-sm" style={{ color: "#0d5a96" }}>
                Забираем даже одну коробку — любое количество важно!
              </span>
            </div>
          </Anim>
        </div>
      </Slide>

      {/* ── СЛАЙД 5: КАК РАБОТАЕМ ── */}
      <Slide id="howWork" style={{ background: G_DARK }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_CYAN }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[35%] w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16">
          <Anim>
            <Tag light>Простой процесс</Tag>
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-white leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Три шага<br />к <span className="gradient-text-cyan">партнёрству</span>
            </h2>
          </Anim>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "PhoneCall",     title: "Вы сообщаете",     desc: "Звонок, e-mail или мессенджер — любым удобным способом сообщите о наличии товаров" },
              { step: "02", icon: "FileSignature",  title: "Договариваемся",   desc: "Согласуем список, дату вывоза, оформляем акт приёма-передачи для бухгалтерии" },
              { step: "03", icon: "Truck",           title: "Бесплатный вывоз", desc: "Наша машина забирает груз в удобное время. Никаких расходов с вашей стороны" },
            ].map((item, i) => (
              <Anim key={i} delay={i * 180}>
                <div className="relative p-6 rounded-3xl h-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(74,174,224,0.2)" }}>
                  <div className="absolute -top-5 -left-1 text-8xl font-black leading-none select-none"
                    style={{ color: "rgba(74,174,224,0.1)", fontFamily: "'Golos Text', sans-serif" }}>{item.step}</div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(74,174,224,0.18)" }}>
                    <Icon name={item.icon as IconName} size={24} className="text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
                </div>
              </Anim>
            ))}
          </div>

          <Anim delay={600} className="mt-7">
            <div className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ background: "rgba(74,174,224,0.08)", border: "1px solid rgba(74,174,224,0.25)" }}>
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "rgba(74,174,224,0.15)" }}>
                <Icon name="Camera" size={18} className="text-cyan-300" />
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                По желанию — <strong className="text-white">фотоотчёт</strong> о передаче и <strong className="text-white">упоминание в соцсетях</strong> вашей компании
              </p>
            </div>
          </Anim>
        </div>
      </Slide>

      {/* ── СЛАЙД 6: ВЫГОДА ── */}
      <Slide id="benefits" style={{ background: "#f0f8ff" }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(26,122,191,0.07) 0%, transparent 70%)" }} />
        <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 text-[20rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(13,90,150,0.05)", fontFamily: "'Golos Text', sans-serif" }}>06</div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <Anim>
            <Tag>Для бизнеса</Tag>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
              Почему бизнес<br /><span className="gradient-text-blue">выбирает нас</span>
            </h2>
          </Anim>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "Warehouse",      title: "Свободный склад",       desc: "Забираем неликвиды, возвраты и товары с истекающим сроком" },
              { icon: "PiggyBank",      title: "Экономия бюджета",      desc: "Ноль затрат на утилизацию, хранение и вывоз мусора" },
              { icon: "ClipboardCheck", title: "Прозрачная отчётность", desc: "Акты приёма-передачи и отчёты для бухгалтерии" },
              { icon: "Megaphone",      title: "Репутация в соцсетях",  desc: "Рассказываем о партнёрах по желанию — бесплатный PR" },
              { icon: "Leaf",           title: "Забота об экологии",    desc: "Полезные товары не становятся отходами" },
              { icon: "Heart",          title: "Социальная миссия",     desc: "Ваш бизнес реально помогает сотням семей" },
            ].map((item, i) => (
              <Anim key={i} delay={i * 80}>
                <div className="p-5 rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ background: "#ffffff", border: "1px solid #cce4f7" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: "#e0f0fb" }}>
                    <Icon name={item.icon as IconName} size={22} style={{ color: "#1a7abf" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#071e34" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "#5a7a95" }}>{item.desc}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </Slide>

      {/* ── СЛАЙД 7: ПАРТНЁРЫ ── */}
      <Slide id="partners" style={{ background: G_DEEP }}>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_CYAN }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <Anim>
            <Tag light>Социальное доказательство</Tag>
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-white leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif" }}>
              Нам <span className="gradient-text-cyan">доверяют</span>
            </h2>
          </Anim>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "Hotel",      name: "Marins Park Hotel",           desc: "Передают продукты питания и бытовые товары" },
              { icon: "Sprout",     name: "АО «Тепличное»",             desc: "Регулярные поставки свежих овощей и зелени" },
              { icon: "Factory",    name: "Русская медная компания",     desc: "Партнёр по непродовольственным товарам" },
              { icon: "Landmark",   name: "Администрация Екатеринбурга", desc: "Системное взаимодействие и поддержка проекта" },
              { icon: "BadgeCheck", name: "Фонд «Защитники Отечества»", desc: "Совместная помощь ветеранам и участникам СВО" },
            ].map((p, i) => (
              <Anim key={i} delay={i * 90}>
                <div className="p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(74,174,224,0.18)" }}>
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(74,174,224,0.18)" }}>
                    <Icon name={p.icon as IconName} size={20} className="text-cyan-300" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5">{p.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</div>
                  </div>
                </div>
              </Anim>
            ))}

            <Anim delay={500}>
              <div className="p-5 rounded-2xl flex items-center justify-center text-center animate-pulse-glow cursor-pointer h-full min-h-[80px]"
                style={{ background: "rgba(74,174,224,0.08)", border: "1px dashed rgba(74,174,224,0.45)" }}>
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ background: "rgba(74,174,224,0.18)" }}>
                    <Icon name="Plus" size={22} className="text-cyan-300" />
                  </div>
                  <div className="font-bold text-sm gradient-text-cyan">Ваша компания</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Стать следующим партнёром</div>
                </div>
              </div>
            </Anim>
          </div>
        </div>
      </Slide>

      {/* ── СЛАЙД 8: ПРИЗЫВ К ДЕЙСТВИЮ ── */}
      <Slide id="cta" style={{ background: G_DARK }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={IMG_TEAM} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(7,30,52,0.92) 0%, rgba(13,58,94,0.78) 100%)" }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, #4aaee0, #7dcfee, #1a7abf)" }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 65%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center">
          <Anim>
            <NikaLogo size={80} className="mx-auto mb-6 drop-shadow-xl" />

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(74,174,224,0.15)", color: "#7dcfee", border: "1px solid rgba(74,174,224,0.3)" }}>
              Стать партнёром
            </div>

            <h2 className="font-black mb-5 text-white leading-tight"
              style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Один звонок —<br />сотни <span className="gradient-text-cyan">спасённых судеб</span>
            </h2>

            <p className="text-xl mb-10" style={{ fontFamily: "'Cormorant', serif", color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              Свяжитесь с нами, чтобы обсудить детали партнёрства
            </p>
          </Anim>

          <Anim delay={300}>
            <div className="inline-block p-6 rounded-3xl mb-8"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(74,174,224,0.25)", backdropFilter: "blur(20px)" }}>
              <div className="font-semibold mb-4 gradient-text-cyan text-sm">Валентина, координатор проектов</div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a href="tel:+79634486592"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
                  style={{ background: G_BLUE }}>
                  <Icon name="Phone" size={16} />
                  +7 (963) 448-65-92
                </a>
                <a href="mailto:helpnika0@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.09)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Icon name="Mail" size={16} />
                  helpnika0@gmail.com
                </a>
              </div>
            </div>

            <div>
              <a href="mailto:helpnika0@gmail.com?subject=Хочу стать партнёром Фудшеринг.Ника"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-base transition-all hover:scale-105 hover:shadow-2xl"
                style={{ background: G_CYAN, color: "#fff", fontFamily: "'Golos Text', sans-serif" }}>
                <Icon name="Handshake" size={20} />
                Стать партнёром
              </a>
            </div>
          </Anim>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/20 text-xs tracking-widest">Благотворительный фонд «НИКА» · Фудшеринг.Ника</p>
        </div>
      </Slide>

    </div>
  );
}