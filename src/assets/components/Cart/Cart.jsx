
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import "./Cart.css";

const WILAYAS = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية",
  "بسكرة", "بشار", "البليدة", "البويرة", "تمنراست", "تبسة",
  "تلمسان", "تيارت", "تيزي وزو", "الجزائر", "الجلفة", "جيجل",
  "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة",
  "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة",
  "وهران", "البيض", "إليزي", "برج بوعريريج", "بومرداس",
  "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس",
  "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت",
  "غرداية", "غليزان", "تيميمون", "برج باجي مختار", "أولاد جلال",
  "بني عباس", "عين صالح", "عين قزام", "تقرت", "جانت",
  "المغير", "المنيعة"
];

// أدخل أسعار شركة التوصيل الحقيقية هنا قبل إطلاق الموقع.

const DELIVERY_FEES = [
  { wilaya: "Boumerdès", home: 500, office: 300 },
  { wilaya: "Alger", home: 600, office: 400 },
  { wilaya: "Blida", home: 600, office: 400 },
  { wilaya: "Tipaza", home: 600, office: 400 },
  { wilaya: "Tizi Ouzou", home: 700, office: 450 },
  { wilaya: "Bouira", home: 700, office: 450 },
  { wilaya: "Médéa", home: 700, office: 450 },
  { wilaya: "Béjaïa", home: 800, office: 500 },
  { wilaya: "Jijel", home: 800, office: 500 },
  { wilaya: "Bordj Bou Arréridj", home: 800, office: 500 },
  { wilaya: "Aïn Defla", home: 800, office: 500 },
  { wilaya: "Aïn Témouchent", home: 800, office: 500 },
  { wilaya: "Annaba", home: 800, office: 500 },
  { wilaya: "Batna", home: 800, office: 500 },
  { wilaya: "Chlef", home: 800, office: 500 },
  { wilaya: "Constantine", home: 800, office: 500 },
  { wilaya: "Mascara", home: 800, office: 500 },
  { wilaya: "Mila", home: 800, office: 500 },
  { wilaya: "Mostaganem", home: 800, office: 500 },
  { wilaya: "M'Sila", home: 800, office: 500 },
  { wilaya: "Oran", home: 800, office: 500 },
  { wilaya: "Oum El Bouaghi", home: 800, office: 500 },
  { wilaya: "Relizane", home: 800, office: 500 },
  { wilaya: "Sétif", home: 800, office: 500 },
  { wilaya: "Sidi Bel Abbès", home: 800, office: 500 },
  { wilaya: "Skikda", home: 800, office: 500 },
  { wilaya: "Tissemsilt", home: 800, office: 500 },
  { wilaya: "Tlemcen", home: 800, office: 500 },
  { wilaya: "Souk Ahras", home: 900, office: 600 },
  { wilaya: "Tébessa", home: 900, office: 600 },
  { wilaya: "Saïda", home: 900, office: 600 },
  { wilaya: "El Tarf", home: 900, office: 600 },
  { wilaya: "Guelma", home: 900, office: 600 },
  { wilaya: "Khenchela", home: 900, office: 600 },
  { wilaya: "Tiaret", home: 900, office: 600 },
  { wilaya: "Ouled Djellal", home: 1000, office: 600 },
  { wilaya: "Djelfa", home: 1000, office: 600 },
  { wilaya: "Laghouat", home: 1000, office: 600 },
  { wilaya: "Biskra", home: 1000, office: 600 },
  { wilaya: "Ghardaïa", home: 1100, office: 700 },
  { wilaya: "El Oued", home: 1100, office: 700 },
  { wilaya: "El M'Ghair", home: 1100, office: null },
  { wilaya: "Ouargla", home: 1100, office: 700 },
  { wilaya: "Touggourt", home: 1100, office: 700 },
  { wilaya: "El Meniaa", home: 1100, office: 800 },
  { wilaya: "El Bayadh", home: 1200, office: 800 },
  { wilaya: "Naâma", home: 1200, office: 800 },
  { wilaya: "Béchar", home: 1200, office: 800 },
  { wilaya: "Béni Abbès", home: 1200, office: 800 },
  { wilaya: "Adrar", home: 1500, office: 1000 },
  { wilaya: "Timimoun", home: 1500, office: 1000 },
  { wilaya: "Tindouf", home: 1700, office: 1000 },
  { wilaya: "In Salah", home: 1800, office: 1200 },
  { wilaya: "Illizi", home: 1900, office: 1500 },
  { wilaya: "Tamanrasset", home: 2000, office: 1500 },
];

