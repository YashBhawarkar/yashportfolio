import { profile } from "../data/portfolioData";
import profilePhoto from "../assets/yash-profile-photo.jpg";
import useTypewriter from "../hooks/useTypewriter";

export default function About() {
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Applied AI Engineer",
    "Cloud Engineer",
    "AI/ML Engineer",
    "Gen AI Engineer",
    "Systems Engineer",
    "Problem Solver",
    "Tech Innovator",
  ];

  const typedText = useTypewriter({ words: roles });

  return (
    <section
      id="about"
      className="relative overflow-hidden px-[7vw] md:px-[7vw] lg:px-[14vw] xl:px-[18vw] pt-14 md:pt-24 pb-20 font-sans"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_at_20%_15%,rgba(24,186,141,0.24),transparent_38%),radial-gradient(ellipse_at_78%_12%,rgba(34,211,238,0.19),transparent_36%),radial-gradient(ellipse_at_58%_54%,rgba(99,102,241,0.2),transparent_42%)]" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, I’m
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {profile.name}
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-emerald-300">
              {typedText}
              <span className="animate-cursor ml-1">|</span>
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-slate-300 mb-8 mt-8 leading-relaxed">
            Full-Stack Software Engineer with{" "}
            <span className="text-cyan-300">3+ years of experience</span>{" "}
            building scalable, cloud-native applications. Specialized in{" "}
            <span className="text-cyan-300">Node.js</span>,{" "}
            <span className="text-cyan-300">Firebase</span>, and Cloud
            Computing (<span className="text-cyan-300">GCP/AWS/Azure</span>),
            with a strong focus on backend systems, AI/ML integration, and
            modern full-stack development.
          </p>

          <p className="mt-6 text-sm font-medium text-emerald-200/90">
            {profile.opportunityLine}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-floaty animate-glow-pulse">
            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-[#020711]" />
            </div>

            <div className="absolute -inset-6 rounded-full bg-cyan-400/20 blur-2xl" />

            <div
              className="
                relative aspect-square w-48 sm:w-64 md:w-[24rem]
                rounded-full overflow-hidden
                border border-white/10
                transform transition duration-500
                hover:scale-[1.03]
                shadow-2xl shadow-cyan-950/45
              "
              style={{ willChange: "transform" }}
            >
              <div className="w-full h-full transition-transform duration-500 hover:rotate-1">
                <img
                  src={profilePhoto}
                  alt="Yash Bhawarkar"
                  className="w-full h-full object-cover rounded-full"
                  draggable="false"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
            </div>
          </div>
        </div>
      </div>

      <article
        aria-labelledby="about-story-title"
        className="glass-tilt-card mt-16 rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
      >
        <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
          <div>
            <h2
              id="about-story-title"
              className="text-3xl sm:text-4xl font-bold text-emerald-300"
            >
              ABOUT
            </h2>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
