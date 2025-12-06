import { useEffect, useState } from "react";

const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = [];
      for (let i = 0; i < 18; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 6,
          duration: 12 + Math.random() * 14,
          size: 10 + Math.random() * 14,
          rotation: Math.random() * 180,
          drift: Math.random() * 20 - 10,
          type: Math.random() > 0.4 ? "golden" : "sindoorSoft",
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`absolute ${
            p.type === "golden"
              ? "bg-gradient-to-br from-[#FFDF9A] via-[#FFC772] to-[#FFB84F] shadow-[0_0_12px_rgba(255,200,120,0.3)]"
              : "bg-gradient-to-br from-[#D9483B] via-[#C3322A] to-[#A8201C] shadow-[0_0_10px_rgba(220,60,50,0.25)]"
          } animate-classyPetal`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "45% 55% 50% 50%",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotation}deg) translateX(${p.drift}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
