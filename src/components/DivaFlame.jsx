import { motion } from "framer-motion";

const DivaFlame = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Diya base */}
      <div className="relative">
        {/* Flame */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2"
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [1, 0.9, 1, 0.85, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 blur-xl rounded-full"
            style={{
              width: "40px",
              height: "50px",
              background: "radial-gradient(ellipse at 50% 70%, hsl(45 100% 70% / 0.8) 0%, hsl(30 100% 50% / 0.4) 50%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />
          {/* Inner flame */}
          <div
            className="relative"
            style={{
              width: "16px",
              height: "28px",
              background: "linear-gradient(to top, hsl(30 100% 50%) 0%, hsl(45 100% 60%) 40%, hsl(50 100% 80%) 70%, hsl(55 100% 95%) 100%)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              boxShadow: "0 0 20px hsl(45 100% 60% / 0.8), 0 0 40px hsl(30 100% 50% / 0.5)",
            }}
          />
        </motion.div>

        {/* Diya bowl */}
        <div
          className="relative z-10"
          style={{
            width: "50px",
            height: "20px",
            background: "linear-gradient(to bottom, hsl(25 70% 45%) 0%, hsl(20 60% 35%) 100%)",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            boxShadow: "inset 0 -5px 10px hsl(20 50% 25% / 0.5), 0 2px 10px hsl(0 0% 0% / 0.3)",
          }}
        >
          {/* Oil surface */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "40px",
              height: "8px",
              background: "linear-gradient(to right, hsl(45 80% 40%) 0%, hsl(50 90% 55%) 50%, hsl(45 80% 40%) 100%)",
              borderRadius: "50%",
            }}
          />
          {/* Wick */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            style={{
              width: "3px",
              height: "12px",
              background: "linear-gradient(to top, hsl(30 30% 20%) 0%, hsl(30 50% 30%) 100%)",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DivaFlame;
