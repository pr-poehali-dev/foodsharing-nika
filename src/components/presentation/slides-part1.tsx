import Icon from "@/components/ui/icon";
import { G_BLUE, G_DARK, IMG_VOLUNTEERS, IMG_WAREHOUSE, type IconName } from "./presentation.config";
import { Anim, NikaLogo, Slide, Tag } from "./presentation.shared";

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
  );
}

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
  );
}

export function SlideAccept() {
  return (
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
  );
}
