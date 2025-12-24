import React from "react";
import msuLogo from "../assets/msu-logo.png";
import dyLogo from "../assets/dypatil-logo.jpeg";

const educationData = [
  {
    title: "Master of Science in Computer Science",
    institution: "Michigan State University",
    date: "August 2025 – May 2027 (Expected)",
    gpa: "3.83 / 4.00",
    description:
      "Graduate studies focused on advanced computer science concepts including algorithms, cloud computing, distributed systems, and applied artificial intelligence.",
    logo: msuLogo,
    icon: msuLogo,
  },
  {
    title: "Bachelor of Engineering in Computer Engineering",
    institution: "DY Patil's Ramrao Adik Institute of Technology",
    date: "August 2018 – May 2022",
    gpa: "4.00 / 4.00",
    description:
      "Graduated with a perfect GPA, building strong foundations in software engineering, data structures, databases, and machine learning through project-based learning.",
    logo: dyLogo,
    icon: dyLogo,
  },
];

const EducationEntry = ({ data, index }) => {
  const isRight = index % 2 !== 0;

  return (
    <div className="relative flex flex-col xl:flex-row items-center mb-12 xl:mb-20">
      {/* Timeline dot (desktop only) */}
      <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-400 border-4 border-primary items-center justify-center z-10">
        <img
          src={data.icon}
          alt={`${data.institution} icon`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Card */}
      <div
        className={`
          w-full max-w-full xl:max-w-md
          p-5 sm:p-6 xl:p-8
          rounded-2xl
          border border-white/20
          bg-gray-900/90 backdrop-blur-md
          shadow-[0_0_20px_rgba(130,69,236,0.3)]
          transition-transform duration-300
          xl:hover:scale-105
          ${isRight ? "xl:ml-auto xl:mr-24" : "xl:mr-auto xl:ml-24"}
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-md overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={data.logo}
              alt={`${data.institution} logo`}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {data.title}
            </h3>
            <p className="text-sm text-gray-300">
              {data.institution}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-3">
          <p className="text-sm text-gray-500">{data.date}</p>
          {data.gpa && (
            <p className="text-sm text-primary font-semibold mt-1">
              GPA: {data.gpa}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section
      id="education"
      className="
        py-16 sm:py-24
        px-4 sm:px-6 md:px-[7vw] xl:px-[12vw]
        font-sans
        bg-skills-gradient
        mx-auto max-w-full
      "
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          Academic background in computer science with strong foundations in software engineering, cloud computing, and applied artificial intelligence.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Center line (desktop only) */}
        <div className="hidden xl:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-white/30"></div>

        {educationData.map((entry, index) => (
          <EducationEntry key={index} data={entry} index={index} />
        ))}
      </div>
    </section>
  );
}