
import { Gem, Heart, ShieldCheck, Sparkles } from "lucide-react";
import "./AboutUs.css";

const values = [
  {
    icon: Gem,
    number: "01",
    title: "جودة تليق بكِ",
    description:
      "نهتم بجودة الأقمشة ودقة الخياطة لنقدم لكِ قطعًا تجمع بين الإتقان والأناقة.",
  },
  {
    icon: Heart,
    number: "02",
    title: "رضاكِ أولويتنا",
    description:
      "نحرص على أن تكون تجربتكِ معنا مريحة، وأن يصلكِ منتج يليق بتوقعاتكِ.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "الثقة أساس علاقتنا",
    description:
      "نحرص على عرض منتجاتنا بوضوح، ونسعى إلى أن يصلكِ المنتج أقرب ما يكون إلى صورته وتفاصيله على الموقع.",
  },
];

export default function AboutUs() {
  return (
    <section className="about-us" id="about-us" dir="rtl">
      <div className="about-us__container">

        <header className="about-us__header">
          <span className="about-us__eyebrow">
             EMERAUDE CAFTAN
          </span>

          <div className="about-us__heading">
            <h2 className="about-us__title">من نحن</h2>
            <span className="about-us__heading-line" />
            <p className="about-us__intro">
              لأن الأناقة الحقيقية هي أن تشعري بالجمال والثقة
              في كل ما ترتدينه.
            </p>
          </div>

          <span className="about-us__header-number">01</span>
        </header>

        <div className="about-us__story">
          <div className="about-us__story-top">
            <span className="about-us__label">
              <Sparkles size={15} />
              حكايتنا
            </span>
            <span className="about-us__story-line" />
          </div>

          <div className="about-us__story-body">
            <div className="about-us__year">
              <span>EST.</span>
              <strong>2019</strong>
            </div>

            <div className="about-us__story-content">
              <h3>
                بدأنا بشغف،
                <br />
                ونواصل بثقة.
              </h3>

              <p>
                انطلقت رحلتنا سنة 2019 برؤية بسيطة وطموح كبير:
                أن نجمع بين السترة والجمال في لباس واحد.
                ومنذ البداية، كان اهتمامنا منصبًا على جودة القماش،
                وإتقان العمل، وتقديم قطع تعكس الأناقة والاهتمام بالتفاصيل.
              </p>
            </div>
          </div>

          <div className="about-us__story-footer">
            <span>EMERAUDE CAFTAN</span>
            <span>01 — OUR STORY</span>
          </div>
        </div>

        <div className="about-us__mission">
          <div className="about-us__mission-number">02</div>

          <div className="about-us__mission-content">
            <span className="about-us__label">رؤيتنا ورسالتنا</span>

            <h3>
              أناقة تمنحكِ الجمال،
              <br />
              وراحة تعزز ثقتكِ.
            </h3>

            <p>
              نسعى إلى تقديم أزياء تجمع بين الاحتشام والجمال،
              مع الاهتمام بجودة الأقمشة وإتقان التصنيع.
              ونعمل باستمرار على تحسين تجربة التسوق، حتى تختاري
              قطعتكِ بثقة وتحصلي على منتج يطابق وصفه وصوره قدر الإمكان.
            </p>
          </div>

          <div className="about-us__mission-decoration">
            <Gem size={38} strokeWidth={0.8} />
          </div>
        </div>

        <div className="about-us__values-header">
          <div>
            <span className="about-us__label">ما يميزنا</span>
            <h3>قيمنا التي نؤمن بها</h3>
          </div>
          <span className="about-us__values-number">03</span>
        </div>

        <div className="about-us__values">
          {values.map(({ icon: Icon, number, title, description }) => (
            <article className="about-us__value" key={title}>
              <div className="about-us__value-top">
                <span className="about-us__value-number">{number}</span>
                <Icon size={25} strokeWidth={1.2} />
              </div>

              <h4>{title}</h4>
              <p>{description}</p>

              <span className="about-us__value-line" />
            </article>
          ))}
        </div>

        <footer className="about-us__closing">
          <span className="about-us__closing-line" />

          <p>EMERAUDE CAFTAN</p>

          <h3>أناقة تشبهكِ، وثقة تستحقينها.</h3>

          <span className="about-us__closing-star">✧</span>
        </footer>

      </div>
    </section>
  );
}
