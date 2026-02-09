import { useState, useEffect } from "react";
import PastShowHighlights from "@/components/sections/PastShowHighlights";
import ScheduleSection from "@/components/sections/ScheduleSection";
import RegisterQuickly from "@/components/sections/RegisterQuickly";
import VenueLocation from "@/components/sections/VenueLocation";
import CountdownTimer from "@/components/sections/CountdownTimer";
import HeroCountdown from "@/components/sections/HeroCountdown";
import Footer from "@/components/sections/Footer";

/**
 * TES 4.0 Registration Website - Main Page
 *
 * Design Philosophy: Modern Event Experience
 * - High contrast black background with bright yellow accents
 * - Bold typography with clear visual hierarchy
 * - Asymmetric layout with strategic whitespace
 * - Smooth animations and interactive elements
 */
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/__manus__/ORANGE_LOGO_TES.png"
              alt="TES 4.0"
              className="h-8 md:h-10"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#highlights"
              className="hover:text-accent transition-colors"
            >
              Highlights
            </a>
            <a href="#schedule" className="hover:text-accent transition-colors">
              Schedule
            </a>
            <a href="#register" className="hover:text-accent transition-colors">
              Register
            </a>
            <a href="#venue" className="hover:text-accent transition-colors">
              Venue
            </a>
          </nav>
          <a
            href="#register"
            className="inline-block bg-accent text-accent-foreground hover:bg-[#ff5c38] transition-colors px-6 py-2 rounded font-semibold"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-accent animate-fade-in">
              TES 4.0
            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-12 text-foreground/80 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              The Ultimate Tech & Entrepreneurship Summit
            </p>

            {/* Countdown Timer */}
            <HeroCountdown />

            <a
              href="#register"
              className="inline-block bg-accent text-accent-foreground hover:bg-[#ff5c38] text-xl md:text-2xl px-10 py-4 md:px-12 md:py-5 rounded-lg font-bold animate-fade-in transition-all duration-300 shadow-lg hover:shadow-accent/50 transform hover:scale-105"
              style={{ animationDelay: "0.4s" }}
            >
              Register Now
            </a>
          </div>
        </section>

        {/* Past Show Highlights */}
        <PastShowHighlights />

        {/* Schedule Section */}
        <ScheduleSection />

        {/* Register Quickly */}
        <RegisterQuickly />

        {/* Venue Location */}
        <VenueLocation />

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
