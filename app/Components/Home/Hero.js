import Image from "next/image";
import { Socials } from "../Socials.js";

async function getResume() {
  const res = await fetch("http://localhost:1337/api/resumes?populate=*", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Hero = async () => {
  const api_url = "http://localhost:1337";
  const resume = await getResume();

  return (
    <div className=" mt-[52px] h-auto w-full ">
      <div
        id="hero"
        className=" text-stone-900 h-auto bg-[#151418] bg-opacity-1 w-full bg-no-repeat bg-center bg-cover"
      >
        <section className="container mx-auto  text-gray-600 body-font h-auto">
          <div className="container mx-auto lg:px-20 flex px-5 pt-4 md:flex-row flex-col-reverse sm:flex-col-reverse items-center max-h-[92vh]">
            <div className="md:flex-grow flex-wrap md:w-1/2 lg:pr-24  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 mt-4 font-medium text-white">
                Web Developer
                <Image
                  className="inline-block ml-2 "
                  alt="smile"
                  src="/smile3.gif"
                  height={60}
                  width={40}
                />
              </h1>
              <p className="mb-6 text-gray-400">
                Hi, I'm Ayush jain. An aspiring Full Stack developer based in
                Jaipur, Rajasthan!
              </p>
              <Socials color={"text-slate-950"} />
              <div className="mb-[20px]">
                <button className="inline-flex  text-white shadow-slate-700 shadow-md border-0 py-2 px-3 focus:outline-none bg-indigo-900 rounded text-lg">
                  <a
                    href={
                      api_url +
                      resume.data[0].attributes.cvlink.data.attributes.url
                    }
                    target="_blank"
                    download
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
            <div className="p-6 text-center ">
              <img
                className="flex object-cover sm:mt-0 h-[250px] md:h-full object-center rounded-[500px] shadow-[-1px_9px_14px_0px_rgba(59,60,64,1)]"
                alt="hero"
                src="/memoji.svg"
              />
            </div>
          </div>
        </section>
        <div className=" h-[80px] sm:h-[300px] w-[100%] marker">
          <div className=" bg-[url('/bgwave1.svg')] bg-center bg-cover bg-no-repeat bottom-0 w-[100%] h-[100%] "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
