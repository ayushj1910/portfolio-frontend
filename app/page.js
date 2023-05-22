import { About } from "@/app/Components/About";
import { Hero } from "./Components/Hero";
import Projects from "./Components/Projects";
import { Blogs } from "./Components/Blogs";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blogs />
    </>
  );
}
