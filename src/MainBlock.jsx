import { useState } from "react";

import imgNew1 from "./assets/news5.jpeg";
import imgNew2 from "./assets/news2.jpeg";
import imgNew3 from "./assets/news3.jpeg";
import imgNew4 from "./assets/news4.jpeg";
import imgNew5 from "./assets/news1.jpg";
import ImageCarousele from "./ImageCarousele";
import "./App.css";

function MainBlock() {
  //
  //news
  //
  const newsObj = [
    {
      image: imgNew1,
      title: "Оновлення сайту",
      date: new Date(2024, 10, 4),
      desc: "Наш сайт оновився! Тепер ще більше інформації та можливостей! ",
    },
    {
      image: imgNew2,
      title: "Новий проект для молоді",
      date: new Date(2024, 10, 4),
      desc: "Запускаємо новий проект, який змінить усі! Слідкуйте за оновленнями та приєднуйтесь до нас!",
    },
    {
      image: imgNew3,
      title: "Волонтерска акція",
      date: new Date(2024, 10, 4),
      desc: "Приєднуйтесь до нашої волонтерської акції та допоможіть змінити світ! ",
    },
    {
      image: imgNew4,
      title: "Подія місяця: Концерт",
      date: new Date(2024, 10, 4),
      desc: "Не пропустіть наш концерт! Це буде незабутньо!",
    },
    {
      image: imgNew5,
      title: "Школа абітурієнта",
      date: new Date(2024, 10, 4),
      desc: "Залучайся до нас!",
    },
  ];
  //
  //FAQ
  //
  const faq = [
    {
      question: "Які цілі молодіжної ради?",
      answer:
        "Допомагати молоді втілювати свої ідеї, сприяти розвитку активної громадської позиції, створювати можливості для самореалізації та об'єднання навколо спільних цінностей і проєктів!",
    },
    {
      question: "Як стати частиною молодіжної ради?",
      answer:
        "Щоб стати частиною молодіжної ради, просто заповни анкету на нашому сайті або надішли нам повідомлення в соціальних мережах. Ми радо зв'яжемося з тобою, познайомимо з нашою діяльністю, розповімо про наші проєкти та можливості. Разом ми зможемо втілювати в життя важливі ініціативи для молоді нашого міста! ",
    },
    {
      question: "Хто наші партнери?",
      answer: (
        <>
          Наші партнери — це організації, що підтримують наші ініціативи та
          допомагають втілювати наші проєкти в життя. Ознайомитися з повним
          переліком партнерів можна у розділі{" "}
          <span className="to-focus-detail">Наші партнери</span> на нашому
          сайті!
        </>
      ),
    },
    {
      question: "Як зв'язатися із нами?",
      answer:
        "Зв'язатися з нами дуже просто! Надсилайте нам повідомлення на електронну пошту або пишіть у наші соціальні мережі — ми завжди раді відповісти на ваші питання та підтримати вашу ініціативу!",
    },
  ];
  //
  //charCount
  //
  const [charCount, setCharCount] = useState(0);

  return (
    <main>
      <section className="main-back_sec1"></section>
      <ImageCarousele></ImageCarousele>
      <section className="main-sec3">
        <h2>Останні новини</h2>
        <section className="main-sec3-news">
          {newsObj.map((newsItem, index) => (
            <article key={index} className="main-sec3-news-wrap">
              <img src={newsItem.image} alt={newsItem.title} />
              <h3>{newsItem.title}</h3>
              <time dateTime={newsItem.date}>
                {newsItem.date instanceof Date
                  ? newsItem.date.toLocaleDateString("uk-UA")
                  : newsItem.date}
              </time>
              <p>{newsItem.desc}</p>
              <button>Детальніше</button>
            </article>
          ))}
        </section>
      </section>
      <section className="main-sec4">
        <h2>Часті запитання</h2>
        <div className="main-sec4-faq">
          {faq.map((faq, index) => (
            <details key={index} className="main-sec4-faq-list">
              <summary className="main-sec4-faq-list-question">
                <h4>{faq.question}</h4>
                <svg
                  className="custom-arrow"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 15.5L5 8.5H19L12 15.5Z" fill="black" />
                </svg>
              </summary>

              <p className="main-sec4-faq-list-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="main-sec5">
        <h2>Зв'язок з нами</h2>
        <form className="main-sec5-form">
          <input placeholder="Ваше ім'я" className="main-sec5-form-inp"></input>
          <input placeholder="Ваш email" className="main-sec5-form-inp"></input>
          <textarea
            placeholder="Повідомлення"
            className="main-sec5-form-inp"
            maxLength="400"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
              setCharCount(e.target.value.length);
            }}
          ></textarea>
          <p aria-live="polite" className="remaining-chars">
            {400 - charCount} / 400
          </p>
        </form>
        <button className="main-sec5-button">Відправити</button>
      </section>
      <section className="main-sec6">
        <h2>Наша активність у цифрах</h2>
        <div className="main-sec6-sumary">
          <div className="main-sec6-sumary-wrap">
            <div>100+</div>
            <p>Подій</p>
          </div>
          <div className="main-sec6-sumary-wrap">
            <div>35+</div>
            <p>Учасників</p>
          </div>
          <div className="main-sec6-sumary-wrap">
            <div>5+</div>
            <p>Партнерів</p>
          </div>
        </div>
      </section>
      <section className="main-sec7">
        <aside className="main-sec7-contacts">
          <h4>Контакти</h4>
          <p>
            Контакт центр (цілодобово) 1505 <br />
            <span className="contact-tel">+380 (99) 099-15-05</span>
          </p>
          <p>
            Звернення громадян (у робочий час) <br />
            <span className="contact-tel"> +38 050 018 1955</span>
          </p>
          <p>
            Центр надання адміністративних послуг (багатоканальний) <br />
            <span className="contact-tel"> +380 (626) 48-54-34</span>
          </p>
          <p>
            Відділ документального забезпечення та діловодства
            <br />
            <span className="contact-tel"> +380 (626) 48-55-02</span>
          </p>
          <p>E-mail obshotd@krm.gov.ua</p>
        </aside>
        <iframe
          className="main-sec7-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70827.91140759269!2d37.520105143991294!3d48.72157243340287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df97a4c0ea9b9b%3A0x6cfddec1592678ec!2z0JrRgNCw0LzQsNGC0L7RgNGB0LosINCU0L7QvdC10YbQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1731679288359!5m2!1sru!2sua"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}

export default MainBlock;