const WILAYA_NAME_MAP = {
  "بومرداس": "Boumerdès",
  "الجزائر": "Alger",
  "البليدة": "Blida",
  "تيبازة": "Tipaza",
  "تيزي وزو": "Tizi Ouzou",
  "البويرة": "Bouira",
  "المدية": "Médéa",
  "بجاية": "Béjaïa",
  "جيجل": "Jijel",
  "برج بوعريريج": "Bordj Bou Arréridj",
  "عين الدفلى": "Aïn Defla",
  "عين تموشنت": "Aïn Témouchent",
  "عنابة": "Annaba",
  "باتنة": "Batna",
  "الشلف": "Chlef",
  "قسنطينة": "Constantine",
  "معسكر": "Mascara",
  "ميلة": "Mila",
  "مستغانم": "Mostaganem",
  "المسيلة": "M'Sila",
  "وهران": "Oran",
  "أم البواقي": "Oum El Bouaghi",
  "غليزان": "Relizane",
  "سطيف": "Sétif",
  "سيدي بلعباس": "Sidi Bel Abbès",
  "سكيكدة": "Skikda",
  "تيسمسيلت": "Tissemsilt",
  "تلمسان": "Tlemcen",
  "سوق أهراس": "Souk Ahras",
  "تبسة": "Tébessa",
  "سعيدة": "Saïda",
  "الطارف": "El Tarf",
  "قالمة": "Guelma",
  "خنشلة": "Khenchela",
  "تيارت": "Tiaret",
  "أولاد جلال": "Ouled Djellal",
  "الجلفة": "Djelfa",
  "الأغواط": "Laghouat",
  "بسكرة": "Biskra",
  "غرداية": "Ghardaïa",
  "الوادي": "El Oued",
  "المغير": "El M'Ghair",
  "ورقلة": "Ouargla",
  "تقرت": "Touggourt",
  "المنيعة": "El Meniaa",
  "البيض": "El Bayadh",
  "النعامة": "Naâma",
  "بشار": "Béchar",
  "بني عباس": "Béni Abbès",
  "أدرار": "Adrar",
  "تيميمون": "Timimoun",
  "تندوف": "Tindouf",
  "عين صالح": "In Salah",
  "إليزي": "Illizi",
  "تمنراست": "Tamanrasset"
};


function formatPrice(price) {
  return `${Number(price || 0).toLocaleString("fr-DZ")} دج`;
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("chanez_cart") || "[]");
  } catch {
    return [];
  }
}

export default function Cart() {
    
  const navigate = useNavigate();

  const [cart, setCart] = useState(readCart);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    wilaya: "",
    municipality: "",
    delivery: "office",
    note: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productsTotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) =>
          sum + Number(item.price || 0) * Number(item.quantity || 1),
        0
      ),
    [cart]
  );

const deliveryWilayaName = WILAYA_NAME_MAP[form.wilaya];

const selectedDelivery = DELIVERY_FEES.find(
  (item) => item.wilaya === deliveryWilayaName
);

const deliveryFee = selectedDelivery
  ? selectedDelivery[form.delivery]
  : null;

