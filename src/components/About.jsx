// file: src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-10 md:gap-x-12">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Hi, I am</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Yash Bhawarkar</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-primary">Software Engineer</span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Experienced software engineer with 3+ years in backend development, AI/ML integration, and Cloud-native systems, passionate about applying computing to real-world challenges. Specialized in scalable solutions using <span className="text-blue-500">Node.js</span>, <span className="text-blue-500">Firebase</span>, and Cloud Computing (<span className="text-blue-500">GCP/AWS/Azure</span>).
          </p>
          <a
            href="/Yash Bhawarkar Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Yash Bhawarkar Resume.pdf" 
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, rgb(130, 69, 236), rgb(168, 85, 247))',
              boxShadow: 'rgb(130, 69, 236) 0px 0px 2px, rgb(130, 69, 236) 0px 0px 2px, rgb(130, 69, 236) 0px 0px 40px',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <div className="aspect-square w-48 sm:w-64 md:w-[24rem] border-4 border-purple-700 rounded-full overflow-hidden" style={{ willChange: 'transform', transition: '1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99)', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.05, 1.05, 1.05)' }}>
            {/* Placeholder for Profile Photo */}
            <img src="/placeholder-profile.png" alt="Yash Profile Photo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}