// file: src/components/Projects.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const projectsData = [
  {
    title: "Circle4Life",
    desc: "Designed and developed a full-stack mobile application backend delivering personalized Sustainability Development Goals (SDGs) and Carbon Footprint Reduction solutions. Utilized Node.js, Express.js, and Firebase for scalable backend APIs, integrated MongoDB for efficient data management, and deployed on Google Cloud Platform (GCP) with serverless architecture. Leveraged Vertex AI and custom machine learning models for AI-driven recommendations and analytics. Implemented REST APIs, real-time notifications, and robust security, enabling high user engagement and operational efficiency.",
    skills: ["Node.js", "Express.js", "GCP", "Firebase", "Git", "Vertex AI", "SendGrid", "Azure"],
    link: "https://circle4life.tcsapps.com/",
  },
  {
    title: "Diabetic Retinopathy Detection (AI Research)",
    desc: "Constructed a reliable system for Diabetic Retinopathy detection using deep neural networks, utilizing the Efficient Net B5 architecture. Showcased research outcomes at the International Conference on Automation, Computing and Communication 2022 (ICACC-2022).",
    skills: ["Python", "Tensorflow" , "Computer Vision", "EfficientNet B5", "Deep Learning" , "Neural Networks"],
    link: "https://www.researchgate.net/publication/360393263_Diabetic_Retinopathy_Detection_From_Fundus_Images_Using_Multi-Tasking_Model_With_EfficientNet_B5",
  },
  {
    title: "Groq RAG Assistant",
    desc: "Developed a Retrieval-Augmented Generation (RAG) assistant. Users can upload PDFs or provide web URLs to query knowledge bases with context-aware answers and referenced sources. Deployed on Streamlit Cloud with live demo.",
    skills: ["Python", "LangChain", "FAISS", "HuggingFace Embeddings", "Groq LLM", "Streamlit"],
    link: "https://groq-rag-assistant.streamlit.app/"
  },
];

const ProjectCard = ({ title, desc, skills, link, index, isHovered, onHover }) => {
  const handleOpen = () => {
    if (!link || link === "#") return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Open project: ${title}`}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      className={`flex-none w-64 md:w-72 lg:w-80 h-[420px] mx-2 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden bg-gray-800 border border-gray-700
      ${isHovered ? "scale-[1.08] z-40 shadow-2xl shadow-purple-700/80 -translate-y-3" : "z-30 opacity-70 hover:opacity-100"}
      focus:outline-none focus:ring-2 focus:ring-purple-500/70
      `}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{ position: "relative" }}
    >
      {/* Top banner */}
      <div className="relative w-full h-16 bg-gradient-to-r from-purple-700/40 via-pink-600/20 to-indigo-600/30 border-b border-gray-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 text-white text-sm">
            {"</>"}
          </span>
          <span className="text-white/80 text-sm font-semibold">Project</span>

          {/* tiny hint */}
          {link && link !== "#" && (
            <span className="ml-2 text-[11px] text-gray-300/70 border border-white/10 px-2 py-[2px] rounded-full">
              Open ↗
            </span>
          )}
        </div>
      </div>

      {/* Content (fixed card height; description scrolls to show full text) */}
      <div className="p-4 h-[calc(420px-64px)] flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

        {/* FULL description visible via scroll (same height across cards) */}
        <div className="text-gray-300 text-sm leading-relaxed overflow-auto pr-2 flex-1">
          {desc}
        </div>

        {/* Skills pinned to bottom */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-700/60">
          {skills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full border border-purple-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  // Duplicate list for seamless loop
  const loopData = useMemo(() => [...projectsData, ...projectsData], []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.25;

    const animate = () => {
      if (!isPaused.current) {
        container.scrollLeft += speed;
        const half = container.scrollWidth / 2;
        if (container.scrollLeft >= half) container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="projects" className="py-24 pb-24 font-sans relative">
      <div className="max-w-[80vw] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll py-8 -mx-6 custom-scrollbar"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          {loopData.map((p, i) => (
            <ProjectCard
              key={`${p.title}-${i}`}
              {...p}
              index={i}
              isHovered={hoveredCardIndex === i}
              onHover={setHoveredCardIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}