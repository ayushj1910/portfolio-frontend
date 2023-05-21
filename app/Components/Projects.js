"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../globals.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Projects = () => {
  return (
    <div id="projects" className="h-auto bg-zinc-700">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Projects
      </h1>
      <style jsx>
        {`
          .swiper-button-next {
            color: yellow;
          }
        `}
      </style>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        loop={true}
        className="mySwiper h-[100%] w-[100%]"
      >
        <SwiperSlide>
          <section className="text-gray-600 body-font">
            <div className="container px-3 py-12 mx-auto">
              <div className="flex justify-center flex-wrap m-2">
                <div className="p-4 mx-[8px]">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-72 h- md:h-64 w-full object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="text-gray-600 body-font">
            <div className="container px-3 py-12 mx-auto">
              <div className="flex justify-center flex-wrap m-2">
                <div className="p-4">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-72 h- md:h-64 w-full object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
