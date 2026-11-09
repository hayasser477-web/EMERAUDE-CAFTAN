
import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import "./FAQ.css";

const questions = [
  {
    question: "كم مدة التوصيل؟",
    answer:
      "تستغرق مدة التوصيل بين 24 و48 ساعة، حسب الولاية التي تقيمين فيها.",
  },
  {
    question: "هل الدفع عند الاستلام أم يجب الدفع مسبقًا؟",
    answer:
      "يتم الدفع عند الاستلام، لذا يُرجى التأكد من تفاصيل طلبك قبل تأكيده.",
  },
  {
    question: "هل يحق لي فتح طلبيتي للتأكد منها قبل الدفع؟",
    answer:
       " نعم، يحق لكِ فتح الطرد والتأكد من المنتج قبل الدفع، بشرط امام عامل التوصيل (الليفرور).",
  },
  {
    question: "هل يمكنني تغيير المنتج؟",
    answer:
      "نعم، يمكن تغيير المنتج بشرط أن يكون الخطأ من طرفنا.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq" id="faq" dir="rtl">
      <div className="faq__container">
        <div className="faq__heading">
          <span className="faq__eyebrow">EMERAUDE CAFTAN</span>

          <h2 className="faq__title">أسئلة تستحق الإجابة</h2>

          <p className="faq__subtitle">
            كل ما تحتاجين معرفته لتجربة تسوق سهلة ومريحة.
          </p>

          <div className="faq__heading-line" />
        </div>

        <div className="faq__instruction">
          <BookOpen size={19} strokeWidth={1.5} />

          <span>
            اختاري كتابًا واضغطي على غلافه لاكتشاف الإجابة.
          </span>
        </div>

        <div className="faq__grid">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                className={`faq__book ${isOpen ? "is-open" : ""}`}
                key={item.question}
              >
                <button
                  className="faq__cover"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="faq__cover-border">
                    <span className="faq__number">{number}</span>

                    <span className="faq__cover-icon">
                      <BookOpen size={27} strokeWidth={1.25} />
                    </span>

                    <span className="faq__question">
                      {item.question}
                    </span>

                    <span className="faq__open-hint">
                      {isOpen
                        ? "إغلاق الكتاب"
                        : "اضغطي لقراءة الإجابة"}
                    </span>

                    <span className="faq__cover-bottom">
                      <span className="faq__ornament" />

                      <ChevronDown
                        className="faq__chevron"
                        size={18}
                        strokeWidth={1.5}
                      />
                    </span>
                  </span>
                </button>

                <div
                  className="faq__pages"
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="faq__page-content">
                    <span className="faq__page-label">
                      الإجابة · {number}
                    </span>

                    <h3>{item.question}</h3>

                    <p>{item.answer}</p>

                    <span className="faq__page-decoration">
                      EMERAUDE CAFTAN
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq__contact">
          <p>هل لديكِ سؤال آخر؟ نحن هنا لمساعدتكِ.</p>

          <a href="/contact">تواصلي معنا</a>
        </div>
      </div>
    </section>
  );
}
