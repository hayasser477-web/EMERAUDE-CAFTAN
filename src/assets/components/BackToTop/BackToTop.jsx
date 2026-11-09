import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="العودة إلى أعلى الصفحة"
      title="العودة إلى الأعلى"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={22} strokeWidth={1.7} />
    </button>
  );
}