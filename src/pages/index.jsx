import { useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import ConfettiBurst from "../components/ConfettiBurst";
import FloatingPetals from "../components/FloatingPetals";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JourneyStory from "../components/JourneyStory";
import PhotoFrame from "../components/PhotoFrame";
import Timeline from "../components/Timeline";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Celebrating Our Sindoor Rasam - 6 December 2020";
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Floating petals animation */}
      <FloatingPetals />

      {/* Confetti burst on load */}
      <ConfettiBurst />

      {/* Hero section with diya animation */}
      <HeroSection />

      {/* Photo upload section */}
      <PhotoFrame />

      {/* Journey story with poetic lines */}
      <JourneyStory />

      {/* Timeline section */}
      <Timeline />

      {/* Footer with final message */}
      <Footer />

      {/* Audio player toggle */}
      <AudioPlayer />
    </main>
  );
};

export default Index;
