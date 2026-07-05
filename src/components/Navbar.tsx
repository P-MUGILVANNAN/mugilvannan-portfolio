import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
}

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);
    setActiveSection(id);

    const section = document.getElementById(id);
    if (!section) return;

    const offset = 80;

    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] h-20 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#050014]/95 backdrop-blur-xl shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-10 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0">
              <img
                src="/Mugilvannan.jpg"
                alt="Mugilvannan"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-white font-bold tracking-widest uppercase text-base sm:text-lg md:text-xl whitespace-nowrap">
              MUGILVANNAN P
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative text-sm font-semibold tracking-wider transition-all duration-300 group ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-300 origin-left ${
                    activeSection === link.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-white shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[9998] bg-[#050014]/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="pt-28 px-6">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`block w-full py-4 rounded-2xl text-center uppercase font-bold tracking-widest transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400"
                    : "border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};