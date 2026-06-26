import { profile } from "../data/portfolioData";

export default function ResumeFab() {
  return (
    <a
      href={profile.links.resume}
      download
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-emerald-200/50 bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 text-slate-950 shadow-[0_18px_42px_rgba(16,185,129,0.28)] transition-all duration-300 hover:w-40 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(34,211,238,0.32)] focus:outline-none focus:ring-4 focus:ring-cyan-200/45 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 bg-white/0 transition group-hover:bg-white/15" />
      <svg
        aria-hidden="true"
        className="relative h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      <span className="relative ml-0 max-w-0 whitespace-nowrap text-sm font-black uppercase tracking-normal opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-24 group-hover:opacity-100">
        Resume
      </span>
    </a>
  );
}
