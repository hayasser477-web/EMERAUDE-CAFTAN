
// import "./Testimonials.css";
// import LuxuryBackground from "../background/LuxuryBackground.jsx";
// import customer1 from "../../images/img (32).webp";
// import customer2 from "../../images/img (33).webp";
// import customer3 from "../../images/img (34).webp";
// import customer4 from "../../images/img (35).webp";
// import customer5 from "../../images/img (36).webp";
// import customer6 from "../../images/img (37).webp";


// const customers = [
//   { id: 1, image: customer1, alt: "إطلالة أنيقة لزبونة" },
//   { id: 2, image: customer2, alt: "إطلالة فاخرة من COLLECTION AL MALAK" },
//   { id: 3, image: customer3, alt: "أناقة بلمسة عصرية" },
//   { id: 4, image: customer4, alt: "إطلالة أنيقة للمناسبات" },
//   { id: 5, image: customer5, alt: "تفاصيل أزياء راقية" },
//   { id: 6, image: customer6, alt: "أناقة COLLECTION AL MALAK" },
// ];

// export default function Testimonials() {
//   return (
//     <section className="testimonials" id="testimonials">
//          <LuxuryBackground />
//       <div className="testimonials__content">
//         <p className="testimonials__eyebrow">
//           COLLECTION AL MALAK
//         </p>

//         <h2 className="testimonials__title">
//           ثقتكنّ هي سرّ أناقتنا
//         </h2>

//         <p className="testimonials__description">
//           لكل زبونة حكاية ولكل إطلالة لمسة خاصة
//           <br />
//           شكرًا لأنكنّ جزء من حكايتنا
//         </p>

//         <div
//           className="testimonials__heart"
//           aria-label="صور زبونات Chanez Collection"
//         >
//           {customers.map((customer) => (
//             <div
//               className="testimonials__photo"
//               key={customer.id}
//             >
//               <img
//                 src={customer.image}
//                 alt={customer.alt}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="testimonials__signature">
//           <span className="testimonials__line" />
//           <span className="testimonials__heart-icon">♡</span>
//           <span className="testimonials__line" />
//         </div>

//         <p className="testimonials__brand">
//           COLLECTION AL MALAK
//         </p>

//         <p className="testimonials__tagline">
//           PLUS QU’UNE MARQUE, UNE HISTOIRE D’AMOUR
//         </p>
//       </div>
//     </section>
//   );
// }
