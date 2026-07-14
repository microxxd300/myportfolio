import { useReveal } from "./hooks/useReveal.js";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import StackSection from "./components/StackSection.jsx";
import Services from "./components/Services.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useReveal();

  return (
    <div id="top">
      <div className="dots" aria-hidden="true" />
      <Sidebar />
      <main className="main">
        <div className="content">
          <Hero />
          <Stats />
          <Projects />
          <StackSection />
          <Services />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
