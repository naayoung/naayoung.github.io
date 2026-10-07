import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkStyle from "./components/WorkStyle";
import ProfessionalProjects from "./components/ProfessionalProjects";
import TechStack from "./components/TechStack";
import PersonalProjects from "./components/PersonalProjects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <WorkStyle />
        <ProfessionalProjects />
        <TechStack />
        <PersonalProjects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
