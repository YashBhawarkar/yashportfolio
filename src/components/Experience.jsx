// file: src/components/Experience.jsx
import React from "react";
import tcsLogo from "../assets/tcs-logo.png";

const experienceData = [
  {
    title: "Software Developer",
    company: "Tata Consultancy Services (TCS)",
    location: "Nagpur, IN",
    date: "June 2022 - July 2025",
    description:
      "Delivered end-to-end full-stack solutions, driving the development of scalable, high-performance applications. Led cross-functional projects integrating complex systems, improving scalability and efficiency by 40%. Designed and deployed AI/ML-powered recommendation engines to enhance personalization and user engagement. Engineered automation workflows and intelligent processes, optimizing operational performance and supporting data-driven decision-making.",
    skills: [
      "Node.js",
      "Express.js",
      "Firebase",
      "GCP",
      "AWS",
      "Vertex AI",
      "REST APIs",
      "JavaScript",
      "Python",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "SendGrid",
      "Postman",
      "Linux CLI",
      "Serverless Architecture",
    ],
    logo: tcsLogo,
  },
];

const ExperienceCard = ({ data }) => {
  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
      {/* Ambient glow (desktop only) */}
      <div className="pointer-events-none absolute -inset-6 opacity-40 blur-3xl hidden sm:block">
        <div className="absolute top-6 left-8 h-28 w-28 rounded-full bg-purple-500/30 animate-floaty" />
        <div className="absolute bottom-8 right-10 h-32 w-32 rounded-full bg-pink-500/20 animate-floaty [animation-delay:1.5s]" />
      </div>

      {/* Card */}
      <div
        className="
          relative w-full p-5 sm:p-6 xl:p-8 rounded-2xl
          border-2 border-primary/20
          bg-gray-900/80 backdrop-blur-sm
          shadow-2xl
          transition-all duration-500
          sm:hover:border-primary
          sm:hover:shadow-[0_0_35px_rgba(130,69,236,0.85)]
          sm:transform sm:hover:-translate-y-1 sm:hover:scale-[1.01]
        "
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div
              className="
                w-14 h-14 sm:w-16 sm:h-16
                rounded-xl bg-white/90
                overflow-hidden
                flex items-center justify-center
                border border-white/20
                shadow-lg
                transition-transform duration-300
                sm:hover:scale-105
              "
            >
              <img
                src={data.logo}
                alt={`${data.company} logo`}
                className="w-full h-full object-cover animate-logo-breathe"
                draggable="false"
              />
            </div>

            {/* Role / Company */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {data.title}
              </h3>
              <h4 className="text-base sm:text-lg text-primary font-semibold">
                {data.company}
              </h4>
            </div>
          </div>

          {/* Meta */}
          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-300 font-medium">
              {data.location}
            </p>
            <p className="text-sm text-gray-500 mt-1">{data.date}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 pt-5 border-t border-gray-700/70">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {data.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h5 className="font-medium text-white text-sm mb-3">
            Tech Stack
          </h5>

          <ul className="flex flex-wrap gap-2 justify-start">
            {data.skills.map((skill) => (
              <li
                key={skill}
                className="
                  bg-[#251f38]
                  text-[11px] sm:text-xs font-semibold text-purple-300
                  px-3 py-1 rounded-lg
                  border border-purple-500/20
                  transition-all duration-200
                  sm:hover:-translate-y-[1px]
                  sm:hover:border-purple-400/60
                  sm:hover:text-purple-200
                  sm:hover:shadow-[0_0_16px_rgba(130,69,236,0.35)]
                "
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Corner accent */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl hidden sm:block" />
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-16 sm:py-24
        px-4 sm:px-6 md:px-[7vw] lg:px-[20vw]
        font-sans mx-auto max-w-full
      "
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          Full-stack software development experience with cloud-native architecture and AI/ML integration.
        </p>
      </div>

      <div className="flex justify-center items-center">
        {experienceData.map((entry, index) => (
          <ExperienceCard key={index} data={entry} />
        ))}
      </div>
    </section>
  );
}