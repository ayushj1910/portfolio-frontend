import ProjectCard from "./ProjectCard";
import { cache } from "react";

async function getProjectsData() {
  const res = await fetch(`${process.env.DB_LINK}/api/projects?populate=*`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const Projects = async () => {
  const projects = await getProjectsData();

  return (
    <div id="projects" className="h-auto bg-[#0F172A]">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Projects
      </h1>
      <ProjectCard projects={projects} />
    </div>
  );
};
