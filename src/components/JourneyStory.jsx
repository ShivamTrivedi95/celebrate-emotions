import { motion } from "framer-motion";

const JourneyStory = () => {
  const storyParts = [
    {
      text: "We first did our sindoor rasam on 6 December 2020",
      highlight: "6 December 2020",
    },
    {
      text: "We married on 17 February 2023",
      highlight: "17 February 2023",
    },
    {
      text: "Today we celebrate the love, commitment and destiny that started with that moment.",
      highlight: "love, commitment and destiny",
    },
  ];

  const poeticLines = [
    {
      hindi: "Jab maine tumhare maang mein sindoor bhara, tab mujhe samajh aaya: yeh safar humesha ka hai.",
      meaning: "When I filled your parting with sindoor, I understood: this journey is forever.",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 
      bg-gradient-to-br from-[#1B0F27] via-[#301934] to-[#4B1F47] overflow-hidden"
    >
      {/* Soft gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,150,0.25),transparent_70%)]" />

      {/* Floating sindoor dust */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="animate-float absolute w-1 h-1 bg-[#FF3B3B]/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Mandala */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/mandala.svg')] bg-center bg-contain bg-no-repeat" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold 
            text-[#FFEFD5] drop-shadow-[0_0_25px_rgba(255,215,155,0.25)] tracking-wide"
          >
            Our Sacred Journey
          </h2>

          <div className="flex items-center justify-center mt-6 gap-6 opacity-90">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#FFCF6E]" />
            <div className="w-3 h-3 rotate-45 bg-[#FFCF6E] shadow-[0_0_10px_#FFCF6E]" />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#FFCF6E]" />
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="space-y-12 mb-28">
          {storyParts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#FFEFD5]/90 leading-relaxed tracking-wide">
                {part.text.split(part.highlight).map((segment, i, arr) => (
                  <span key={i}>
                    {segment}
                    {i < arr.length - 1 && (
                      <span
                        className="px-1 font-semibold bg-clip-text text-transparent 
                          bg-gradient-to-r from-[#FFCF6E] via-[#FFB347] to-[#FFD68A] drop-shadow-[0_0_12px_rgba(255,195,110,0.3)]"
                      >
                        {part.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Poetic Cards */}
        <div className="space-y-14">
          {poeticLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="relative"
            >
              <div
                className="backdrop-blur-md bg-white/5 border border-[#FFDFA0]/30 rounded-3xl p-5
                shadow-xl hover:shadow-[0_0_25px_rgba(255,215,150,0.25)] hover:border-[#FFCF6E]/50 
                hover:scale-[1.02] transition-all duration-500"
              >
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#FFDFA0]/30 rounded-tl-2xl" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#FFDFA0]/30 rounded-br-2xl" />

                <p
                  className="font-hindi italic text-2xl sm:text-3xl 
                  text-[#FFEFD5] text-center leading-relaxed drop-shadow-[0_0_12px_rgba(255,215,155,0.2)]"
                >
                  "{line.hindi}"
                </p>

                <p className="font-sans mt-4 text-base sm:text-lg text-[#FFEFD5]/60 text-center tracking-wide">— {line.meaning}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default JourneyStory;
