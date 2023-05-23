import Image from "next/image";
import Techstack from "./Techstack";

export async function About(props) {
  return (
    <>
      <div id="about" className="sm:pt-[40px] pb-4 md:pt-1 h-auto bg-[#0F172A]">
        <Techstack />
        {/* bg-[url('/aboutbg.svg')] */}
        <div className="flex md:mx-10 flex-wrap   bg-fixed  sm:flex-row flex-col p-2 m-3 my-10 text-center rounded-md">
          <div className=" bg-red p-2 my-auto sm:w-1/2">
            <div className="inline-flex justify-center bg-black h-[400] text-center rounded-2xl">
              <Image
                className=" my-auto h-[300px] w-[300px] shadow-[-14px_9px_14px_0px_rgba(15,23,42,1)] rounded-2xl"
                src="/aboutmemo.gif"
                alt="memoji"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="h-full sm:text-left p-10 lg:pr-36 sm:w-1/2 text-white mt-6">
            <h2 className="tracking-wide border-b-2 pb-2 text-indigo-500">
              ABOUT ME
            </h2>

            <p className="mt-6 font-[400] leading-7 mx-auto">
              Hi there! I'm Ayush (he/him), a full-stack developer based out of
              India. I'm self-taught, always keen to make dynamic & functional
              websites for you or your business! Drop a hello & let's build a
              fantastic website for you! ✌️
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
