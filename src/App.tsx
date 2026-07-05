import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#f8fafc] font-sans selection:bg-purple-500/30 selection:text-white">
      {/* 3D Canvas Dust Particle Engine */}
      <ParticleBackground />

      {/* Sticky frosted glass Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
};

export default App;
