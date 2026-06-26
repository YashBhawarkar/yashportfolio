import React from "react";
import { experiences } from "../data/portfolioData";
import borgWarnerLogo from "../assets/bw.jpeg";
import iqMsuLogo from "../assets/iq-msu.png";
import msuLogo from "../assets/msu-logo.png";
import tcsLogo from "../assets/tcs-logo.png";

const logoAssets = {
  borgwarner: borgWarnerLogo,
  "iq-msu": iqMsuLogo,
  msu: msuLogo,
  tcs: tcsLogo,
};

function CompanyMark({ experience }) {
  const logo = logoAssets[experience.logoKey];

  return (
    <div
      className="
        relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl
        border border-white/20 bg-slate-950/80 shadow-lg shadow-cyan-950/30 sm:h-16 sm:w-16
      "
      aria-hidden="true"
    >
      {logo ? (
        <img
          src={logo}
          alt=""
          className="h-full w-full object-fill bg-white"
          draggable="false"
        />
      ) : (
        <span className="bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-lg font-black text-transparent sm:text-xl">
          {experience.logoInitials}
        </span>
      )}
    </div>
  );
}

function ExperienceCard({ experience }) {
  return (
    <article className="group relative section-reveal">
      <div className="absolute left-0 top-8 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-emerald-300/30 to-transparent lg:block" />
      <div className="absolute left-[-9px] top-8 hidden h-5 w-5 rounded-full border border-cyan-200/60 bg-[#061324] shadow-[0_0_24px_rgba(34,211,238,0.45)] lg:block" />

      <div
        className="
          glass-tilt-card
          relative ml-0 rounded-3xl border border-white/10 bg-slate-950/70 p-5
          shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-300
          hover:border-cyan-300/40 hover:bg-slate-950/80 hover:shadow-cyan-950/30
          sm:p-6 lg:ml-8
        "
      >
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-70" />

        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <CompanyMark experience={experience} />

            <div>
              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-base font-semibold text-cyan-200">
                {experience.organization}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end md:text-right">
            <p className="text-sm font-bold text-slate-200">
              {experience.dateRange}
            </p>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-400">
              {experience.location}
            </p>
          </div>
        </div>

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.65)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 py-16 font-sans sm:px-6 sm:py-24 md:px-[7vw] lg:px-[16vw]"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-emerald-300 sm:text-4xl">
          EXPERIENCE
        </h2>
        <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.role}-${experience.organization}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
