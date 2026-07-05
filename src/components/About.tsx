import React, { useEffect, useRef } from "react";
import { User, BookOpen, Layers, Target, Users, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

export const About: React.FC = () => {
  const { description, teachingApproach, highlights, experienceAdditional } = portfolioData.about;

  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal effect
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

  const highlightIcons = [
    <Calendar className="w-5 h-5 text-blue-400" />,
    <Layers className="w-5 h-5 text-purple-400" />,
    <Target className="w-5 h-5 text-cyan-400" />,
    <Users className="w-5 h-5 text-indigo-400" />
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-purple-500/20 text-xs font-semibold text-purple-400 tracking-wider uppercase bg-purple-500/5 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Discover my story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left info area */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-hidden">
            <div className="glass p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Who is Mugilvannan?</span>
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-normal">
                {description}
              </p>

              <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span>My Teaching Philosophy</span>
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {teachingApproach}
              </p>
            </div>

            {/* Additional Dev Lead Exp */}
            <div className="glass p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                <span>Engineering Leadership</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {experienceAdditional}
              </p>
            </div>
          </div>

          {/* Right Highlights widgets */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full reveal-hidden">
            {highlights.map((highlight, idx) => (
              <TiltCard
                key={idx}
                className="p-6 border border-white/5 bg-gradient-to-tr from-white/[0.02] to-white/[0.01] flex flex-col justify-between min-h-[160px] group"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 w-fit group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300">
                  {highlightIcons[idx]}
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-extrabold text-white leading-tight font-display mb-1">
                    {highlight.text}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {highlight.label}
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
