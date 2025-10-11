import { AboutMe } from "./components/AboutMe";
import { Introduction } from "./components/Introduction";
import {Footer} from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsCarousel } from "./components/ProjectsCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <AboutMe />
      <ProjectsCarousel />
      <Footer/>
    </div>
  );
}
