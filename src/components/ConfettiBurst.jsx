// import { useEffect } from "react";
// import confetti from "canvas-confetti";

// const ConfettiBurst = () => {
//   useEffect(() => {
//     // Initial burst after a short delay
//     const timer = setTimeout(() => {
//       // Indian-themed colors: sindoor red, marigold orange, haldi yellow, gold
//       const colors = ["#c62828", "#f57c00", "#ffc107", "#d4af37", "#ff5722"];

//       // First burst from left
//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: { x: 0.2, y: 0.5 },
//         colors: colors,
//         ticks: 200,
//         gravity: 0.8,
//         scalar: 1.2,
//         drift: 0.5,
//       });

//       // Second burst from right
//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: { x: 0.8, y: 0.5 },
//         colors: colors,
//         ticks: 200,
//         gravity: 0.8,
//         scalar: 1.2,
//         drift: -0.5,
//       });

//       // Center celebration burst
//       setTimeout(() => {
//         confetti({
//           particleCount: 80,
//           spread: 100,
//           origin: { x: 0.5, y: 0.6 },
//           colors: colors,
//           ticks: 250,
//           gravity: 0.6,
//           scalar: 1.5,
//         });
//       }, 300);

//       // Gentle falling petals effect
//       setTimeout(() => {
//         confetti({
//           particleCount: 30,
//           spread: 180,
//           origin: { x: 0.5, y: 0 },
//           colors: ["#c62828", "#f57c00"],
//           ticks: 400,
//           gravity: 0.3,
//           scalar: 2,
//           shapes: ["circle"],
//           drift: 0,
//         });
//       }, 600);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   return null;
// };

// export default ConfettiBurst;

import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiBurst = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Luxe, unified color palette (gold, sindoor, marigold)
      const themeColors = [
        "#D4AF37", // gold
        "#F3C66A", // soft gold
        "#C9352C", // sindoor red
        "#E85A38", // warm sindoor orange-red
        "#FFB454", // marigold soft
      ];

      // Helper for smooth iOS-like easing confetti
      const fire = (opts) => {
        confetti({
          ...opts,
          colors: themeColors,
          gravity: opts.gravity ?? 0.6,
          ticks: opts.ticks ?? 250,
          scalar: opts.scalar ?? 1.2,
          disableForReducedMotion: true,
          particleCount: opts.particleCount ?? 50,
          drift: opts.drift ?? 0,
        });
      };

      // Left soft burst
      fire({
        origin: { x: 0.2, y: 0.5 },
        spread: 55,
        particleCount: 45,
        drift: 0.2,
      });

      // Right soft burst
      fire({
        origin: { x: 0.8, y: 0.5 },
        spread: 55,
        particleCount: 45,
        drift: -0.2,
      });

      // Soft centered celebration burst
      setTimeout(() => {
        fire({
          origin: { x: 0.5, y: 0.55 },
          spread: 85,
          particleCount: 70,
          scalar: 1.35,
          gravity: 0.5,
        });
      }, 280);

      // Gentle falling golden petals (premium & subtle)
      setTimeout(() => {
        fire({
          origin: { x: 0.5, y: -0.1 }, // starts slightly above screen
          spread: 160,
          particleCount: 35,
          gravity: 0.25,
          scalar: 1.8,
          ticks: 500,
          shapes: ["circle"],
          drift: 0.1,
        });
      }, 600);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ConfettiBurst;
