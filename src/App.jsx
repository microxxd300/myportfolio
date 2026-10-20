import { useAdaptiveGrid } from "./hooks/useAdaptiveGrid.js";
import { useLenis } from "./hooks/useLenis.js";
import Preloader from "./components/Preloader.jsx";
import SiteNav from "./components/SiteNav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Story from "./components/Story.jsx";
import Projects from "./components/Projects.jsx";
import Impact from "./components/Impact.jsx";
import StackSection from "./components/StackSection.jsx";
import Education from "./components/Education.jsx";
import ContactFooter from "./components/ContactFooter.jsx";

export default function App() {
  useAdaptiveGrid();
  const lenisRef = useLenis();

  return (
    <>
      <Preloader lenisRef={lenisRef} />
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Projects />
        <Impact />
        <StackSection />
        <Education />
        <ContactFooter />
      </main>
    </>
  );
}
