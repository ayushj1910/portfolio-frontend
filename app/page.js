import { About } from "@/app/Components/About/About";
import { Hero } from "./Components/Home/Hero";
import Projects from "./Components/Projects/Projects";
import { Blogs } from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
}