const total =
  productsTotal + (deliveryFee ?? 0);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  }

  function saveCart(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem("chanez_cart", JSON.stringify(updatedCart));
  }

  function changeQuantity(index, amount) {
    const updated = [...cart];
    const nextQuantity = Number(updated[index].quantity || 1) + amount;

    if (nextQuantity < 1) return;

    updated[index] = { ...updated[index], quantity: nextQuantity };
    saveCart(updated);
  }

  function removeItem(index) {
    saveCart(cart.filter((_, itemIndex) => itemIndex !== index));
  }

  function submitOrder(event) {
    event.preventDefault();

    if (isSubmitting) return;

    if (!cart.length) {
      setError("سلتك فارغة. أضيفي المنتجات أولًا.");
      return;
    }

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.wilaya ||
      !form.municipality.trim()
    ) {
      setError("يرجى ملء جميع الحقول الإجبارية.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("رقم الهاتف يجب أن يتكوّن من 10 أرقام بالضبط.");
      return;
    }

    if (deliveryFee === null || deliveryFee === undefined) {
      setError(
        "عذرًا، سعر التوصيل لهذه الولاية أو الطريقة غير متوفر حاليًا."
      );
      return;
    }

    const order = {
      ...form,
      items: cart.map((item) => ({
        ...item,
        model:
          Number(item.model) ||
          Number(String(item.productId || "").split("-")[1]) ||
          1,
      })),
      productsTotal,
      deliveryFee,
      total,
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      setError("");

      // حفظ الطلب محليًا في المتصفح فقط، دون إرساله إلى أي خدمة خارجية.
      localStorage.setItem("chanez_last_order", JSON.stringify(order));

      // تفريغ سلة الموقع بعد حفظ تفاصيل الطلب محليًا.
      localStorage.removeItem("chanez_cart");
      setCart([]);

      navigate("/thank-you");
    } catch (error) {
      console.error("Order saving failed:", error);
      setError("تعذّر حفظ تفاصيل الطلب على هذا الجهاز. يرجى المحاولة مرة أخرى.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="cart-page" dir="rtl">
      <header className="cart-header">
        <span className="cart-eyebrow">EMERAUDE CAFTAN</span>
        <h1>إتمام الطلب</h1>
        <p>بقيت خطوة واحدة لتصلكِ اختياراتكِ المميزة</p>
        <span className="cart-header-line" />
      </header>

      <div className="cart-layout">
        <section className="cart-products">
          <div className="cart-section-heading">
            <div>
              <span className="cart-kicker">YOUR SELECTION</span>
              <h2>منتجاتكِ</h2>
            </div>
            <span className="cart-count">{cart.length} منتجات</span>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={35} strokeWidth={1.3} />
              <h3>سلتكِ فارغة حاليًا</h3>
              <p>اكتشفي مجموعتنا واختاري القطع التي تناسبكِ.</p>
              <button
                type="button"
                className="cart-continue"
                onClick={() => navigate("/collection")}
              >
                اكتشفي المجموعة <ArrowLeft size={16} />
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item, index) => (
                <article
                  className="cart-item"
                  key={`${item.productId}-${item.size}-${index}`}
                >
                  <div className="cart-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.color || "المنتج"} />
                    ) : (
                      <ShoppingBag size={25} />
                    )}
                  </div>

                  <div className="cart-item-info">
                    <span className="cart-item-model">
                      EMERAUDE CAFTAN
                    </span>
                    <h3>{item.color || `الموديل ${item.model}`}</h3>
                    <p>المقاس: {item.size || "M"}</p>
                    <strong>{formatPrice(item.price)}</strong>

                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() => changeQuantity(index, -1)}
                        aria-label="تقليل الكمية"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(index, 1)}
                        aria-label="زيادة الكمية"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(index)}
                    aria-label="حذف المنتج"
                  >
                    <Trash2 size={17} />
                  </button>
                </article>
              ))}
            </div>
          )}

          <button
            type="button"
            className="cart-back-link"
            onClick={() => navigate("/collection")}
          >
            <ArrowRight size={16} /> العودة إلى المجموعة
          </button>
        </section>

        <section className="cart-checkout">
          <div className="cart-section-heading">
            <div>
              <span className="cart-kicker">DELIVERY DETAILS</span>
              <h2>معلومات التوصيل</h2>
            </div>
            <MapPin size={22} />
          </div>

          <form className="cart-form" onSubmit={submitOrder}>
            <div className="cart-form-row">
              <label>
                الاسم <span>*</span>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={updateForm}
                  placeholder="الاسم"
                  autoComplete="given-name"
                  required
                />
              </label>

              <label>
                اللقب <span>*</span>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={updateForm}
                  placeholder="اللقب"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <label>
              رقم الهاتف <span>*</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
                  setForm((previous) => ({ ...previous, phone: digits }));
                  setError("");
                }}
                placeholder="05XXXXXXXX"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                required
              />
              <small>أدخلي 10 أرقام دون فراغات أو رموز.</small>
            </label>

            <label>
              الولاية <span>*</span>
              <select
                name="wilaya"
                value={form.wilaya}
                onChange={updateForm}
                required
              >
                <option value="">اختاري الولاية</option>
                {WILAYAS.map((wilaya) => (
                  <option value={wilaya} key={wilaya}>
                    {wilaya}
                  </option>
                ))}
              </select>
            </label>

            <label>
              البلدية <span>*</span>
              <input
                name="municipality"
                value={form.municipality}
                onChange={updateForm}
                placeholder="اكتبي اسم البلدية"
                required
              />
            </label>

            <fieldset className="cart-delivery">
              <legend>طريقة التوصيل <span>*</span></legend>

              <label className={form.delivery === "office" ? "selected" : ""}>
                <input
                  type="radio"
                  name="delivery"
                  value="office"
                  checked={form.delivery === "office"}
                  onChange={updateForm}
                />
                <span>
                  <strong>مكتب التوصيل</strong>
                  <small>استلام الطلب من مكتب الشركة</small>
                </span>
              </label>

              <label className={form.delivery === "home" ? "selected" : ""}>
                <input
                  type="radio"
                  name="delivery"
                  value="home"
                  checked={form.delivery === "home"}
                  onChange={updateForm}
                />
                <span>
                  <strong>التوصيل إلى المنزل</strong>
                  <small>استلام الطلب في عنوانكِ</small>
                </span>
              </label>
            </fieldset>

            <label>
              ملاحظة أو رسالة <span className="optional">(اختياري)</span>
              <textarea
                name="note"
                value={form.note}
                onChange={updateForm}
                placeholder="هل لديكِ أي تفاصيل إضافية؟"
                rows={3}
              />
            </label>

            <div className="cart-summary">
              <div>
                <span>مجموع المنتجات</span>
                <strong>{formatPrice(productsTotal)}</strong>
              </div>
              <div>
                <span>سعر التوصيل</span>
                <strong>{formatPrice(deliveryFee)}</strong>
              </div>
              <div className="cart-summary-total">
                <span>المبلغ الإجمالي</span>
                <strong>{formatPrice(total)}</strong>
              </div>
            </div>

            {error && (
              <p className="cart-error" role="alert">
                {error}
              </p>
            )}

           <button
  type="submit"
  className="cart-submit"
  disabled={!cart.length || isSubmitting}
>
  {isSubmitting ? (
    <>
      جارٍ تأكيد الطلبية...
    </>
  ) : (
    <>
      تأكيد الطلبية <ArrowLeft size={18} />
    </>
  )}
</button>

            <p className="cart-secure-note">
              سنتواصل معكِ لتأكيد تفاصيل طلبكِ.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
