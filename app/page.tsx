import { AboutMe } from "./components/AboutMe";
import { BodySection } from "./components/BodySection";
import {Footer} from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsCarousel } from "./components/ProjectsCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <BodySection />
      <AboutMe />
      <ProjectsCarousel />
      <Footer/>
    </div>
  );
}
