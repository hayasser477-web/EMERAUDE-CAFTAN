
import "./Intro.css";
import { useEffect, useState } from "react";
import logo from "../../images/logo.jpg";

const particles = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${(i * 37.13) % 100}%`,
  delay: `${-((i * 17) % 50) / 10}s`,
  duration: `${3 + ((i * 13) % 30) / 10}s`,
  size: `${2 + ((i * 7) % 4)}px`,
  drift: `${((i * 19) % 100) - 50}px`,
  opacity: 0.4 + ((i * 11) % 6) / 10,
}));

export default function Intro({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <section
      className={`intro ${isExiting ? "intro--exiting" : ""}`}
      aria-label="مقدمة شانيز كولكشن"
    >
      <div className="intro__texture" />
      <div className="intro__glow" />

      <div className="intro__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="intro__particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
              "--drift": particle.drift,
              "--particle-opacity": particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="intro__brand">
        <span className="intro__eyebrow">
          A WORLD OF ELEGANCE
        </span>

        <img
          src={logo}
          alt="AL MALAK Collection"
          className="intro__logo"
        />

        <h1 className="intro__title">EMERAUDE</h1>

        <div className="intro__divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="intro__collection">CAFTAN</p>

        <span className="intro__subtitle">
          TIMELESS BEAUTY · EXCEPTIONAL STYLE
        </span>
      </div>

      <div className="intro__footer" aria-hidden="true">
        <span>EST. IN ELEGANCE</span>
        <span>EXCLUSIVE COLLECTION</span>
      </div>
    </section>
  );
}
