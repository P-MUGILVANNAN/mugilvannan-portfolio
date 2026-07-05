import React, { useState, useEffect, useRef } from "react";
import { Mail, Send, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export const Contact: React.FC = () => {
  const { email, linkedin, instagram, github } = portfolioData.contact;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // clear errors
  };

  const validate = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mugilvannanpichai02@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("AJAX form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-600/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-purple-500/20 text-xs font-semibold text-purple-400 tracking-wider uppercase bg-purple-500/5 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connection Portal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 text-left reveal-hidden">
            <div className="glass p-8 rounded-2xl border border-white/5 bg-linear-to-br from-white/2 to-white/1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Let's discuss a project!
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                I'm always open to discussing new software development initiatives, teaching syllabus consultations, guest speaker lectures, or training partnerships.
              </p>

              {/* Direct email card link */}
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group mb-6"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Address</span>
                  <span className="block text-sm md:text-base font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                    {email}
                  </span>
                </div>
              </a>

              {/* Social Channels Connections */}
              <div className="space-y-4">
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Social Channels</span>
                <div className="flex gap-4">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass border border-white/5 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form wrapped in TiltCard */}
          <div className="lg:col-span-7 w-full reveal-hidden">
            <TiltCard maxTilt={5} scale={1.01} className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                      formErrors.name ? "border-red-500/50" : "border-white/5 focus:border-purple-500/50"
                    } text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all font-medium text-sm`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <span className="flex items-center text-xs text-red-400 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                      formErrors.email ? "border-red-500/50" : "border-white/5 focus:border-purple-500/50"
                    } text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all font-medium text-sm`}
                    placeholder="johndoe@example.com"
                  />
                  {formErrors.email && (
                    <span className="flex items-center text-xs text-red-400 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                      formErrors.message ? "border-red-500/50" : "border-white/5 focus:border-purple-500/50"
                    } text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all font-medium text-sm resize-none`}
                    placeholder="Write your message here..."
                  />
                  {formErrors.message && (
                    <span className="flex items-center text-xs text-red-400 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-glow flex items-center justify-center space-x-2 w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 hover:scale-[1.01] active:scale-95 text-white shadow-lg disabled:opacity-50 transition-all cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Toast banner inside card */}
              {status === "success" && (
                <div className="absolute inset-0 bg-darkBg/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 transition-all duration-300">
                  <CheckCircle className="w-16 h-16 text-emerald-400 animate-bounce mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out, Mugilvannan will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 hover:text-white border border-white/5 uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="absolute inset-0 bg-darkBg/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 transition-all duration-300">
                  <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Submission Failed</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    An error occurred while sending your message. Please try again or email directly at {email}.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 hover:text-white border border-white/5 uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
