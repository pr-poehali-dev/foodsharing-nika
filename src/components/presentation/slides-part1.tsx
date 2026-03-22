import Icon from "@/components/ui/icon";
import { G_BLUE, G_DARK, IMG_VOLUNTEERS, IMG_WAREHOUSE, type IconName } from "./presentation.config";
import { Anim, NikaLogo, ProjectStat, Slide, Tag } from "./presentation.shared";

/* ── СЛАЙД 1: HERO ── */
export function SlideHero() {
  return (
    <Slide id="hero" style={{ background: G_DARK }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1a7abf 0%, transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 65%)" }} />
      </div>
      <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden hidden md:block">
        <img src={IMG_VOLUNTEERS} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 40%)" }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #4aaee0, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #7dcfee, transparent)" }} />

      <div className="relative z-10 px-8 md:px-20 w-full max-w-6xl mx-auto">
        <div className="animate-slide-up flex items-center gap-5 mb-10">
          <NikaLogo size={96} className="drop-shadow-xl" />
          <div>
            <div className="text-white/50 text-xs uppercase tracking-widest">Благотворительный фонд</div>
            <div className="text-white font-black text-2xl" style={{ fontFamily: "'Golos Text', sans-serif" }}>НИКА</div>
            <div className="text-white/40 text-[11px] mt-0.5">fondnika.ru</div>
          </div>
        </div>

        <h1 className="animate-slide-up delay-200 font-black leading-[0.95] mb-6"
          style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(3rem,7vw,6rem)", color: "#fff" }}>
          Фудшеринг<span className="gradient-text-blue">.</span><br />
          <span className="gradient-text-blue">Ника</span>
        </h1>

        <p className="animate-slide-up delay-400 text-xl md:text-2xl mb-12"
          style={{ fontFamily: "'Cormorant', serif", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
          Превращаем товарные излишки в реальную помощь людям
        </p>

        <div className="animate-slide-up delay-600 flex flex-wrap gap-10 md:gap-16">
          {[
            { n: "1 600+", l: "человек ежемесячно" },
            { n: "120+",   l: "партнёров-компаний" },
            { n: "6",      l: "социальных направлений" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="font-black text-4xl md:text-5xl gradient-text-cyan"
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
  );
}

/* ── СЛАЙД 2: ЧТО ТАКОЕ ФУДШЕРИНГ ── */
export function SlideWhatIs() {
  return (
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
  );
}

/* ── СЛАЙД 3: КТО ПОЛУЧАЕТ ПОМОЩЬ ── */
export function SlideWhoHelp() {
  return (
    <Slide id="whoHelp" style={{ background: "linear-gradient(145deg, #071e34 0%, #0a2e50 100%)" }}>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(135deg, #1a7abf, #4aaee0)" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 70%)" }} />
      </div>
      <div className="absolute left-0 top-0 h-full w-[36%] overflow-hidden hidden lg:block">
        <img src={IMG_VOLUNTEERS} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:pl-[calc(36%+2rem)]">
        <Anim>
          <Tag light>6 направлений помощи</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Ваши товары получают<br /><span className="gradient-text-cyan">те, кто нуждается</span>
          </h2>
        </Anim>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "Shield",       label: "Помощь бойцам СВО",      count: "30+ отправок" },
            { icon: "Church",       label: "Помощь храмам",           count: "15+ приходов" },
            { icon: "Baby",         label: "Детские дома",            count: "8+ учреждений" },
            { icon: "UtensilsCrossed", label: "Трапезная св. Екатерины", count: "200+ порций/день" },
            { icon: "Heart",        label: "Малоимущие семьи",        count: "800+ семей" },
            { icon: "Users",        label: "Бездомные граждане",      count: "400+ человек" },
          ].map((item, i) => (
            <Anim key={i} delay={i * 80}>
              <div className="p-4 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <Icon name={item.icon as IconName} size={22} className="text-cyan-400 mb-2" />
                <div className="text-white font-semibold text-sm leading-tight mb-1">{item.label}</div>
                <div className="text-cyan-400/70 text-xs font-bold">{item.count}</div>
              </div>
            </Anim>
          ))}
        </div>

        <Anim delay={500}>
          <div className="flex flex-wrap gap-8">
            <ProjectStat value="1 600+" label="человек ежемесячно" light />
            <ProjectStat value="6"      label="направлений" light />
            <ProjectStat value="5 лет"  label="работы фонда" light />
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 4: ЧТО ПРИНИМАЕМ ── */
export function SlideAccept() {
  return (
    <Slide id="accept" style={{ background: "#f7faff" }}>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag>Категории товаров</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight"
            style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
            Что мы принимаем<br /><span className="gradient-text-blue">от партнёров</span>
          </h2>
        </Anim>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: "ShoppingBasket", title: "Продукты питания",   desc: "Крупы, консервы, выпечка, молочное" },
            { icon: "Shirt",          title: "Одежда и обувь",      desc: "Новая или в хорошем состоянии" },
            { icon: "Package2",       title: "Бытовая химия",       desc: "Чистящие, стиральные средства" },
            { icon: "Pill",           title: "Медикаменты",         desc: "Не просроченные препараты" },
            { icon: "BookOpen",       title: "Канцтовары / книги",  desc: "Для детских домов и школ" },
            { icon: "Sofa",           title: "Мебель / техника",    desc: "Бытовые предметы в рабочем состоянии" },
          ].map((item, i) => (
            <Anim key={i} delay={i * 100}>
              <div className="group p-5 rounded-2xl h-full flex flex-col gap-3 transition hover:shadow-lg"
                style={{ background: "#fff", border: "1px solid #d4e8f8" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #e0f0fb, #c5e0f7)" }}>
                  <Icon name={item.icon as IconName} size={22} style={{ color: "#1a7abf" }} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1" style={{ color: "#071e34" }}>{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#5a7a95" }}>{item.desc}</div>
                </div>
              </div>
            </Anim>
          ))}
        </div>

        <Anim delay={700}>
          <div className="mt-8 p-4 rounded-2xl flex items-center gap-4" style={{ background: G_DARK }}>
            <Icon name="Truck" size={24} className="text-cyan-400 flex-shrink-0" />
            <p className="text-white/80 text-sm">
              Мы <strong className="text-white">сами приезжаем</strong> на склад и забираем товары — бесплатно, без бюрократии и лишних усилий с вашей стороны.
            </p>
          </div>
        </Anim>
      </div>
    </Slide>
  );
}
