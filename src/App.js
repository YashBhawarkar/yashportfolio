// file: src/App.js
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    // Outer container with dark background and blob/grid effects
    <div className="bg-[#050414]">
      {/* Background Blob Effect (Simulated) */}
      <div className="absolute" style={{ top: '35%', left: '20%', width: '30%', height: '40%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
      </div>
      {/* Grid Background Effect (Simulated) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        {/* Hero component removed; its content is now in About */}
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;