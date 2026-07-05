import React, { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Terminal, Award, Users, Code, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

export const Hero: React.FC = () => {
  const { name, tagline } = portfolioData.personalInfo;
  
  // Rotating typing text for role titles
  const roles = [
    "Academic Coordinator(TL)",
    "Full Stack Developer",
    "Technical Mentor",
    "MERN Specialist"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: number;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          // Pause before deleting
          timer = window.setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = window.setTimeout(handleTyping, typingSpeed);
    };

    timer = window.setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Neon Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob-spin pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob-spin pointer-events-none [animation-delay:4s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase bg-blue-500/5">
            <Award className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Welcome to My Space</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
              Hi, I'm <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-size-[200%_auto]">
                {name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3.5xl font-bold text-slate-300 min-h-[40px] flex items-center justify-center lg:justify-start">
              <span>I am a&nbsp;</span>
              <span className="text-purple-400 border-r-2 border-purple-500 animate-pulse pr-1">
                {currentText}
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl font-normal leading-relaxed">
            {tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="btn-glow flex items-center justify-center space-x-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20 hover:scale-[1.03] active:scale-95 transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider glass border border-white/10 hover:border-white/20 text-slate-200 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Quick Mini Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8 border-t border-white/5">
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-extrabold text-2xl text-white">2.5+</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-extrabold text-2xl text-purple-400">500+</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Students Mentored</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-extrabold text-2xl text-cyan-400">6+ Mos</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Team Leadership</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-display font-extrabold text-2xl text-white">100%</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Practical Focus</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual: 3D Floating Dashboard Card */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <TiltCard className="w-full max-w-[420px] p-6 border border-white/5 bg-linear-to-br from-white/2 to-white/1 shadow-2xl relative group">
            {/* Custom Terminal Header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">MUGILVANNAN P</span>
              <Terminal className="w-4 h-4 text-slate-500" />
            </div>

            {/* Profile Avatar Area */}
            <div className="flex flex-col items-center text-center space-y-4 py-4 relative">
              <div className="relative group/avatar">
                {/* Glowing Background Ring */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 via-purple-500 to-cyan-500 blur-md opacity-75 group-hover/avatar:scale-105 transition-all duration-300 animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-slate-900 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Digital profile graphic */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                    <Code className="w-14 h-14 text-white/80 animate-pulse" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">MUGILVANNAN P</h3>
                <p className="text-xs text-purple-400 font-mono font-medium">Academic Coordinator(TL) & Dev Lead</p>
              </div>

              {/* Status Code Block */}
              <div className="w-full text-left bg-black/40 border border-white/5 rounded-xl p-3.5 font-mono text-[11px] leading-relaxed text-slate-400">
                <p className="text-blue-400"><span className="text-purple-400">const</span> dev = &#123;</p>
                <p className="pl-4">name: <span className="text-cyan-400">"MUGILVANNAN P"</span></p>
                <p className="pl-4">passion: <span className="text-cyan-400">"Full Stack & Mentoring"</span>,</p>
                <p className="pl-4">tools: [<span className="text-yellow-500">"MERN"</span>,<span className="text-yellow-500">"MEAN"</span>, <span className="text-yellow-500">"PYTHON"</span>, <span className="text-yellow-500">"SPRINGBOOT"</span>],</p>
                <p className="pl-4">location: <span className="text-cyan-400">"Chennai, India"</span>,</p>
                <p className="pl-4">status: <span className="text-emerald-400">"Ready to train & build"</span></p>
                <p className="text-blue-400">&#125;;</p>
              </div>

              {/* Glowing Interactive Widgets */}
              <div className="grid grid-cols-2 gap-3 w-full pt-2">
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/2 border border-white/5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Students</span>
                    <span className="text-sm font-extrabold text-white">500+</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/2 border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Approach</span>
                    <span className="text-sm font-extrabold text-white">Practical</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
