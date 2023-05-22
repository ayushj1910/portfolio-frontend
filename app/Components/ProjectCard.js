const api_url = "http://localhost:1337";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../globals.css";

// import required modules

import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

async function getProjectsData() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProjectCard(props) {
  const projects = await getProjectsData();
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        className="mySwiper h-[100%] w-[100%]"
      >
        {projects.data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-12 mx-auto">
                  <div className="flex justify-center flex-wrap m-2">
                    <div className="p-4 mx-[8px]">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-3d">
                        <img
                          className="md:h-72 w-full object-fill object-center"
                          height={600}
                          width={700}
                          src={
                            api_url +
                            item.attributes.Screenshot.data.attributes.url
                          }
                          alt={item.attributes.Name}
                        />
                        <div className="p-6 bg-[url('/aboutbg.svg')] bg-fixed">
                          <h1 className="title-font text-lg font-medium text-white mb-3">
                            {item.attributes.Name}
                          </h1>
                          <p className="leading-relaxed text-slate-300 mb-3">
                            {item.attributes.Description}
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a
                              href={item.attributes.Demo}
                              className="text-white bg-black inline-flex border-2 p-2 items-center rounded-md shadow-3d"
                            >
                              Demo
                              <span className="ml-2 mb-[2px] p-1">
                                <BsBoxArrowUpRight />
                              </span>
                            </a>
                            <a
                              href={item.attributes.Github}
                              target="_blank"
                              className="text-white  bg-black ml-2 border-2 p-2 inline-flex items-center rounded-md shadow-3d"
                            >
                              Github
                              <span className="ml-2 p-1">
                                <BsGithub />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
