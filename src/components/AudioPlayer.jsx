import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Using a royalty-free Indian flute ambient track
  const audioSrc = "https://cdn.pixabay.com/audio/2024/02/14/audio_e7ca77a7be.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="none" />

      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full golden-border bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-golden group"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-gold" />
          ) : hasInteracted ? (
            <VolumeX className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
          ) : (
            <Music className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-card/95 backdrop-blur-sm border border-border text-sm text-foreground whitespace-nowrap shadow-warm">
            {isPlaying ? "Pause Music" : hasInteracted ? "Play Music" : "Play Indian Flute"}
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default AudioPlayer;
