import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "6 December 2020",
      title: "Samarpan",
      description: "Ghass ki ek patti ke sammukh me juk gaya aur maine paaya ki mai aakash chuu raha hoon.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      date: "17 February 2023",
      title: "Swikruti",
      description: "Wo ittefaq se aa baithe karib mere, mera sara safar kamaal ho gaya.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      date: "Today",
      title: "Sneh utsav",
      description: "Agar punar janam jaisi koi cheez hai, to, maine tumhe anant kaal ke liye paa liya hai.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section
      className="relative py-24 px-4 min-h-screen 
      bg-gradient-to-br from-[#1B0F27] via-[#301934] to-[#4B1F47] overflow-hidden"
    >
      {/* Mandala soft overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/mandala.svg')] bg-center bg-cover" />

      {/* Floating sindoor particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold 
            text-[#FFEFD5] drop-shadow-[0_0_25px_rgba(255,215,155,0.25)]"
          >
            Milestones of Our Love
          </h2>

          {/* gold accent */}
          <div className="flex items-center justify-center gap-6 mt-6 opacity-90">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#FFCF6E]" />
            <div className="w-3 h-3 rotate-45 bg-[#FFCF6E] shadow-[0_0_10px_#FFCF6E]" />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#FFCF6E]" />
          </div>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line Desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b 
            from-[#FFCF6E] via-[#FFDFA0] to-[#FFCF6E]
            -translate-x-1/2 hidden md:block opacity-70"
          />

          {/* Mobile line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b 
            from-[#FFCF6E] via-[#FFDFA0] to-[#FFCF6E] md:hidden opacity-70"
          />

          {/* Events */}
          <div className="space-y-14 md:space-y-20">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-6 md:gap-0 
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Mobile dot */}
                <div className="absolute left-8 -translate-x-1/2 md:hidden">
                  <div
                    className="w-4 h-4 rounded-full bg-[#FFCF6E] 
                    shadow-[0_0_12px_#FFCF6E] border-2 border-[#FFDFA0]"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 pl-12 md:pl-0 
                    ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div
                    className="rounded-3xl p-8 backdrop-blur-md bg-white/5
                    border border-[#FFDFA0]/40 shadow-xl
                    hover:shadow-[0_0_25px_rgba(255,215,150,0.25)]
                    hover:border-[#FFCF6E]/60
                    transition-all duration-500 group"
                  >
                    {/* Icon */}
                    <div className="flex items-center gap-3">
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 
                      rounded-full bg-gradient-to-br from-[#FF3B3B] to-[#C21010] 
                      text-[#FFEFD5] mb-5 shadow-[0_0_15px_rgba(255,80,80,0.4)]"
                      >
                        {event.icon}
                      </div>

                      {/* Date */}
                      <div className="inline-block px-4 py-1 rounded-full bg-[#FFCF6E]/15 mb-5">
                        <p className="font-display text-sm text-[#FFCF6E] font-semibold tracking-wide">{event.date}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl text-[#FFEFD5] mb-2">{event.title}</h3>

                    {/* Description */}
                    <p className="font-sans text-[#FFEFD5]/60">{event.description}</p>
                  </div>
                </div>

                {/* Desktop Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-[#FFCF6E] border-4 border-[#1B0F27] 
                    shadow-[0_0_20px_#FFCF6E]"
                    whileHover={{ scale: 1.15 }}
                  />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-15px) translateX(10px); opacity: 1; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
