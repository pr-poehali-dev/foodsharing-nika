import Icon from "@/components/ui/icon";
import { G_BLUE, G_CYAN, G_DARK, G_DEEP, IMG_TEAM, type IconName } from "./presentation.config";
import { Anim, NikaLogo, Slide, Tag } from "./presentation.shared";

export function SlideHowWork() {
  return (
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
            { step: "01", icon: "PhoneCall",    title: "Вы сообщаете",     desc: "Звонок, e-mail или мессенджер — любым удобным способом сообщите о наличии товаров" },
            { step: "02", icon: "FileSignature", title: "Договариваемся",   desc: "Согласуем список, дату вывоза, оформляем акт приёма-передачи для бухгалтерии" },
            { step: "03", icon: "Truck",          title: "Бесплатный вывоз", desc: "Наша машина забирает груз в удобное время. Никаких расходов с вашей стороны" },
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
  );
}

export function SlideBenefits() {
  return (
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
  );
}

export function SlidePartners() {
  return (
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
  );
}

export function SlideCta() {
  return (
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
  );
}
