// file: src/components/Education.jsx
import React from 'react';

const educationData = [
  {
    title: "Master of Science in Computer Science",
    institution: "Michigan State University",
    date: "August 2025 - May 2027 (Expected)",
    description: "Master of Science in Computer Science.",
    logo: "/MSU-1-BAgyX3QL.png", // Placeholder image path
    icon: "/MSU-2-E7TTMMNX.png", // Placeholder image path
  },
  {
    title: "Bachelor of Engineering in Computer Engineering",
    institution: "Dr. DY Patil's Ramrao Adik Institute of Technology",
    date: "August 2018 - May 2022 (GPA: 4.00)",
    description: "Bachelor of Engineering in Computer Engineering (GPA:4.00).",
    logo: "/GTU-1-Dal-fBSf.png", // Placeholder image path
    icon: "/GTU-2-DT3eVn2v.png", // Placeholder image path
  },
];

// Reusing the timeline card structure
const EducationEntry = ({ data, index }) => {
  const isRightSide = index % 2 !== 0;

  return (
    <div className={`flex flex-col items-center mb-16 xl2:flex-row ${isRightSide ? 'xl2:justify-end' : 'xl2:justify-start'}`}>
      {/* Circle Icon */}
      <div className="absolute left-0 xl2:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-primary w-12 h-12 rounded-full flex justify-center items-center z-10">
        <img src={data.icon} alt={`${data.institution} icon`} className="w-full h-full object-cover rounded-full" />
      </div>

      {/* Content Card */}
      <div
        className={`w-full xl2:max-w-md p-4 xl2:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ml-8 transform transition-transform duration-300 hover:scale-105
        ${isRightSide ? 'xl2:mr-0 xl2:ml-28' : 'xl2:ml-0 xl2:mr-28'}`}
      >
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
            <img src={data.logo} alt={`${data.institution} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl2 font-semibold text-white">{data.title}</h3>
              <h4 className="text-sm text-gray-300">{data.institution}</h4>
            </div>
            <p className="text-sm text-gray-500 mt-2">{data.date}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-400">{data.description}</p>
      </div>
    </div>
  );
};


export default function Education() {
  return (
    <section id="education" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[3vw] font-sans bg-skills-gradient clip-path-custom-3 mx-auto max-w-full xl2:max-w-[1430px]">
      <div className="m-auto max-w-[550px] xl2:max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line in the timeline */}
          <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-white h-full xl2:left-1/2 xl2:translate-x-0"></div>
          
          {educationData.map((entry, index) => (
            <EducationEntry key={index} data={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}