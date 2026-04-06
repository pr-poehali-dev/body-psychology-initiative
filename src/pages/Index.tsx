import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const OFFICE_IMAGE = "https://cdn.poehali.dev/projects/05ff44cf-5004-4257-8325-ba6df24c83a3/files/120dd158-9306-4b17-a399-d6b0d5eff588.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Подход", href: "#approach" },
    { label: "Услуги", href: "#services" },
    { label: "О психологе", href: "#about" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl font-light tracking-wide text-[hsl(var(--warm-dark))]">
          <span className="font-semibold">Анна</span> Ветрова
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--warm-dark))] transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:flex items-center gap-2 bg-[hsl(var(--sage))] text-[hsl(var(--cream))] font-body text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Записаться
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[hsl(var(--border))] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-base text-[hsl(var(--foreground))] hover:text-[hsl(var(--sage))] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-[hsl(var(--sage))] text-[hsl(var(--cream))] font-body text-sm font-medium px-5 py-3 rounded-full"
          >
            Записаться на сессию
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-mesh-hero overflow-hidden flex items-center" id="home">
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--sage-mist))] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--cream-dark))] opacity-60 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 md:gap-8 items-center w-full">
        <div>
          <p className="animate-fade-up font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-6">
            Психолог · Психотерапевт
          </p>
          <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[hsl(var(--warm-dark))] mb-6">
            Пространство,<br />
            где можно<br />
            <em className="text-[hsl(var(--sage))]">быть собой</em>
          </h1>
          <p className="animate-fade-up delay-200 font-body text-[hsl(var(--muted-foreground))] text-lg leading-relaxed mb-10 max-w-md">
            Помогаю справиться с тревогой, найти себя и выстроить отношения — с миром и с собой. Индивидуальная работа онлайн и офлайн.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="bg-[hsl(var(--sage))] text-[hsl(var(--cream))] font-body font-medium px-7 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[hsl(145_18%_28%/0.25)]"
            >
              Записаться на сессию
            </a>
            <a
              href="#about"
              className="border border-[hsl(var(--sage))] text-[hsl(var(--sage))] font-body font-medium px-7 py-4 rounded-full hover:bg-[hsl(var(--sage-mist))] transition-all"
            >
              О психологе
            </a>
          </div>

          <div className="animate-fade-up delay-400 mt-12 flex items-center gap-8">
            {[["8+", "лет практики"], ["200+", "клиентов"], ["3", "подхода"]].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-[hsl(var(--sage))]">{num}</span>
                <span className="font-body text-xs text-[hsl(var(--muted-foreground))]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-300 relative flex justify-center md:justify-end">
          <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[hsl(var(--sage-mist))]" />
            <img
              src={OFFICE_IMAGE}
              alt="Кабинет психолога"
              className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
            />
            <div className="absolute z-20 -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--sage-mist))] flex items-center justify-center">
                <Icon name="Heart" size={18} className="text-[hsl(var(--sage))]" />
              </div>
              <div>
                <div className="font-body text-xs text-[hsl(var(--muted-foreground))]">Следующий шаг</div>
                <div className="font-body text-sm font-medium text-[hsl(var(--warm-dark))]">Бесплатная встреча</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-[hsl(var(--sage-light))] opacity-40" />
        <Icon name="ChevronDown" size={16} className="text-[hsl(var(--sage-light))] opacity-60" />
      </div>
    </section>
  );
}

