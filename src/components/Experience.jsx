// file: src/components/Experience.jsx
import React from 'react';

const experienceData = [
  {
    title: "Software Developer",
    company: "Tata Consultancy Services (TCS)",
    location: "Nagpur, IN",
    date: "June 2022 - July 2025",
    description: "Pioneered a mobile app backend utilizing Node.js, Express.js, Firebase, MongoDB, and GCP services. Led cross-platform development initiatives, including REST APIs and Python, resulting in a 40% scalability enhancement. Implemented AI-driven personalized recommendations using Vertex AI and engineered advanced automated triggers.",
    skills: ["Node.js", "Express.js", "Firebase", "GCP", "Vertex AI", "REST APIs", "JavaScript", "Python"],
    logo: "/tcs-logo.png", // Placeholder image path
  },
];

const ExperienceCard = ({ data }) => (
  <div className="w-full max-w-2xl mx-auto p-6 xl:p-8 rounded-2xl shadow-2xl border-2 border-primary/20 bg-gray-900/80 backdrop-blur-sm 
              transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(130,69,236,0.9)] transform hover:scale-[1.01]">
    
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-1">{data.title}</h3>
        <h4 className="text-lg text-primary font-semibold">{data.company}</h4>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-400 font-medium">{data.location}</p>
        <p className="text-sm text-gray-500 mt-1">{data.date}</p>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-700">
      <p className="text-gray-300 leading-relaxed">{data.description}</p>
    </div>
    
    <div className="mt-6">
      <h5 className="font-medium text-white mb-2 text-sm">Tech Stack:</h5>
      <ul className="flex flex-wrap">
        {data.skills.map((skill) => (
          <li key={skill} className="bg-[#251f38] text-xs font-semibold text-purple-400 px-3 py-1 mr-2 mb-2 rounded-lg border border-gray-600">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mx-auto max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My journey in software development, cloud, and AI/ML systems.
        </p>
      </div>
      
      {/* Container for the single card, easily expandable for a carousel/stack if more entries are added */}
      <div className="flex justify-center items-center">
        {experienceData.map((entry, index) => (
          <ExperienceCard key={index} data={entry} />
        ))}
      </div>
    </section>
  );
}