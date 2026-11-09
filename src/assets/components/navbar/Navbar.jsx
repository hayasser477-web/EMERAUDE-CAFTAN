
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.jpg";
import img from "../../images/img (10).jpg";

const links = [
  { label: "الرئيسية", href: "/", section: "home" },
  { label: "منتجاتنا", href: "/collection" },
  { label: "عن العلامة", href: "/#about-us", section: "about-us" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  function handleSectionClick(event, section) {
    if (!section) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
      return;
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="navbar" dir="rtl">
      <div className="navbar__inner">
        <button
          className="navbar__menu-button"
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <Link
          className="navbar__brand"
          to="/"
          aria-label="شانيز كولكشن"
          onClick={(event) => handleSectionClick(event, "home")}
        >
          <img
            className="navbar__logo"
            src={logo}
            alt="CHANEZ COLLECTION"
          />
        </Link>

        <nav
  className={`navbar__links ${
    menuOpen ? "navbar__links--open" : ""
  }`}
  aria-label="القائمة الرئيسية"
  style={{ "--mobile-menu-bg": `url("${img}")` }}
>
  {links.map((link) => (
    <Link
      key={link.href}
      to={link.href}
      className="navbar__link"
      onClick={(event) =>
        handleSectionClick(event, link.section)
      }
    >
      {link.label}
    </Link>
  ))}
</nav>

        <div className="navbar__actions">
          <button
            className="navbar__icon-button"
            type="button"
            aria-label="البحث"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.4" />
              <path d="m15.5 15.5 4.2 4.2" />
            </svg>
          </button>

          <Link
            className="navbar__icon-button navbar__cart"
            to="/cart"
            aria-label="سلة المشتريات"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.5 4.5h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L21 8H6.1" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="17.5" cy="20" r="1" />
            </svg>
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form
          className="navbar__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            placeholder="ابحث عن قطعة مميزة..."
            aria-label="ابحث في المتجر"
            autoFocus
          />
          <span>اكتشف مجموعتك المفضلة</span>
        </form>
      )}

      <div className="navbar__bottom-line" />
    </header>
  );
}
