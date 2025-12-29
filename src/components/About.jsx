// file: src/components/About.jsx
import useTypewriter from "../hooks/useTypewriter";
import profilePhoto from "../assets/yash-profile-photo.jpg";

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

  // Google Drive direct download link
  const resumeDriveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1HjRkTlavmo6oUnQEg2nX8VG1w-sYuzEK";

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-screen flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-10 md:gap-x-12">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, I’m
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yash Bhawarkar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-primary">
              {typedText}
              <span className="animate-cursor ml-1">|</span>
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Full-Stack Software Engineer with{" "}
            <span className="text-blue-500">3+ years of experience</span> building scalable,
            cloud-native applications. Specialized in{" "}
            <span className="text-blue-500">Node.js</span>,{" "}
            <span className="text-blue-500">Firebase</span>, and Cloud Computing (
            <span className="text-blue-500">GCP/AWS/Azure</span>), with a strong focus on
            backend systems, AI/ML integration, and modern full-stack development.
          </p>

          {/* Enhanced Download Button */}
          <a
            href={resumeDriveDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative inline-flex items-center justify-center
              px-10 py-4 mt-6
              text-lg font-bold tracking-wide text-white
              rounded-full overflow-hidden
              transition-all duration-300 ease-out
              hover:scale-[1.06] active:scale-[0.97]
              focus:outline-none focus:ring-2 focus:ring-purple-400/80 focus:ring-offset-2 focus:ring-offset-transparent
            "
          >
            {/* Base gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500" />

            {/* Soft glow aura */}
            <span className="absolute -inset-6 rounded-full bg-purple-500/25 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Animated border shimmer */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-400/60 via-pink-400/50 to-indigo-400/60 opacity-70" />

            {/* Shine sweep */}
            <span className="absolute inset-0 overflow-hidden">
              <span
                className="
                  absolute -left-[60%] top-0 h-full w-[45%]
                  bg-gradient-to-r from-transparent via-white/35 to-transparent
                  skew-x-12 opacity-0
                  transition-all duration-700
                  group-hover:left-[120%] group-hover:opacity-100
                "
              />
            </span>

            {/* Inner depth layer */}
            <span className="absolute inset-[2px] rounded-full bg-black/20" />

            {/* Text + icon */}
            <span className="relative z-10 flex items-center gap-2">
              DOWNLOAD RESUME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[1px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Profile Photo - Enhanced UI */}
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <div className="relative animate-floaty animate-glow-pulse">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-[#050414]" />
            </div>

            {/* Outer soft blur aura */}
            <div className="absolute -inset-6 rounded-full bg-purple-500/20 blur-2xl" />

            {/* Actual photo container */}
            <div
              className="
                relative aspect-square w-48 sm:w-64 md:w-[24rem]
                rounded-full overflow-hidden
                border border-white/10
                transform transition duration-500
                hover:scale-[1.03]
              "
              style={{ willChange: "transform" }}
            >
              {/* Hover tilt */}
              <div className="w-full h-full transition-transform duration-500 hover:rotate-1">
                <img
                  src={profilePhoto}
                  alt="Yash Bhawarkar profile photo"
                  className="w-full h-full object-cover rounded-full"
                  draggable="false"
                />
              </div>

              {/* Subtle shine overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}