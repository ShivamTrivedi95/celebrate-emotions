import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative py-20 px-4 
      bg-gradient-to-br from-[#1B0F27] via-[#301934] to-[#4B1F47]
      overflow-hidden"
    >
      {/* Decorative top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] 
        bg-gradient-to-r from-transparent via-[#FFCF6E] to-transparent opacity-70"
      />

      {/* Mandala Overlay */}
      <div className="absolute inset-0 bg-[url('/mandala.svg')] bg-center bg-cover opacity-[0.06]" />

      {/* Floating sindoor particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-[#FF3B3B]/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10
        bg-white/5 backdrop-blur-md rounded-3xl p-10
        border border-[#FFDFA0]/40 shadow-[0_0_30px_rgba(255,215,155,0.15)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heart Icon */}
        <div className="flex justify-center mb-8">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <Heart className="w-12 h-12 text-[#FF3B3B] fill-[#FF3B3B]/30 drop-shadow-[0_0_10px_rgba(255,80,80,0.4)]" />
          </motion.div>
        </div>

        {/* Hindi Line */}
        <p className="font-hindi text-xl text-[#FFEFD5] italic mb-4 leading-relaxed">
          "Har janam mein tumhe dhundoonga, har janam mai tumhe milunga, har janam mein tumhare maang mein sindoor bharunga."
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10 opacity-90">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#FFCF6E]/60" />
          <div className="w-2 h-2 rotate-45 bg-[#FFCF6E]/60 shadow-[0_0_12px_#FFCF6E]" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#FFCF6E]/60" />
        </div>

        {/* Footer Text */}
        <p className="font-display text-[#FFEFD5]/80 text-md tracking-wide">A little memory of us</p>
        <p className="font-sans text-[#FFEFD5]/60 text-sm mt-2">Together, now and always</p>
      </motion.div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-12px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.4; }
        }
        .animate-float {
          animation: float infinite linear;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
