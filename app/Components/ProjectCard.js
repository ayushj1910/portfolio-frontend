"use client";
const api_url = "http://localhost:1337";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../globals.css";

// async function getProjectsData() {
//   const res = await fetch("http://localhost:1337/api/projects?populate=*", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function ProjectCard(props) {
  // const projects = await getProjectsData();
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      observer={true}
      observeParents={true}
      modules={[Pagination, Navigation, Scrollbar]}
      scrollbar={{ draggable: true }}
      className="mySwiper h-[100%] w-[100%]"
    >
      {props.projects.data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <section className="text-gray-600 body-font">
              <div className="container px-3 py-12 mx-auto">
                <div className="flex justify-center flex-wrap m-2">
                  <div className="p-4 mx-[8px] md:w-[50%]">
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
  );
}
