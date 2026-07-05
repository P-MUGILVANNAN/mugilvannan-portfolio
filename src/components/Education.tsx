import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Combine education and certifications into one list with styling variables
  const timelineItems = [
    {
      type: "certification",
      degree: portfolioData.certifications[0].name,
      institution: portfolioData.certifications[0].provider,
      score: "Verified Specialist",
      year: portfolioData.certifications[0].year,
      description: "Acquired advanced specialization in full stack web development using MongoDB, Express.js, React.js, and Node.js. Completed practical projects on real-world training coordination.",
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      icon: <Award className="w-5 h-5" />,
      defaultTransform: "rotateY(10deg) rotateX(3deg)",
      certId: "QCWSJ6R9",
      verifyUrl: "https://ethnus.com/certverify",
    },
    {
      type: "education",
      degree: portfolioData.education[0].degree,
      institution: portfolioData.education[0].institution,
      score: portfolioData.education[0].score,
      year: portfolioData.education[0].year,
      description: portfolioData.education[0].description,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      icon: <GraduationCap className="w-5 h-5" />,
      defaultTransform: "rotateY(3deg) rotateX(1deg)",
      certId: undefined,
      verifyUrl: undefined,
    },
    {
      type: "education",
      degree: portfolioData.education[1].degree,
      institution: portfolioData.education[1].institution,
      score: portfolioData.education[1].score,
      year: portfolioData.education[1].year,
      description: portfolioData.education[1].description,
      color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
      icon: <BookOpen className="w-5 h-5" />,
      defaultTransform: "rotateY(-3deg) rotateX(1deg)",
      certId: undefined,
      verifyUrl: undefined,
    },
    {
      type: "education",
      degree: portfolioData.education[2].degree,
      institution: portfolioData.education[2].institution,
      score: portfolioData.education[2].score,
      year: portfolioData.education[2].year,
      description: portfolioData.education[2].description,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      icon: <BookOpen className="w-5 h-5" />,
      defaultTransform: "rotateY(-10deg) rotateX(3deg)",
      certId: undefined,
      verifyUrl: undefined,
    }
  ];

  // Scroll reveal observer
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
    <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-blue-500/25 text-xs font-semibold text-blue-400 tracking-wider uppercase bg-blue-500/5 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Education & Qualifications
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* 3D Curved Panoramic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[2000px] reveal-hidden">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="h-full">
              <TiltCard
                maxTilt={15}
                scale={1.04}
                defaultTransform={item.defaultTransform}
                className="p-6 border border-white/5 bg-linear-to-br from-[#0c051f]/60 to-darkBg/90 flex flex-col justify-between min-h-[415px] h-full shadow-[0_15px_35px_rgba(0,0,0,0.4)] group hover:border-white/15 cursor-pointer"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                    <div className={`p-2.5 rounded-xl border ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.year}
                    </span>
                  </div>

                  {/* Degree / Course Title */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {item.degree}
                  </h3>

                  {/* Institution Name */}
                  <p className="text-xs text-slate-400 font-semibold mb-3">
                    {item.institution}
                  </p>

                  {/* Score badge */}
                  <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold border uppercase tracking-wider mb-4 ${item.color}`}>
                    {item.score}
                  </span>

                  {/* Course description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  {/* Certificate Verification block */}
                  {item.certId && (
                    <div className="space-y-2 mt-2 relative z-20">
                      <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-lg px-2.5 py-1.5 font-mono text-[9px] text-slate-400">
                        <span className="text-slate-500 uppercase tracking-wider">Cert ID:</span>
                        <span className="font-bold text-slate-300">{item.certId}</span>
                      </div>
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-1 w-full py-1.5 px-3 rounded-lg text-[9px] font-bold uppercase tracking-wider bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-md shadow-purple-500/10 active:scale-95 transition-all text-center cursor-pointer"
                      >
                        Verify Certificate
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  )}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
