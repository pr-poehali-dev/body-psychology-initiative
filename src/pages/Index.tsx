import { useState } from "react";

/* ── SVG иконки ── */
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);
const IconCoffee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconActivity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z"/>
    <path d="M12 14c-6.627 0-9 2.686-9 6v1h18v-1c0-3.314-2.373-6-9-6z"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconArrowDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
);
const IconPlus = () => (
  <svg style={{ width: 20, height: 20, flexShrink: 0, transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)", color: "var(--color-primary)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconTg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.13.59-.48.73-.97.46l-2.68-1.97-1.29 1.24c-.14.14-.27.27-.54.27l.19-2.73 4.95-4.47c.22-.19-.05-.3-.33-.11L7.96 14.4l-2.63-.82c-.57-.18-.58-.57.12-.84l10.28-3.96c.47-.17.88.11.71.82z"/>
  </svg>
);
const IconPersonPlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

/* ── Nav ── */
function Nav() {
  return (
    <nav className="nav" aria-label="Основная навигация">
      <div className="nav__inner">
        <a href="#" className="nav__logo">Елена <span>Орехова</span></a>
        <ul className="nav__links" role="list">
          <li><a href="#approach">Подход</a></li>
          <li><a href="#about">О&nbsp;мне</a></li>
          <li><a href="#services">Форматы</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#cta" className="nav__cta">Записаться</a>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container--wide">
        <div className="hero__inner">
          <div className="hero__text fade-in">
            <span className="hero__label">Телесный психолог · Онлайн</span>
            <h1 className="hero__title">
              Твоё тело<br />
              уже давно<br />
              тебе <em>что-то говорит</em>
            </h1>
            <p className="hero__sub">Я помогаю женщинам разобраться — почему одно и то же повторяется в отношениях, теле и жизни. Через тело. Через характер. Через осанку.</p>
            <div className="hero__actions">
              <a href="#cta" className="btn-primary">
                Хочу разобраться
                <IconArrow />
              </a>
              <a href="#approach" className="btn-ghost">
                Узнать о подходе
                <IconArrowDown />
              </a>
            </div>
          </div>
          <div className="hero__photo-wrap fade-in fade-in-delay-1">
            <div className="hero__photo-placeholder" aria-label="Фото Елены Ореховой">
              <IconPersonPlaceholder />
              <span>Ваше фото здесь</span>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <div className="hero__badge-text">
                <strong>Доступна для записи</strong>
                Онлайн-сессии
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Recognition ── */
const painCards = [
  { Icon: IconClock, text: "Ты держишься. Всегда. Даже когда уже нет сил — улыбаешься и говоришь «всё нормально»" },
  { Icon: IconCoffee, text: "Хроническое напряжение в шее, плечах, спине — и ни один массаж не помогает надолго" },
  { Icon: IconHeart, text: "В отношениях — один и тот же сценарий. Снова и снова. Разные люди, одна история" },
  { Icon: IconAlert, text: "Ты не чувствуешь своего тела. Оно есть — но как будто отдельно от тебя" },
  { Icon: IconActivity, text: "Ты знаешь, что надо что-то изменить. Но тело не двигается. Будто заморожено" },
  { Icon: IconUser, text: "После родов или во время беременности ты вдруг перестала понимать, кто ты теперь" },
];

function Recognition() {
  return (
    <section className="recognition-section" id="recognition" aria-labelledby="recognition-title">
      <div className="container">
        <span className="section-label fade-in">Узнай себя</span>
        <h2 className="section-title fade-in" id="recognition-title">Если хотя бы одно<br />из этого — <em>про тебя:</em></h2>
        <p className="recognition__intro fade-in">Часто мы годами живём с ощущением, что что-то не так — но не можем назвать, что именно. Тело знает раньше, чем мы успеваем это понять.</p>
        <div className="recognition__grid">
          {painCards.map(({ Icon, text }, i) => (
            <div key={i} className={`pain-card fade-in${i % 3 === 1 ? " fade-in-delay-1" : i % 3 === 2 ? " fade-in-delay-2" : ""}`}>
              <div className="pain-card__icon"><Icon /></div>
              <p className="pain-card__text">{text}</p>
            </div>
          ))}
        </div>
        <p className="recognition__note fade-in">
          Это не слабость и не «у тебя что-то не так».<br />
          Это язык тела — и его можно научиться понимать.
        </p>
      </div>
    </section>
  );
}

/* ── Approach ── */
function Approach() {
  return (
    <section className="approach-section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach__header">
          <span className="section-label fade-in">Мой подход</span>
          <h2 className="section-title fade-in" id="approach-title">Три вещи, которые<br />обычно <em>существуют отдельно</em></h2>
        </div>
        <div className="approach__grid">
          <div className="approach-card fade-in">
            <div className="approach-card__num">01</div>
            <h3 className="approach-card__title">Тело как карта</h3>
            <p className="approach-card__text">Через то, как ты сидишь, дышишь, держишь плечи — я вижу, где живут твои страхи, где граница стёрлась, где злость застряла и не находит выхода. Это не мистика — это бодинамика и работа с телесным панцирем по Райху.</p>
          </div>
          <div className="approach-card fade-in fade-in-delay-1">
            <div className="approach-card__num">02</div>
            <h3 className="approach-card__title">Структура личности</h3>
            <p className="approach-card__text">Каждый человек устроен по-своему. Я провожу психодиагностику — не «вы тип А или Б», а живой портрет: как ты строишь отношения, какие защиты используешь, откуда растут твои сценарии. После этого многое встаёт на своё место.</p>
          </div>
          <div className="approach-card fade-in fade-in-delay-2">
            <div className="approach-card__num">03</div>
            <h3 className="approach-card__title">Осанка и красота</h3>
            <p className="approach-card__text">Осанка — это не «держи спину ровно». Это про то, сколько места ты позволяешь себе занимать в мире. Я в прошлом тренер, и я убеждена: красивая осанка начинается не в спортзале — она начинается изнутри.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__inner">
          <div className="fade-in">
            <span className="section-label">О&nbsp;мне</span>
            <h2 className="about__title" id="about-title"><em>Меня зовут</em><br />Елена Орехова</h2>
            <div className="section-divider" />
            <p className="about__body-text">Я телесный психолог, работаю в подходах бодинамики и вегетотерапии, провожу психодиагностику по клинической модели. В прошлом — тренер, и тело для меня всегда было первым языком.</p>
            <p className="about__body-text">Я не читаю лекции о том, «как надо». Я иду рядом — через тело, через слова, через то, что ты уже несёшь в себе.</p>
            <div className="about__pregnancy-note">
              <p>Сейчас я беременна — 16 недель. Это не пауза в работе. Это новый слой опыта: я проживаю изнутри то, о чём говорю с клиентками — страх потерять себя, изменение границ, новый образ тела.</p>
            </div>
            <div className="about__tags">
              {["Бодинамика", "Вегетотерапия", "Психодиагностика", "Осанка", "Онлайн"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="fade-in fade-in-delay-1">
            <div className="about__photo-placeholder" aria-label="Фото Елены Ореховой">
              <IconPersonPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services__header">
          <span className="section-label fade-in">Форматы работы</span>
          <h2 className="section-title fade-in" id="services-title">С чего <em>можно начать</em></h2>
        </div>
        <div className="services__grid">
          <div className="service-card fade-in">
            <span className="service-card__tag">Разовая встреча</span>
            <h3 className="service-card__title">Телесный разбор</h3>
            <p className="service-card__meta">90 минут · Онлайн</p>
            <p className="service-card__text">Я смотрю на то, как ты держишься, двигаешься, дышишь — и даю тебе живой портрет: что происходит в твоём теле, откуда напряжение, какой сценарий оно удерживает. Ты уходишь с конкретным пониманием, а не с новым списком «надо работать».</p>
            <a href="#cta" className="service-card__cta">
              Записаться
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="service-card service-card--featured fade-in fade-in-delay-1">
            <span className="service-card__tag">Популярно</span>
            <h3 className="service-card__title">Психодиагностическая сессия</h3>
            <p className="service-card__meta">90 минут · Онлайн</p>
            <p className="service-card__text">Глубокий разбор структуры личности: как ты устроена, какие защиты работают, откуда берутся повторяющиеся паттерны. Это не тест — это живой разговор, после которого многое встаёт на своё место.</p>
            <a href="#cta" className="service-card__cta">
              Записаться
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="service-card fade-in fade-in-delay-2">
            <span className="service-card__tag">Глубокая работа</span>
            <h3 className="service-card__title">Длительная терапия</h3>
            <p className="service-card__meta">Индивидуальный курс · Онлайн</p>
            <p className="service-card__text">Для тех, кто готов к настоящим изменениям. Мы работаем с телом, характером, историей — в темпе, который подходит именно тебе. Есть лист ожидания — напиши, чтобы войти.</p>
            <a href="#cta" className="service-card__cta">
              В лист ожидания
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
const reviews = [
  { quote: "Когда ты начала говорить о телосложении девушки и предполагать о её проблемах — у меня было ощущение, что ты говоришь обо мне. У меня такое же телосложение и, как ни странно, проблемы все те, которые ты описала", author: "Подписчица канала" },
  { quote: "После первой же встречи что-то сдвинулось. Я наконец поняла, почему моё тело так реагирует на определённые ситуации — и это было как выдох после многих лет задержки дыхания", author: "Клиентка, 34 года" },
  { quote: "Я думала, что работа с телом — это про упражнения. Оказалось — это про то, что я несу в теле уже двадцать лет и не замечаю. Лена это увидела за один сеанс", author: "Клиентка, 29 лет" },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label fade-in">Отзывы</span>
          <h2 className="section-title fade-in" id="testimonials-title">Что говорят<br /><em>после работы</em></h2>
        </div>
        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div key={i} className={`testimonial-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ""}`}>
              <p className="testimonial-card__quote">{r.quote}</p>
              <span className="testimonial-card__author">{r.author}</span>
            </div>
          ))}
        </div>
        <p className="testimonials__note fade-in">Люди узнают себя — потому что тело не врёт.</p>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  { q: "Я никогда не работала с телесным психологом. Как это происходит?", a: "Никаких упражнений по видео и «дышите глубже». Мы разговариваем — но я при этом замечаю, как меняется твоё тело в процессе разговора. Иногда предлагаю обратить внимание на ощущение прямо сейчас. Это мягко, безопасно и очень конкретно." },
  { q: "Можно работать онлайн? Это работает?", a: "Да, и это работает хорошо. Тело присутствует в сессии вне зависимости от того, где ты находишься. Онлайн-формат не мешает глубокой телесной работе — проверено." },
  { q: "Я беременна / недавно родила. Можно ли работать?", a: "Это особенно важный момент для работы с телом. Именно сейчас тело говорит громче всего — и важно это не пропустить. Я сама сейчас беременна и работаю с женщинами в этом периоде." },
  { q: "С чего начать, если я не знаю, что мне нужно?", a: "Начни с бесплатного звонка. 20 минут — и ты поймёшь, твоё ли это направление. Никаких обязательств — только ясность." },
  { q: "Сколько сессий нужно, чтобы что-то изменилось?", a: "Уже после первой встречи многие замечают сдвиг. Для глубоких изменений нужно больше времени — обычно мы договариваемся на 5–10 сессий и смотрим по процессу. Я не держу в работе дольше, чем это нужно." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <span className="section-label fade-in">FAQ</span>
          <h2 className="section-title fade-in" id="faq-title">Часто <em>спрашивают</em></h2>
        </div>
        <div className="faq__list" role="list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item fade-in">
              <button
                className="faq-item__btn"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <svg
                  style={{ width: 20, height: 20, flexShrink: 0, color: "var(--color-primary)", transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)", transform: open === i ? "rotate(45deg)" : "none" }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              {open === i && (
                <p className="faq-item__answer">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-title">
      <div className="container--narrow" style={{ textAlign: "center", position: "relative" }}>
        <span className="section-label fade-in">Начать</span>
        <h2 className="cta__title fade-in" id="cta-title">
          Иногда достаточно<br />одного разговора,<br />чтобы что-то <em>стало ясно</em>
        </h2>
        <p className="cta__text fade-in">Запишись на бесплатную встречу — 20 минут. Я расскажу, как устроена работа. Ты расскажешь, что происходит. И мы поймём, есть ли смысл идти дальше вместе.</p>
        <div className="cta__actions fade-in">
          <a href="https://t.me/ElenaOrehovaa" className="btn-inverse" target="_blank" rel="noopener noreferrer">
            <IconTg />
            Написать в Telegram
          </a>
          <a href="https://t.me/ElenaOrehovaa" className="btn-outline-inv" target="_blank" rel="noopener noreferrer">
            Бесплатный звонок 20&nbsp;мин
          </a>
        </div>
        <p className="cta__micro fade-in">@ElenaOrehovaa · Без обязательств · Только ясность</p>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container--wide">
        <div className="footer__inner">
          <div className="footer__logo">Елена <span>Орехова</span></div>
          <nav className="footer__links" aria-label="Ссылки в подвале">
            <a href="#approach">Подход</a>
            <a href="#services">Форматы</a>
            <a href="#faq">FAQ</a>
            <a href="https://t.me/ElenaOrehovaa" target="_blank" rel="noopener noreferrer">Telegram</a>
          </nav>
          <p className="footer__copy">© 2026 Елена Орехова</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <Recognition />
      <Approach />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
