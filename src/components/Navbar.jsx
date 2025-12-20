// file: src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkedInUrl = "https://linkedin.com/in/yash-bhawarkar/";
  const githubUrl = "https://github.com/yash-bhawarkar-dev";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -89% 0px", threshold: 0 }
    );

    sections.forEach((s) => s && observer.observe(s));

    return () => sections.forEach((s) => s && observer.unobserve(s));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-transparent">
        <div className="text-white py-5 flex justify-between items-center">
          {/* Logo */}
          <a href="#about" onClick={() => handleLinkClick("about")} className="text-lg font-semibold cursor-pointer">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Yash</span>
            <span className="text-primary">/</span>
            <span className="text-white">Bhawarkar</span>
            <span className="text-primary">&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden navbar:flex space-x-8 text-gray-300">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const active = id === activeLink;
              return (
                <li key={link.name} className={`cursor-pointer hover:text-primary ${active ? "text-primary" : ""}`}>
                  <a href={link.href} onClick={() => handleLinkClick(id)}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop social */}
          <div className="hidden navbar:flex space-x-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
              </svg>
            </a>

            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-primary cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-[#07051a] border-l border-white/10 shadow-2xl
            transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5 flex items-center justify-between border-b border-white/10">
            <div className="text-lg font-semibold">
              <span className="text-primary">&lt;</span>
              <span className="text-white">Menu</span>
              <span className="text-primary">&gt;</span>
            </div>

            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-gray-300 hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-5">
            <ul className="flex flex-col gap-4 text-gray-200">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const active = id === activeLink;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(id)}
                      className={`block py-2 px-3 rounded-lg transition ${
                        active ? "bg-purple-500/15 text-primary border border-purple-500/20" : "hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Social</p>
              <div className="flex gap-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  GitHub
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}