import Image from "next/image";
import { Socials } from "./Socials.js";

export const Hero = () => {
  return (
    <div className=" mt-[52px] h-auto w-full ">
      <div
        id="hero"
        //bg-[url('/mobilewave.svg')] sm:bg-[url('/wave4.svg')]
        className=" text-stone-900 h-auto bg-[#EAEAEA] w-full bg-no-repeat bg-center bg-cover"
      >
        <section className="container mx-auto  text-gray-600 body-font h-auto">
          <div className="container mx-auto lg:px-20 flex px-5 pt-4 md:flex-row flex-col-reverse sm:flex-col-reverse items-center max-h-[92vh]">
            <div className="md:flex-grow flex-wrap md:w-1/2 lg:pr-24  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 mt-4 font-medium text-gray-900">
                Web Developer
                <Image
                  className="inline-block ml-2 "
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
                <button className="inline-flex  text-white shadow-slate-700 shadow-lg bg-slate-800 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-900 rounded text-lg">
                  <a href="/memoji.svg" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
            <div className="p-6 text-center ">
              <img
                className="flex object-cover sm:mt-0 h-[250px] md:h-full object-center rounded-[500px] shadow-3d"
                alt="hero"
                src="/memoji.svg"
              />
            </div>
          </div>
        </section>
        <div className=" h-[80px] sm:h-[300px] w-[100%] marker">
          <div className=" bg-[url('/waves2.svg')] bg-center bg-cover bg-no-repeat bottom-0 w-[100%] h-[100%] "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
