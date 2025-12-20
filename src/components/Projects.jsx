// file: src/components/Projects.jsx
import React, { useState } from 'react';

const projectsData = [
  {
    title: "TCS CIRCLE4LIFE (Sustainability App)",
    desc: "Engineered a robust backend for a mobile app delivering personalized Sustainability Development Goals and Carbon Footprint Reduction solutions, employing Node.js, Express.js, Firebase, and Google Cloud Platform (GCP). Leveraged Vertex AI and machine learning models to provide AI-driven insights.",
    skills: ["Node.js", "Express.js", "GCP", "Vertex AI", "Machine Learning"],
    image: "/placeholder-sustainability.png",
  },
  {
    title: "TCS CLICKFIT (Employee Fitness App)",
    desc: "Orchestrated the backend development for an Employee Fitness Engagement app, incorporating Cloud Vision API, Cloud Functions, and Firestore on Google Cloud Platform (GCP). Integrated ML-based activity classification.",
    skills: ["GCP", "Cloud Vision API", "Cloud Functions", "Firestore", "ML-based Activity Classification"],
    image: "/placeholder-health.png",
  },
  {
    title: "Diabetic Retinopathy Detection (AI Research)",
    desc: "Constructed a reliable system for Diabetic Retinopathy detection using deep neural networks, utilizing the Efficient Net B5 architecture. Showcased research outcomes at the International Conference on Automation, Computing and Communication 2022 (ICACC-2022).",
    skills: ["Deep Neural Networks", "Efficient Net B5", "Computer Vision", "Machine Learning", "Python"],
    image: "/placeholder-ai-health.png",
  },
  {
    title: "Placeholder Project 4",
    desc: "Backend Development focusing on scalable enterprise products.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/placeholder-project-4.png",
  },
  {
    title: "Placeholder Project 5",
    desc: "Cloud-native system design and deployment on AWS and Azure.",
    skills: ["AWS", "Azure", "Docker", "Git", "Cloud Architecture"],
    image: "/placeholder-project-5.png",
  },
];

const ProjectCard = ({ title, desc, image, skills, index, isHovered, onHover }) => {
  return (
    <div
      className={`flex-none w-64 md:w-72 lg:w-80 h-full mx-2 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden bg-gray-800 border border-gray-700
      ${isHovered ? 'scale-[1.2] z-40 shadow-2xl shadow-purple-700/80 -translate-y-6' : 'z-30 opacity-50 hover:opacity-100'}
      `}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      // Added relative positioning to ensure z-index works correctly within the flex container
      style={{ position: 'relative' }} 
    >
      <div className="relative w-full h-40">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 truncate">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map(skill => (
            <span key={skill} className="text-xs font-medium text-purple-400 bg-purple-900/50 px-2 py-1 rounded-full">
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

  return (
    <section id="projects" className="py-24 pb-24 font-sans relative">
      <div className="max-w-[80vw] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        {/* Horizontal Scrolling Container (Netflix Card Style) */}
        <div className="flex overflow-x-scroll py-8 -mx-6 custom-scrollbar">
          {projectsData.map((p, i) => (
            <ProjectCard 
              key={i} 
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