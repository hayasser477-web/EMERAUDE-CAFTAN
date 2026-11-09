import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

import product1 from "../../images/img (3).jpg";
import product2 from "../../images/img (6).jpg";
import product3 from "../../images/img (9).jpg";

import LuxuryBackground from "../background/LuxuryBackground.jsx";

const products = [product1, product2, product3];

export default function CTA() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((current) => (current + 1) % products.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="cta" id="">
      <LuxuryBackground />

      <div className="cta__overlay" />

      <div className="cta__content">
        <p className="cta__eyebrow">
         EMERAUDE CAFTAN
        </p>

        <h2 className="cta__title">
         الأناقة في كل تفصيل
        </h2>

        <p className="cta__description">
          اكتشفي قطعاً صُممت لتُبرز
          أناقتك وشخصيتك.
        </p>

        <div
          className="cta__slider"
          aria-label="Galerie de nos produits"
        >
          {products.map((_, index) => {
            const imageIndex =
              (index + activeSlide) % products.length;

            return (
              <div
                className="cta__circle"
                key={index}
              >
                <div className="cta__circle-inner">
                  <img
                    src={products[imageIndex]}
                    alt={`Produit ${imageIndex + 1}`}
                    className="cta__image"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="cta__actions">
          <Link
  to="/collection"
  className="cta__button cta__button--primary"
>
  <span>الاطلاع على كامل المنتجات</span>

  <span className="cta__arrow" aria-hidden="true">
    ←
  </span>
</Link>

          <a
            href="/contact"
            className="cta__button cta__button--secondary"
          >
            <span>تواصلي معنا</span>
            <span className="cta__arrow" aria-hidden="true">
              ←
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}