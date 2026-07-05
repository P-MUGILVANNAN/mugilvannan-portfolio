import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export const Footer: React.FC = () => {
  const { linkedin, github, instagram } = portfolioData.contact;

  return (
    <footer className="relative border-t border-white/5 bg-darkBg py-12 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-purple-500/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
              <img src="/Mugilvannan.jpg" alt="Mugilvannan P Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-wider">
              MUGILVANNAN P
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Academic Coordinator(TL) & Full Stack Developer
          </span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center space-x-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/5 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-500/5 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Copyright area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col justify-end gap-4 text-center sm:text-right relative z-10">
        <p className="text-[11px] font-medium text-slate-600">
          &copy; {new Date().getFullYear()} MUGILVANNAN P. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
