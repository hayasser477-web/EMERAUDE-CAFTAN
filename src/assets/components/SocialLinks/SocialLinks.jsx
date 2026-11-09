
import {
  FaInstagram,
} from "react-icons/fa";
import "./SocialLinks.css";

const socialLinks = [
  {
    name: "Instagram",
    description: "اكتشفي أحدث إطلالاتنا",
    url: "https://www.instagram.com/emeraude_caftan_/",
    icon: <FaInstagram />,
    className: "instagram",
  },
];

export default function SocialLinks() {
  return (
    <section className="social-links" id="contact" dir="rtl">
      <div className="social-links__container">
        <span className="social-links__eyebrow">
          EMERAUDE CAFTAN
        </span>

        <h2 className="social-links__title">
          عالمنا أقرب إليكِ
        </h2>

        <p className="social-links__description">
          تابعي حساباتنا واكتشفي الأناقة التي تجمع بين السترة والجمال.
        </p>

        <span className="social-links__divider" />

        <div className="social-links__grid">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`تابعينا على ${item.name}`}
              className={`social-card social-card--${item.className}`}
            >
              <span className="social-card__icon">
                {item.icon}
              </span>

              <span className="social-card__name">
                {item.name}
              </span>

              <span className="social-card__description">
                {item.description}
              </span>

              <span className="social-card__action">
                اكتشفي المزيد
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          ))}
        </div>

        <div className="social-links__bottom">
          <span className="social-links__bottom-line" />
          <p>أناقة في التفاصيل، وثقة في الاختيار.</p>
          <span className="social-links__bottom-line" />
        </div>
      </div>
    </section>
  );
}
