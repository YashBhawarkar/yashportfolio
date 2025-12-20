// file: src/components/Certifications.jsx
import React, { useMemo, useRef, useState } from "react";

const certificationsData = [
  {
    title: "AWS Certified Solutions Architect Associate",
    vendor: "Amazon Web Services (AWS)",
    logo: "/aws-saa-logo.png",
    link: "#",
  },
  {
    title: "AWS Certified Developer Associate",
    vendor: "Amazon Web Services (AWS)",
    logo: "/aws-dev-logo.png",
    link: "#",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    vendor: "Amazon Web Services (AWS)",
    logo: "/aws-ccp-logo.png",
    link: "#",
  },
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    vendor: "Google Cloud Platform (GCP)",
    logo: "/gcp-ace-logo.png",
    link: "#",
  },
  {
    title: "AI-102: Azure AI Engineer Associate",
    vendor: "Microsoft Azure",
    logo: "/azure-ai-logo.png",
    link: "#",
  },
  {
    title: "DP-100: Azure Data Scientist Associate",
    vendor: "Microsoft Azure",
    logo: "/azure-ds-logo.png",
    link: "#",
  },
  {
    title: "Salesforce Certified Associate",
    vendor: "Salesforce",
    logo: "/salesforce-logo.png",
    link: "#",
  },
  {
    title: "MongoDB SI Associate Certification",
    vendor: "MongoDB",
    logo: "/mongodb-logo.png",
    link: "#",
  },
  {
    title: "Scrum Foundation Professional Certificate SFPC™",
    vendor: "Scrum",
    logo: "/scrum-logo.png",
    link: "#",
  },
  {
    title: "GitHub Foundation Certification",
    vendor: "GitHub",
    logo: "/github-logo.png",
    link: "#",
  },
];

function clampIndex(i, len) {
  return (i + len) % len;
}

const Card = ({ cert, index, activeIndex, total, onSelect, onAfterSelect }) => {
  const isCurrent = index === activeIndex;
  const isPrev = index === clampIndex(activeIndex - 1, total);
  const isNext = index === clampIndex(activeIndex + 1, total);

  // Tailwind transform classes (must be in className)
  let transformTw = "translate-x-[200%] rotate-12 scale-75";
  let zIndex = 5;
  let opacity = 0.15;

  if (isCurrent) {
    transformTw = "translate-x-0 rotate-0 scale-100 shadow-[0_20px_40px_rgba(130,69,236,0.6)]";
    zIndex = 30;
    opacity = 1;
  } else if (isPrev) {
    transformTw = "-translate-x-full -rotate-6 scale-90";
    zIndex = 20;
    opacity = 0.6;
  } else if (isNext) {
    transformTw = "translate-x-full rotate-6 scale-90";
    zIndex = 20;
    opacity = 0.6;
  } else {
    const leftSide = index < activeIndex;
    transformTw = leftSide
      ? "-translate-x-[200%] -rotate-12 scale-75"
      : "translate-x-[200%] rotate-12 scale-75";
    zIndex = 5;
    opacity = 0;
  }

  const baseClass = `
    absolute inset-0 w-full h-full p-8
    transition-all duration-700 ease-in-out
    bg-gray-800 border-2 border-primary/50 rounded-2xl
    flex flex-col justify-between items-center text-center
    will-change-transform
  `;

  const handleSelect = () => {
    if (isCurrent) return;
    onSelect(index);
    onAfterSelect?.();
  };

  return (
    <div
      className={`${baseClass} ${transformTw} ${isCurrent ? "" : "cursor-pointer"}`}
      style={{ zIndex, opacity }}
      onClick={handleSelect}
      role="button"
      aria-label={`Certification: ${cert.title}${isCurrent ? " (selected)" : ""}`}
      tabIndex={-1}
      onKeyDown={(e) => {
        // card itself is not intended for tab-focus, but keep it accessible
        if ((e.key === "Enter" || e.key === " ") && !isCurrent) {
          e.preventDefault();
          handleSelect();
        }
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
          {cert.logo ? (
            <img
              src={cert.logo}
              alt={`${cert.title} badge`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl text-primary font-bold">{index + 1}</span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
        <p className="text-sm text-gray-400 font-semibold">{cert.vendor}</p>
      </div>

      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-6 py-2 rounded-full font-semibold transition duration-300 ${
          isCurrent
            ? "bg-primary hover:bg-purple-700 text-white"
            : "bg-gray-700 text-gray-300 pointer-events-none"
        }`}
      >
        View Credential
      </a>
    </div>
  );
};

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = useMemo(() => certificationsData.length, []);
  const carouselRef = useRef(null);

  const focusCarousel = () => {
    carouselRef.current?.focus();
  };

  const goToNext = () => setActiveIndex((i) => clampIndex(i + 1, total));
  const goToPrev = () => setActiveIndex((i) => clampIndex(i - 1, total));

  const onCarouselKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      carouselRef.current?.blur();
    }
  };

  return (
    <section
      id="certifications"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A comprehensive list of my professional and technical certifications.
        </p>
      </div>

      {/* Focusable carousel container for keyboard navigation */}
      <div
        ref={carouselRef}
        tabIndex={0}
        onKeyDown={onCarouselKeyDown}
        className="relative w-full max-w-lg mx-auto h-[420px] my-16 outline-none focus:ring-2 focus:ring-primary/60 rounded-2xl"
        aria-label="Certifications carousel. Use Left/Right arrow keys to navigate."
      >
        <div className="relative w-full h-full">
          {certificationsData.map((cert, index) => (
            <Card
              key={index}
              cert={cert}
              index={index}
              activeIndex={activeIndex}
              total={total}
              onSelect={setActiveIndex}
              onAfterSelect={focusCarousel}
            />
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={() => {
            goToPrev();
            focusCarousel();
          }}
          className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 p-3 bg-gray-700/80 hover:bg-primary/80 text-white rounded-full z-40 transition"
          aria-label="Previous certification"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={() => {
            goToNext();
            focusCarousel();
          }}
          className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 p-3 bg-gray-700/80 hover:bg-primary/80 text-white rounded-full z-40 transition"
          aria-label="Next certification"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dots (hover changes certificate) */}
        <div className="absolute bottom-0 left-1/2 transform translate-y-8 -translate-x-1/2 flex space-x-2 z-40">
          {certificationsData.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  focusCarousel();
                }}
                onClick={() => {
                  setActiveIndex(index);
                  focusCarousel();
                }}
                className={`
                  w-3 h-3 rounded-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary scale-125 shadow-[0_0_8px_rgba(130,69,236,0.8)]"
                      : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                  }
                `}
                aria-label={`Go to certification ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}