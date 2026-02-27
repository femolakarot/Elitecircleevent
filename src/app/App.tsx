import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { AgendaSection } from "./components/AgendaSection";
import { VenueSection } from "./components/VenueSection";
import { RegisterSection } from "./components/RegisterSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <AgendaSection />
      <VenueSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}
