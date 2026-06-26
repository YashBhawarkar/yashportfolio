import React from "react";

const skillCategories = [
  {
    title: "Backend",
    icon: "🧩",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "System Design",
      "Authentication",
      "Authorization",
      "JavaScript"
    ],
  },
  {
    title: "Cloud",
    icon: "☁️",
    items: [
      "GCP",
      "AWS",
      "Azure",
      "Serverless Functions",
      "Firebase",
      "CI/CD"
    ],
  },
  {
    title: "Generative AI",
    icon: "🧠",
    items: [
      "RAG",
      "LoRA Fine-Tuning",
      "Vector Databases",
      "Embeddings",
      "Prompt Engineering",
      "LLM API Integration"
    ],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    items: [
      "Vertex AI",
      "Bedrock",
      "Machine Learning Pipelines",
      "Model Deployment",
      "Recommendations",
      "Python",
      "Deep Learning Fundamentals"
    ],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    items: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "SPA Architecture",
      "Accessibility Basics"
    ],
  },
  {
    title: "Dev Practices",
    icon: "📌",
    items: [
      "Git/GitHub",
      "Docker",
      "Postman",
      "Clean Code",
      "Scalability",
      "Debugging",
      "Documentation",
      "Agile / Scrum",
      "Version Control"
    ],
  },
];

function SkillPill({ label }) {
  return (
    <span className="text-xs sm:text-sm font-semibold text-cyan-100 bg-cyan-300/10 border border-cyan-300/20 px-3 py-1 rounded-full">
      {label}
    </span>
  );
}

function CategoryCard({ title, icon, items }) {
  return (
    <div
      className="
        glass-tilt-card
        rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl
        p-6 shadow-2xl shadow-slate-950/30
        transition-transform duration-300 hover:scale-[1.02]
        animate-skill-pulse
      "
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-slate-400 mt-1">Core tools & strengths</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-300/20 flex items-center justify-center text-2xl">
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
    <section id="skills" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-emerald-300">SKILLS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-300 mt-4 text-lg font-semibold">
          Key skills and technologies I use to create reliable, scalable, and high-performance software systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((c) => (
          <CategoryCard key={c.title} title={c.title} icon={c.icon} items={c.items} />
        ))}
      </div>
    </section>
  );
}