function Approach() {
  const { ref, visible } = useInView();
  const pillars = [
    { icon: "Layers", title: "Глубинная работа", text: "Работаю с корневыми причинами, а не симптомами. Устойчивые изменения требуют глубины." },
    { icon: "Shield", title: "Безопасное пространство", text: "Полная конфиденциальность. Здесь нет осуждения — только принятие и честный диалог." },
    { icon: "Compass", title: "Ваш темп", text: "Никакого давления. Двигаемся ровно так, как комфортно именно вам." },
    { icon: "Sparkles", title: "Доказательная база", text: "КПТ, схема-терапия, психодинамика — выбираю метод под задачу, не наоборот." },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-4">Мой подход</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--warm-dark))] max-w-md leading-tight">
              Терапия, которая<br /><em className="text-[hsl(var(--sage))]">по-настоящему работает</em>
            </h2>
            <p className="font-body text-[hsl(var(--muted-foreground))] max-w-xs leading-relaxed">
              Я убеждена: за каждым симптомом стоит важный смысл. Моя задача — помочь вам его найти.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group p-7 rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--sage-mist))] hover:bg-[hsl(145_20%_90%/0.3)] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--sage-mist))] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon name={p.icon} fallback="Sparkles" size={22} className="text-[hsl(var(--sage))]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[hsl(var(--warm-dark))] mb-3">{p.title}</h3>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, visible } = useInView();
  const services = [
    {
      tag: "Популярное",
      title: "Индивидуальная терапия",
      desc: "Регулярные сессии 50 минут. Работаем с тревогой, депрессией, самооценкой, отношениями и любыми жизненными кризисами.",
      price: "от 4 500 ₽",
      features: ["1 раз в неделю", "Онлайн или офлайн", "Поддержка между сессиями"],
    },
    {
      tag: "Краткосрочно",
      title: "Фокусированная работа",
      desc: "8–12 встреч по конкретному запросу. Для тех, кто хочет решить одну задачу быстро и структурированно.",
      price: "от 5 000 ₽",
      features: ["Фиксированный запрос", "Чёткий план", "Видимый результат"],
    },
    {
      tag: "Для пар",
      title: "Парная терапия",
      desc: "Работаем с конфликтами, отчуждённостью, кризисами доверия. Помогаю паре снова говорить — и слышать друг друга.",
      price: "от 6 000 ₽",
      features: ["75 минут", "Оба партнёра", "Нейтральная позиция"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-mesh-hero">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-4">Услуги</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--warm-dark))] mb-16 max-w-lg leading-tight">
            Выберите формат,<br /><em className="text-[hsl(var(--sage))]">подходящий вам</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="inline-block font-body text-xs font-medium text-[hsl(var(--sage))] bg-[hsl(var(--sage-mist))] px-3 py-1 rounded-full mb-5">
                {s.tag}
              </span>
              <h3 className="font-display text-2xl font-semibold text-[hsl(var(--warm-dark))] mb-3">{s.title}</h3>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-[hsl(var(--foreground))]">
                    <Icon name="Check" size={14} className="text-[hsl(var(--sage))] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-[hsl(var(--border))]">
                <span className="font-display text-xl font-semibold text-[hsl(var(--warm-dark))]">{s.price}</span>
                <a href="#contacts" className="font-body text-sm font-medium text-[hsl(var(--sage))] hover:underline flex items-center gap-1">
                  Записаться <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useInView();
  const creds = [
    "Московский государственный психологический университет",
    "Дополнительная подготовка по КПТ (АКПП)",
    "Сертификат по схема-терапии",
    "Личная терапия и регулярная супервизия",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[hsl(var(--warm-dark))]">
      <div ref={ref} className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[hsl(145_18%_28%/0.3)]" />
            <img src={OFFICE_IMAGE} alt="Анна Ветрова — психолог" className="relative z-10 w-full h-[480px] object-cover rounded-[2rem]" />
          </div>
          <div className="absolute z-20 -bottom-6 -right-4 md:-right-8 bg-[hsl(var(--sage))] text-[hsl(var(--cream))] rounded-2xl p-6 max-w-[220px] shadow-2xl">
            <Icon name="Quote" size={20} className="mb-3 opacity-60" />
            <p className="font-display text-base font-light italic leading-relaxed">«Каждый человек — эксперт своей жизни»</p>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-5">О психологе</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--cream))] mb-6 leading-tight">Анна Ветрова</h2>
          <p className="font-body text-[hsl(40_20%_70%)] leading-relaxed mb-6">
            Я работаю в интегративном подходе — опираюсь на когнитивно-поведенческую терапию, схема-терапию и психодинамические методы. Подбираю инструменты индивидуально под каждого клиента.
          </p>
          <p className="font-body text-[hsl(40_20%_70%)] leading-relaxed mb-10">
            Специализируюсь на тревожных расстройствах, депрессии, самооценке и отношениях. Верю, что терапия должна быть тёплой, структурированной и приносить конкретные результаты.
          </p>
          <div className="space-y-3">
            {creds.map((c, i) => (
              <div
                key={c}
                className={`flex items-start gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 80 + 400}ms` }}
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-[hsl(var(--sage))] flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={11} className="text-[hsl(var(--cream))]" />
                </div>
                <span className="font-body text-sm text-[hsl(40_20%_75%)]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { ref, visible } = useInView();
  const cases = [
    { emoji: "🌱", theme: "Тревога и панические атаки", duration: "6 месяцев", result: "Клиентка вернулась к работе и публичным выступлениям после полутора лет избегания." },
    { emoji: "🔗", theme: "Отношения и границы", duration: "8 месяцев", result: "Пара восстановила доверие и выстроила общение без манипуляций и обид." },
    { emoji: "🪞", theme: "Самооценка и перфекционизм", duration: "5 месяцев", result: "Мужчина принял карьерное решение без самобичевания и впервые получил удовольствие от работы." },
    { emoji: "🌊", theme: "Проживание утраты", duration: "4 месяца", result: "Женщина смогла горевать, не застряв в нём, и снова начала строить будущее." },
    { emoji: "💼", theme: "Профессиональное выгорание", duration: "3 месяца", result: "Руководитель восстановил ресурс, пересмотрел приоритеты и снизил рабочую нагрузку." },
    { emoji: "🧩", theme: "Идентичность и смысл", duration: "10 месяцев", result: "Молодой человек после сложного переезда нашёл себя в новой стране и профессии." },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-4">Примеры работ</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--warm-dark))] max-w-md leading-tight">
              Истории<br /><em className="text-[hsl(var(--sage))]">изменений</em>
            </h2>
          </div>
          <p className="font-body text-[hsl(var(--muted-foreground))] mb-16 max-w-xl">
            Все случаи изменены для соблюдения конфиденциальности. Имена и детали не указаны.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.theme}
              className={`group p-7 rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--sage-mist))] bg-[hsl(var(--background))] hover:bg-[hsl(145_20%_90%/0.2)] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{c.emoji}</div>
              <h3 className="font-display text-lg font-semibold text-[hsl(var(--warm-dark))] mb-2">{c.theme}</h3>
              <span className="inline-block font-body text-xs text-[hsl(var(--sage))] bg-[hsl(var(--sage-mist))] px-3 py-1 rounded-full mb-4">
                {c.duration}
              </span>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { ref, visible } = useInView();
  const reviews = [
    { name: "Мария К.", period: "В терапии 8 месяцев", text: "Анна помогла мне справиться с тревогой, которая не давала жить нормально. Я наконец-то чувствую, что управляю своей жизнью, а не она мной.", stars: 5 },
    { name: "Дмитрий В.", period: "В терапии 4 месяца", text: "Сначала скептически относился к психологии. Теперь понимаю, что это один из лучших вкладов в себя. Стал спокойнее, разобрался с работой и отношениями.", stars: 5 },
    { name: "Ольга Н.", period: "Парная терапия, 6 месяцев", text: "Мы с мужем были на грани развода. После работы с Анной научились слышать друг друга. Это буквально спасло нашу семью.", stars: 5 },
    { name: "Алина М.", period: "В терапии 3 месяца", text: "Пришла с выгоранием — уходила с ощущением, что снова знаю, кто я и чего хочу. Анна очень внимательная и проницательная.", stars: 5 },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-mesh-hero">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-4">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--warm-dark))] mb-16 max-w-md leading-tight">
            Что говорят<br /><em className="text-[hsl(var(--sage))]">клиенты</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-white rounded-3xl p-8 shadow-sm transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-[hsl(var(--gold))] text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-[hsl(var(--foreground))] leading-relaxed mb-6 text-base italic">«{r.text}»</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[hsl(var(--border))]">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--sage-mist))] flex items-center justify-center font-display font-semibold text-[hsl(var(--sage))]">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-[hsl(var(--foreground))]">{r.name}</div>
                  <div className="font-body text-xs text-[hsl(var(--muted-foreground))]">{r.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { ref, visible } = useInView();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Как проходит первая сессия?", a: "Первая встреча — знакомство. Вы рассказываете о своём запросе, я — о том, как работаю. Вместе мы решаем, подходим ли друг другу. Без обязательств." },
    { q: "Как долго длится терапия?", a: "Зависит от запроса. Краткосрочная работа — 8–12 сессий. Глубинная терапия — от полугода. Обычно через 4–6 встреч вы уже чувствуете первые изменения." },
    { q: "Работаете ли онлайн?", a: "Да, провожу онлайн-сессии через видеосвязь. Форматы равноценны по эффективности. Офлайн — по запросу, в Москве." },
    { q: "Конфиденциальны ли наши разговоры?", a: "Полностью. Всё, что вы говорите, остаётся между нами. Я не обсуждаю клиентов с третьими лицами ни при каких обстоятельствах." },
    { q: "Что если терапия мне не подойдёт?", a: "Вы всегда можете завершить работу — в любой момент, без объяснений. Терапия должна быть добровольной. Я также могу помочь найти другого специалиста, если наш формат не совпадает." },
    { q: "Как оплатить сессию?", a: "Переводом на карту или через сайт перед сессией. Принимаю СБП, Тинькофф, Сбер. Работаю без посредников." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} text-center mb-16`}>
          <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-4">Вопросы и ответы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--warm-dark))] leading-tight">
            Часто<br /><em className="text-[hsl(var(--sage))]">спрашивают</em>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${open === i ? "border-[hsl(var(--sage-mist))] bg-[hsl(145_20%_90%/0.2)]" : "border-[hsl(var(--border))] bg-white"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-body font-medium text-[hsl(var(--warm-dark))]">{f.q}</span>
                <Icon
                  name="ChevronDown"
                  size={18}
                  className={`text-[hsl(var(--sage))] flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const { ref, visible } = useInView();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 md:py-32 bg-mesh-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(145 20% 60%) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-[hsl(var(--sage-light))] text-sm tracking-[0.2em] uppercase mb-5">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--cream))] mb-6 leading-tight">
              Сделайте<br /><em className="text-[hsl(145_25%_60%)]">первый шаг</em>
            </h2>
            <p className="font-body text-[hsl(40_20%_65%)] leading-relaxed mb-10">
              Напишите — и мы договоримся о бесплатной 15-минутной встрече-знакомстве. Никаких обязательств.
            </p>

            <div className="space-y-5">
              {[
                { icon: "Mail", label: "Почта", value: "anna@vetrovapsych.ru" },
                { icon: "Phone", label: "Телефон / WhatsApp", value: "+7 (999) 123-45-67" },
                { icon: "MapPin", label: "Офис", value: "Москва, ул. Пречистенка, 17" },
                { icon: "Clock", label: "Приём", value: "Пн–Пт 10:00–20:00, Сб 11:00–17:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[hsl(145_18%_35%)] flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} fallback="Info" size={18} className="text-[hsl(var(--cream))]" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-[hsl(40_20%_50%)] mb-0.5">{item.label}</div>
                    <div className="font-body text-sm text-[hsl(40_20%_80%)]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {sent ? (
              <div className="bg-[hsl(145_18%_22%)] rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--sage))] flex items-center justify-center mx-auto mb-5">
                  <Icon name="Check" size={28} className="text-[hsl(var(--cream))]" />
                </div>
                <h3 className="font-display text-2xl text-[hsl(var(--cream))] mb-3">Заявка отправлена!</h3>
                <p className="font-body text-sm text-[hsl(40_20%_60%)]">Я свяжусь с вами в течение нескольких часов для подтверждения встречи.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[hsl(145_18%_18%)] rounded-3xl p-8 space-y-5">
                <h3 className="font-display text-2xl font-light text-[hsl(var(--cream))] mb-2">Записаться на сессию</h3>
                <p className="font-body text-xs text-[hsl(40_20%_55%)] mb-4">Первая встреча-знакомство — бесплатно</p>
                {[
                  { name: "name", label: "Ваше имя", placeholder: "Как к вам обращаться?", type: "text" },
                  { name: "phone", label: "Телефон или email", placeholder: "+7 (___) ___-__-__", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-body text-xs text-[hsl(40_20%_55%)] mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-[hsl(145_18%_22%)] border border-[hsl(145_15%_28%)] rounded-xl px-4 py-3 font-body text-sm text-[hsl(40_20%_80%)] placeholder:text-[hsl(40_15%_40%)] focus:outline-none focus:border-[hsl(var(--sage-light))] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-body text-xs text-[hsl(40_20%_55%)] mb-1.5 block">С чем хотите поработать?</label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите немного о своём запросе..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[hsl(145_18%_22%)] border border-[hsl(145_15%_28%)] rounded-xl px-4 py-3 font-body text-sm text-[hsl(40_20%_80%)] placeholder:text-[hsl(40_15%_40%)] focus:outline-none focus:border-[hsl(var(--sage-light))] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--sage))] text-[hsl(var(--cream))] font-body font-medium py-4 rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  Отправить заявку
                </button>
                <p className="font-body text-xs text-[hsl(40_15%_40%)] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[hsl(var(--warm-dark))] border-t border-[hsl(30_15%_16%)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-[hsl(40_20%_70%)] font-light">
          <span className="font-semibold">Анна</span> Ветрова
        </span>
        <p className="font-body text-xs text-[hsl(40_15%_40%)]">© 2026 · Психолог, психотерапевт · Москва</p>
        <div className="flex items-center gap-5">
          {["Telegram", "Instagram"].map((s) => (
            <a key={s} href="#contacts" className="font-body text-xs text-[hsl(40_20%_50%)] hover:text-[hsl(40_20%_70%)] transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Approach />
      <Services />
      <About />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}