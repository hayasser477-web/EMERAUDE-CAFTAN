
import "./LuxuryBackground.css";

export default function LuxuryBackground() {
  return (
    <div className="luxury-background" aria-hidden="true">
      <svg
        className="luxury-background__veins"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-vein" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.08" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#F2D98C" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#gold-vein)" strokeLinecap="round">
          <path strokeWidth="0.8" d="M-80 120 C90 180 45 290 210 315 S330 390 270 480 S390 570 520 530" />
          <path strokeWidth="0.55" d="M90 215 C160 240 190 275 250 270 S320 300 355 345" />
          <path strokeWidth="0.7" d="M950 -60 C900 80 1050 110 1000 230 S1100 330 1240 285 S1380 350 1500 420" />
          <path strokeWidth="0.6" d="M1010 180 C1080 140 1120 175 1150 220 S1230 255 1310 230" />
          <path strokeWidth="0.75" d="M-50 760 C130 690 180 800 310 740 S440 690 510 810 S650 900 730 850" />
          <path strokeWidth="0.5" d="M180 785 C240 740 290 765 330 810 S400 860 455 835" />
          <path strokeWidth="0.8" d="M900 1050 C850 890 990 850 1030 750 S1110 670 1070 580 S1160 490 1280 510 S1420 460 1490 390" />
          <path strokeWidth="0.55" d="M1020 820 C1080 800 1110 750 1160 745 S1220 700 1245 650" />
          <path strokeWidth="0.65" d="M580 -40 C620 70 550 130 610 200 S680 250 650 320 S710 385 790 400" />
          <path strokeWidth="0.5" d="M630 190 C690 165 730 200 745 245 S800 290 840 270" />
        </g>
      </svg>
    </div>
  );
}
