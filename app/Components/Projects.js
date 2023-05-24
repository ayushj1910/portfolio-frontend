import ProjectCard from "./ProjectCard";

async function getProjectsData() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Projects() {
  const projects = await getProjectsData();

  return (
    <div id="projects" className="h-auto bg-[#0F172A]">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Projects
      </h1>
      <ProjectCard projects={projects} />
    </div>
  );
}
