import Icon from "@/components/ui/icon";
import {
  G_BLUE, G_CYAN, G_DARK, G_DEEP, G_GOLD, G_GREEN, G_RED,
  IMG_FOOD_1, IMG_FOOD_2, IMG_SVO, IMG_TEAM, IMG_TRAPEZA_1, IMG_TRAPEZA_2, IMG_WAREHOUSE,
  type IconName
} from "./presentation.config";
import { Anim, ProjectStat, Slide, Tag } from "./presentation.shared";

/* ── СЛАЙД 5: ГУМАНИТАРНАЯ ПОМОЩЬ СВО ── */
export function SlideSvo() {
  return (
    <Slide id="svo" style={{ background: "linear-gradient(145deg, #0f0f1a 0%, #1a0a0a 60%, #0f0f1a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_RED }} />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c0392b 0%, transparent 65%)" }} />
      </div>

      {/* Фото */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden hidden md:block">
        <img src={IMG_SVO} alt="Гуманитарная помощь СВО" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0f0f1a 0%, rgba(15,15,26,0.3) 60%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag color="#7b1a1a">Направление 1 из 6</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Гуманитарная помощь<br />
            <span style={{ color: "#e05555" }}>в зону СВО</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md" style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}>
            Наши бойцы на передовой — фонд «НИКА» доставляет всё необходимое прямо на место.
          </p>
        </Anim>

        <Anim delay={200}>
          <div className="grid grid-cols-2 gap-3 max-w-md mb-8">
            {[
              { icon: "Package",      text: "Продукты и консервы" },
              { icon: "Shirt",        text: "Тёплая одежда и экипировка" },
              { icon: "Pill",         text: "Медикаменты и перевязка" },
              { icon: "Zap",          text: "Тактическое снаряжение" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-xl"
                style={{ background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.35)" }}>
                <Icon name={item.icon as IconName} size={16} style={{ color: "#e05555" }} />
                <span className="text-white/80 text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </Anim>

        <Anim delay={400}>
          <div className="flex flex-wrap gap-8">
            <ProjectStat value="30+" label="отправок грузов" light />
            <ProjectStat value="5 т+" label="гуманитарного груза" light />
            <ProjectStat value="100%" label="адресная доставка" light />
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 6: ПОМОЩЬ ХРАМАМ ── */
export function SlideChurches() {
  return (
    <Slide id="churches" style={{ background: "linear-gradient(145deg, #12100a 0%, #1f1700 60%, #12100a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_GOLD }} />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c9860a 0%, transparent 65%)" }} />
      </div>

      <div className="absolute right-0 top-0 h-full w-[42%] overflow-hidden hidden md:block">
        <img src={IMG_FOOD_2} alt="Помощь храмам" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #12100a 0%, rgba(18,16,10,0.2) 55%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag color="#7c5200">Направление 2 из 6</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Помощь<br />
            <span style={{ color: "#e0a030" }}>православным храмам</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md" style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}>
            Фонд «НИКА» поддерживает приходы продуктами и всем необходимым для служения людям.
          </p>
        </Anim>

        <Anim delay={200}>
          <div className="grid gap-3 max-w-md mb-8">
            {[
              { icon: "UtensilsCrossed", text: "Продовольственные наборы для прихожан" },
              { icon: "Heart",           text: "Помощь малоимущим при храме" },
              { icon: "Package",         text: "Бытовые товары для приходской жизни" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "rgba(201,134,10,0.12)", border: "1px solid rgba(201,134,10,0.3)" }}>
                <Icon name={item.icon as IconName} size={18} style={{ color: "#e0a030" }} />
                <span className="text-white/80 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </Anim>

        <Anim delay={400}>
          <div className="flex flex-wrap gap-8">
            <ProjectStat value="15+" label="приходов-партнёров" light />
            <ProjectStat value="200+" label="наборов в месяц" light />
            <ProjectStat value="12" label="городов присутствия" light />
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 7: ПОМОЩЬ ДЕТСКИМ ДОМАМ ── */
export function SlideOrphans() {
  return (
    <Slide id="orphans" style={{ background: "linear-gradient(145deg, #0a1a0a 0%, #071f1f 60%, #0a1a0a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_GREEN }} />
        <div className="absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1a8a4a 0%, transparent 65%)" }} />
      </div>

      <div className="absolute right-0 top-0 h-full w-[42%] overflow-hidden hidden md:block">
        <img src={IMG_FOOD_1} alt="Помощь детским домам" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0a1a0a 0%, rgba(10,26,10,0.2) 55%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag color="#0a4a2a">Направление 3 из 6</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Помощь<br />
            <span style={{ color: "#40c070" }}>детским домам</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md" style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}>
            Каждый ребёнок достоин заботы. Фонд доставляет детям продукты, одежду, игрушки и канцтовары.
          </p>
        </Anim>

        <Anim delay={200}>
          <div className="grid grid-cols-2 gap-3 max-w-md mb-8">
            {[
              { icon: "BookOpen",  text: "Учебники и канцтовары" },
              { icon: "Shirt",     text: "Одежда и обувь" },
              { icon: "Cookie",    text: "Продукты и сладости" },
              { icon: "Gamepad2",  text: "Игрушки и досуг" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-xl"
                style={{ background: "rgba(26,138,74,0.12)", border: "1px solid rgba(26,138,74,0.3)" }}>
                <Icon name={item.icon as IconName} size={16} style={{ color: "#40c070" }} />
                <span className="text-white/80 text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </Anim>

        <Anim delay={400}>
          <div className="flex flex-wrap gap-8">
            <ProjectStat value="8+"   label="учреждений" light />
            <ProjectStat value="300+" label="детей ежемесячно" light />
            <ProjectStat value="4"    label="года поддержки" light />
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 8: ТРАПЕЗНАЯ СВ. ЕКАТЕРИНЫ ── */
export function SlideTrapeza() {
  return (
    <Slide id="trapeza" style={{ background: "linear-gradient(145deg, #0a0f1e 0%, #0d1a35 60%, #0a0f1e 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_CYAN }} />
        <div className="absolute -bottom-10 -right-10 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 65%)" }} />
      </div>

      {/* Коллаж из 2 фото */}
      <div className="absolute right-0 top-0 h-full w-[44%] overflow-hidden hidden md:flex flex-col">
        <img src={IMG_TRAPEZA_1} alt="Трапезная" className="h-1/2 w-full object-cover opacity-50" />
        <img src={IMG_TRAPEZA_2} alt="Продукты трапезной" className="h-1/2 w-full object-cover opacity-45" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0a0f1e 0%, rgba(10,15,30,0.25) 55%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag color="#0a2e50">Направление 4 из 6</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Трапезная<br />
            <span className="gradient-text-cyan">Святой Екатерины</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-md" style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}>
            Ежедневно кормим нуждающихся горячей едой — никто не уходит голодным.
          </p>
        </Anim>

        <Anim delay={200}>
          <div className="grid gap-3 max-w-md mb-8">
            {[
              { icon: "UtensilsCrossed", text: "Горячие обеды каждый день" },
              { icon: "Users",           text: "Приём всех без исключения" },
              { icon: "Wheat",           text: "Продукты от партнёров фонда" },
              { icon: "HandHeart",       text: "Работа 365 дней в году" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "rgba(74,174,224,0.1)", border: "1px solid rgba(74,174,224,0.25)" }}>
                <Icon name={item.icon as IconName} size={18} className="text-cyan-400" />
                <span className="text-white/80 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </Anim>

        <Anim delay={400}>
          <div className="flex flex-wrap gap-8">
            <ProjectStat value="200+"  label="порций в день" light />
            <ProjectStat value="6 000+" label="обедов в месяц" light />
            <ProjectStat value="365"   label="дней в году" light />
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 9: КАК МЫ РАБОТАЕМ ── */
export function SlideHowWork() {
  const steps = [
    { n: "01", icon: "Phone",      title: "Звоните или пишете",      desc: "Сообщите о вашем излишке — мы ответим в течение часа" },
    { n: "02", icon: "Truck",      title: "Мы приезжаем сами",       desc: "Бесплатный вывоз со склада без бюрократии" },
    { n: "03", icon: "PackageCheck",title: "Сортируем и распределяем",desc: "Товары передаются нуждающимся в тот же день" },
    { n: "04", icon: "FileText",   title: "Отчёт для вас",           desc: "Документы и фотоотчёт о факте передачи" },
  ];
  return (
    <Slide id="howWork" style={{ background: "#f0f8ff" }}>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag>Простой процесс</Tag>
          <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight"
            style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
            Как это работает<br /><span className="gradient-text-blue">за 4 шага</span>
          </h2>
        </Anim>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Anim key={i} delay={i * 150}>
              <div className="flex flex-col gap-3 p-5 rounded-2xl h-full"
                style={{ background: "#fff", border: "1px solid #cce4f7" }}>
                <div className="font-black text-5xl leading-none" style={{ color: "rgba(26,122,191,0.15)", fontFamily: "'Golos Text', sans-serif" }}>{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e0f0fb, #c5e0f7)" }}>
                  <Icon name={s.icon as IconName} size={20} style={{ color: "#1a7abf" }} />
                </div>
                <div className="font-bold text-sm" style={{ color: "#071e34" }}>{s.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#5a7a95" }}>{s.desc}</div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 10: ВЫГОДА ── */
export function SlideBenefits() {
  return (
    <Slide id="benefits" style={{ background: G_DEEP }}>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_CYAN }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1a7abf 0%, transparent 70%)" }} />
      </div>
      <div className="absolute right-0 top-0 h-full w-[38%] overflow-hidden hidden lg:block">
        <img src={IMG_WAREHOUSE} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag light>Для вашего бизнеса</Tag>
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Почему это выгодно<br /><span className="gradient-text-cyan">партнёрам</span>
          </h2>
        </Anim>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
          {[
            { icon: "Coins",         title: "Экономия на утилизации",    desc: "Не платите за вывоз и уничтожение товаров" },
            { icon: "Award",         title: "ESG и репутация",           desc: "Публичное признание и сертификат партнёра" },
            { icon: "FileCheck",     title: "Документооборот",           desc: "Все необходимые документы для бухгалтерии" },
            { icon: "Megaphone",     title: "Брендирование помощи",      desc: "Ваш логотип на наших акциях и отчётах" },
            { icon: "Shield",        title: "Законно и прозрачно",       desc: "Официальный фонд, полная отчётность" },
            { icon: "Clock",         title: "Оперативно",                desc: "Забираем в удобное время — без задержек" },
          ].map((b, i) => (
            <Anim key={i} delay={i * 80}>
              <div className="flex gap-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(74,174,224,0.2)" }}>
                  <Icon name={b.icon as IconName} size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white mb-0.5">{b.title}</div>
                  <div className="text-xs text-white/50">{b.desc}</div>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 11: ПАРТНЁРЫ ── */
export function SlidePartners() {
  return (
    <Slide id="partners" style={{ background: "#f7faff" }}>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: G_BLUE }} />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <Anim>
          <Tag>Нам доверяют</Tag>
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight"
            style={{ fontFamily: "'Golos Text', sans-serif", color: "#071e34" }}>
            <span className="gradient-text-blue">120+</span> компаний<br />уже помогают
          </h2>
          <p className="text-lg mb-10" style={{ color: "#5a7a95" }}>
            Торговые сети, производители, дистрибьюторы — все вместе меняем жизнь людей к лучшему.
          </p>
        </Anim>
        <Anim delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "ShoppingCart",  label: "Торговые сети",      count: "40+ магазинов" },
              { icon: "Factory",       label: "Производители",      count: "35+ предприятий" },
              { icon: "Truck",         label: "Дистрибьюторы",      count: "25+ компаний" },
              { icon: "Building2",     label: "Иные организации",   count: "20+ партнёров" },
            ].map((p, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ background: "#fff", border: "1px solid #d4e8f8" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #e0f0fb, #c5e0f7)" }}>
                  <Icon name={p.icon as IconName} size={22} style={{ color: "#1a7abf" }} />
                </div>
                <div className="font-bold text-sm mb-1" style={{ color: "#071e34" }}>{p.label}</div>
                <div className="text-xs font-black gradient-text-blue">{p.count}</div>
              </div>
            ))}
          </div>
        </Anim>
        <Anim delay={400}>
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="font-black text-4xl gradient-text-blue" style={{ fontFamily: "'Golos Text', sans-serif" }}>120+</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">партнёров</div>
            </div>
            <div className="text-center">
              <div className="font-black text-4xl gradient-text-blue" style={{ fontFamily: "'Golos Text', sans-serif" }}>1 600+</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">получателей/мес</div>
            </div>
            <div className="text-center">
              <div className="font-black text-4xl gradient-text-blue" style={{ fontFamily: "'Golos Text', sans-serif" }}>6</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">направлений</div>
            </div>
          </div>
        </Anim>
      </div>
    </Slide>
  );
}

/* ── СЛАЙД 12: CTA ── */
export function SlideCta() {
  return (
    <Slide id="cta" style={{ background: G_DARK }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1a7abf 0%, transparent 65%)" }} />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4aaee0 0%, transparent 65%)" }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #4aaee0, transparent)" }} />
      <div className="absolute right-0 top-0 h-full w-[38%] overflow-hidden hidden lg:block">
        <img src={IMG_TEAM} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071e34 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-20">
        <Anim>
          <Tag light>Присоединяйтесь</Tag>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white"
            style={{ fontFamily: "'Golos Text', sans-serif" }}>
            Станьте партнёром<br /><span className="gradient-text-cyan">фонда «НИКА»</span>
          </h2>
          <p className="text-xl mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Cormorant', serif", fontStyle: "italic" }}>
            Ваши излишки — это чья-то горячая еда, тёплая куртка или учебник. Свяжитесь с нами сегодня.
          </p>
        </Anim>
        <Anim delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+79634486592"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition hover:opacity-90 hover:scale-105"
              style={{ background: G_CYAN }}>
              <Icon name="Phone" size={22} /> +7 (963) 448-65-92
            </a>
            <a href="mailto:helpnika0@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
              <Icon name="Mail" size={22} /> helpnika0@gmail.com
            </a>
          </div>
        </Anim>
        <Anim delay={350}>
          <div className="flex flex-wrap gap-10">
            <ProjectStat value="1 600+" label="человек ежемесячно" light />
            <ProjectStat value="120+"   label="партнёров-компаний" light />
            <ProjectStat value="6"      label="направлений помощи" light />
          </div>
        </Anim>
        <Anim delay={500}>
          <div className="mt-10 text-white/25 text-xs">
            fondnika.ru · Благотворительный фонд «НИКА»
          </div>
        </Anim>
      </div>
    </Slide>
  );
}
