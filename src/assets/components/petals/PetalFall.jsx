
import "./PetalFall.css";

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7 + 8) % 100}%`,
  delay: `${-((i * 2.7) % 15)}s`,
  duration: `${10 + ((i * 7) % 8)}s`,
  size: `${13 + ((i * 5) % 7)}px`,
  drift: `${((i * 23) % 100) - 50}px`,
}));

export default function PetalFall() {
  return (
    <div className="petal-fall" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal-fall__emoji"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            fontSize: petal.size,
            "--petal-drift": petal.drift,
          }}
        >
          🌼🌷
        </span>

      ))}
    </div>
  );
}
