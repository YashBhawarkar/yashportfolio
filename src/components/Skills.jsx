// file: src/components/Skills.jsx
import React from "react";

const skillCategories = [
  {
    title: "Backend",
    icon: "🧩",
    items: ["Node.js", "Express.js", "REST APIs", "Firebase", "MongoDB", "Auth", "System Design"],
  },
  {
    title: "Cloud",
    icon: "☁️",
    items: ["GCP", "AWS", "Azure", "Cloud Functions", "Firestore", "Vertex AI", "CI/CD Basics"],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    items: ["Vertex AI", "Computer Vision", "Model Integration", "Recommendations", "Python", "Deep Learning Basics"],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    items: ["React", "TailwindCSS", "Responsive UI", "SPA Patterns", "Accessibility Basics"],
  },
  {
    title: "Dev Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "Postman", "Jest (Basics)", "Linux CLI"],
  },
  {
    title: "Practices",
    icon: "📌",
    items: ["Clean Code", "Scalability", "Debugging", "Documentation", "Agile/Scrum"],
  },
];

function SkillPill({ label }) {
  return (
    <span className="text-xs sm:text-sm font-semibold text-purple-300 bg-purple-900/30 border border-purple-500/20 px-3 py-1 rounded-full">
      {label}
    </span>
  );
}

function CategoryCard({ title, icon, items }) {
  return (
    <div
      className="
        rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-md
        p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.18)]
        transition-transform duration-300 hover:scale-[1.02]
        animate-skill-pulse
      "
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">Core tools & strengths</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <SkillPill key={x} label={x} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A snapshot of the tools and technologies I use to build scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((c) => (
          <CategoryCard key={c.title} title={c.title} icon={c.icon} items={c.items} />
        ))}
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        Tip: If you want, we can make these pills clickable (filter Projects by skill).
      </div>
    </section>
  );
}