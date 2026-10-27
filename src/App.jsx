import { useAdaptiveGrid } from "./hooks/useAdaptiveGrid.js";
import { useLenis } from "./hooks/useLenis.js";
import { useSlideStack } from "./hooks/useSlideStack.js";
import Preloader from "./components/Preloader.jsx";
import SiteNav from "./components/SiteNav.jsx";
import Pager from "./components/Pager.jsx";
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import Process from "./components/Process.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Metrics from "./components/Metrics.jsx";
import StackSection from "./components/StackSection.jsx";
import Education from "./components/Education.jsx";
import ContactFooter from "./components/ContactFooter.jsx";

export default function App() {
  useAdaptiveGrid();
  const lenisRef = useLenis();
  const { slides, active } = useSlideStack();

  return (
    <>
      <Preloader lenisRef={lenisRef} />
      <SiteNav />
      <Pager slides={slides} active={active} />
      <main className="deck">
        <Hero />
        <Profile />
        <Process />
        <Experience />
        <Projects />
        <Metrics />
        <StackSection />
        <Education />
        <ContactFooter />
      </main>
    </>
  );
}
