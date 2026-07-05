import React, { useState, useEffect, useRef } from "react";
import { Laptop, Cpu, Database, Cloud, LineChart, Code } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal-hidden");
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Laptop className="w-5 h-5" />;
      case "Backend":
        return <Cpu className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Cloud & Tools":
        return <Cloud className="w-5 h-5" />;
      case "Programming & Data":
        return <LineChart className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const selectedCategoryData = portfolioData.skills.find(
    (c) => c.category === activeCategory
  );

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-cyan-500/20 text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-500/5 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Skills & Core Competencies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 reveal-hidden">
          {portfolioData.skills.map((c) => {
            const isActive = activeCategory === c.category;
            return (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 scale-[1.03] border border-white/10"
                    : "glass border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {getCategoryIcon(c.category)}
                <span>{c.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 reveal-hidden">
          {selectedCategoryData?.skills.map((skill) => (
            <TiltCard
              key={skill}
              maxTilt={15}
              scale={1.04}
              className="p-5 border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] flex flex-col items-center justify-center text-center group min-h-[120px]"
            >
              {/* Floating glow light dot behind skill name */}
              <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              
              {/* Mini tech circle icon wrapper */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300">
                <Code className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              <span className="font-display font-bold text-sm md:text-base text-slate-200 group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
