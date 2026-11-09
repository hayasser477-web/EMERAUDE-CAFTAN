
import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import LuxuryBackground from "../background/LuxuryBackground.jsx";

import img1 from "../../images/img (2).jpg";
import img2 from "../../images/img (5).jpg";
import img3 from "../../images/img (8).jpg";
import img4 from "../../images/img (10).jpg";

const mobileImages = [img1, img2, img3, img4];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % mobileImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home" id="home">

      {/* خلفية اللابتوب الأصلية */}
      <div className="home__desktop-background">
        <LuxuryBackground />
      </div>

      {/* خلفية الهاتف المتغيرة */}
      <div className="home__mobile-background">
        {mobileImages.map((image, index) => (
          <div
            key={index}
            className={`home__mobile-slide ${
              activeImage === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>

      <div className="home__overlay" />

      <div className="home__content">
        <p className="home__eyebrow">
          MARQUE ALGÉRIENNE DE PRÊT-À-PORTER
        </p>

        <h1 className="home__title">
          EMERAUDE CAFTAN
        </h1>

        <span className="home__divider" />

        <p className="home__description">
          صُنعت بكل حب
        </p>

        <Link className="home__button" to="/collection">
          <span>اكتشفي منتجاتنا</span>

          <span className="home__arrow" aria-hidden="true">
            ←
          </span>
        </Link>
      </div>

      <div className="home__bottom">
        <span>UNE ÉLÉGANCE QUI VOUS RESSEMBLE</span>
      </div>

    </main>
  );
}
