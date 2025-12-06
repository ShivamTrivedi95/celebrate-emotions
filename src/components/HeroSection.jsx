import { motion } from "framer-motion";
import DivaFlame from "./DivaFlame";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-[#1B0F27] via-[#301934] to-[#4B1F47] overflow-hidden">
      {/* Soft Mandala Glow */}
      <div className="absolute inset-0 opacity-20 bg-[url('/mandala.svg')] bg-center bg-cover mix-blend-soft-light" />

      {/* Luxe golden mist overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {/* Flame Icon */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <DivaFlame className="drop-shadow-[0_0_15px_#FFDFA0]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFEFD5] drop-shadow-[0_4px_20px_rgba(255,215,155,0.25)] leading-tight tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Celebrating Our
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FFCF6E] via-[#FFB347] to-[#FFD68A]">Sindoor Rasam</span>
        </motion.h1>

        {/* Date */}
        <motion.div
          className="inline-block mt-8 px-10 py-4 rounded-full border border-[#FFDFA0]/40 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,214,100,0.2)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="font-display text-2xl sm:text-3xl text-[#FFEFD5] tracking-wide">6 December 2020</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#FFCF6E]" />
          <div className="w-4 h-4 rotate-45 bg-[#FFCF6E] shadow-[0_0_12px_#FFCF6E]" />
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#FFCF6E]" />
        </motion.div>

        {/* Poetic Line */}
        <motion.p
          className="font-hindi text-xl sm:text-2xl text-[#FFEFD5]/90 italic max-w-2xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(255,214,150,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          "Woh laal sindoor ki rekha… hum dono ke bhavishya ki pehli lakeer thi."
        </motion.p>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
