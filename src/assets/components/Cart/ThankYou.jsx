
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <main className="cart-page thankyou-page" dir="rtl">
      <section className="thankyou-card">
        <span className="thankyou-icon">
          <Check size={34} />
        </span>

        <span className="cart-eyebrow">COLLECTION AL MALAK</span>

        <h1>شكرًا لطلبكِ</h1>

        <p>
          تم تسجيل طلبكِ بنجاح على هذا الجهاز.
          <br />
          سنتواصل معكِ لتأكيد التفاصيل في أقرب وقت ممكن.
        </p>

        <button
          type="button"
          className="cart-submit"
          onClick={() => navigate("/collection")}
        >
          العودة إلى المجموعة
        </button>
      </section>
    </main>
  );
}
