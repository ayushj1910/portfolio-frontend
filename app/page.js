import { About } from "@/app/Components/About/About";
import { Hero } from "./Components/Home/Hero";
import Projects from "./Components/Projects/Projects";
import { Blogs } from "./Components/Blogs/Blogs";

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
