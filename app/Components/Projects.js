"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../globals.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ProjectCard from "./ProjectCard";

import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export const Projects = () => {
  return (
    <div id="projects" className="h-auto bg-zinc-700">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Projects
      </h1>

      <ProjectCard />
    </div>
  );
};
