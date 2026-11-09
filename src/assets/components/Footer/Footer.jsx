
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import product1 from "../../images/img (2).jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // الانتقال إلى قسم داخل الصفحة الرئيسية
  function goToSection(event, sectionId) {
    event.preventDefault();

    // إذا كنت بالفعل في الصفحة الرئيسية
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", `/#${sectionId}`);
      }

      return;
    }

    // إذا كنت في صفحة أخرى، انتقل إلى الرئيسية ثم إلى القسم
    navigate(`/#${sectionId}`);
  }

  // الوصول إلى القسم المطلوب بعد الانتقال إلى الصفحة الرئيسية
  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);

    const timeout = setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Brand */}
        <div className="footer__brand">
          <a
            href="/#home"
            className="footer__logo"
            onClick={(event) => goToSection(event, "home")}
          >
            <span className="footer__logo-main">EMERAUDE</span>
            <span className="footer__logo-sub">CAFTAN</span>
          </a>

          <p className="footer__tagline">
            الأناقة في كل تفصيل
          </p>

          <p className="footer__description">
            اكتشفي مجموعة من الأفكار التي تضفي لمسة من الروعة
            اطّلعي عليها فوراً واستعد أناقتك.
          </p>
        </div>

        {/* Product Image */}
        <div className="footer__product">
          <div className="footer__product-frame">
            <img
              src={product1}
              alt="Produit Chanez Collection"
              className="footer__product-image"
              loading="lazy"
            />
            <span className="footer__product-label">
              EMERAUDE CAFTAN
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__navigation">
          <h3 className="footer__heading">الصفحات الاخرى</h3>

          <ul className="footer__links">
            <li>
              <a
                href="/#home"
                onClick={(event) => goToSection(event, "home")}
              >
                الرئيسية
              </a>
            </li>

            <li>
              <a href="/collection">منتجاتنا</a>
            </li>

            <li>
              <a
                href="/#testimonials"
                onClick={(event) =>
                  goToSection(event, "testimonials")
                }
              >
                اراء زبائننا
              </a>
            </li>

            <li>
              <a href="/contact">تواصلي معنا</a>
            </li>

            <li>
              <a href="/politique-confidentialite">
                سياسة الخصوصية
              </a>
            </li>

            <li>
              <a href="/mentions-legales">
                المعلومات القانونية
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="footer__cta">
          <span className="footer__eyebrow">
            فن الاناقة
          </span>

          <h3 className="footer__cta-title">
            لمسة من الأناقة،
            <br />
            أسلوبٌ يشبهك.
          </h3>

          <p className="footer__cta-text">
            اعثري على ما سيخطف قلبك
            ضمن تشكيلتنا.
          </p>

          <a href="/collection" className="footer__button">
            اكتشفي كامل منتجاتنا
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} EMERAUDE CAFTAN.
          Tous droits réservés.
        </p>

        <span className="footer__bottom-note">
          FAIT AVEC ÉLÉGANCE
        </span>
      </div>
    </footer>
  );
}