import Image from "next/image";
import { Socials } from "./Socials.js";

export const Hero = () => {
  return (
    <div className="mt-[52px] h-auto w-full">
      <div
        id="hero"
        className="text-stone-900 h-[90vh]  bg-[url('/mobilewave.svg')] sm:bg-[url('/wave4.svg')] w-full bg-no-repeat bg-center bg-cover"
      >
        <section className="md:mx-20 text-gray-600 body-font">
          <div className="flex  px-5 pt-4 md:flex-row flex-col-reverse sm:flex-col-reverse items-center max-h-[92vh]">
            <div className="md:flex-grow flex-wrap md:w-1/2 lg:pr-24  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 mt-4 font-medium text-gray-900">
                Web Developer
                <Image
                  className="inline-block ml-2"
                  alt="smile"
                  src="/smile.gif"
                  height={40}
                  width={40}
                />
              </h1>
              <p className="mb-6 ">
                Hi, I'm Ayush jain. An aspiring Full Stack developer based in
                Jaipur, Rajasthan!
              </p>
              <Socials color={"text-slate-950"} />
              <div className="mb-[20px]">
                <button className="inline-flex text-white shadow-slate-700 shadow-lg bg-slate-800 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-900 rounded text-lg">
                  <a href="/memoji.svg" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
            <div className="md:p-10 text-center">
              <img
                className="object-cover mt-2 h-[250px] md:h-full object-center rounded-[500px] "
                alt="hero"
                src="/memoji.svg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
