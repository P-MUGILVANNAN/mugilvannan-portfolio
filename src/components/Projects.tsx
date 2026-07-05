import React, { useEffect, useRef } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { GithubIcon } from "./SocialIcons";

// Import project screenshots
import fiitjobsImg from "../assets/fiitjobs.png";
import entrykodeImg from "../assets/entrykode.png";
import nithyafancyImg from "../assets/nithyafancy.png";

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Array mapping for project images
  const projectImages = [fiitjobsImg, entrykodeImg, nithyafancyImg];

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
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal-hidden");
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase bg-blue-500/5 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>My Creations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-hidden">
          {portfolioData.projects.map((project, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              scale={1.02}
              className="p-6 border border-white/5 bg-linear-to-br from-white/2 to-white/1 flex flex-col justify-between min-h-[420px] relative group"
            >
              <div>
                {/* Project Image Header */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-slate-950 border border-white/5 flex items-center justify-center shadow-inner group-hover:border-cyan-500/30 transition-all duration-500">
                  <img
                    src={projectImages[idx]}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-darkBg/80 via-transparent to-black/10" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/3 border border-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-wider hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Buttons */}
                <div className={project.codeUrl ? "grid grid-cols-2 gap-4" : "flex w-full"}>
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider glass border border-white/10 hover:border-white/20 text-slate-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>View Code</span>
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-glow flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md active:scale-95 transition-all ${
                      project.codeUrl ? "" : "w-full"
                    }`}
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
