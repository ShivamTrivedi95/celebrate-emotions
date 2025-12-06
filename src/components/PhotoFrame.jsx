import { motion } from "framer-motion";
import { Heart, Upload } from "lucide-react";
import { useState } from "react";

import sindoorImage from "../assets/Sindur_image.jpg";

const PhotoFrame = () => {
  const [image, setImage] = useState(sindoorImage);

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground drop-shadow-md mb-4">A Moment Frozen in Time</h2>
        </motion.div>

        {/* Photo Frame */}
        <motion.div
          className="relative max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glow aura */}
          <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-sindoor/25 via-sindoor/10 to-sindoor/30 blur-2xl" />

          {/* Main Frame */}
          <div className="relative rounded-2xl overflow-hidden p-3 bg-gradient-to-br from-background/70 to-background/30 sindoor-frame shadow-xl cursor-pointer group">
            <div className="relative rounded-xl overflow-hidden bg-muted/30 aspect-[4/5] flex items-center justify-center">
              <img src={image} alt="Uploaded memory" className="w-full h-full object-cover rounded-lg shadow-inner" />
            </div>
          </div>

          {/* Decorative Hearts */}
          <motion.div
            className="absolute -top-7 -right-7"
            animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-9 h-9 text-sindoor fill-sindoor/30" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6"
            animate={{ y: [0, -6, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-7 h-7 text-marigold fill-marigold/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoFrame;
