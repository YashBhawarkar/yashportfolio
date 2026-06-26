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
import ResumeFab from "./components/ResumeFab";

function App() {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-grid" aria-hidden="true" />
      <div className="portfolio-aurora" aria-hidden="true" />

      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      <ResumeFab />
    </div>
  );
}

export default App;
