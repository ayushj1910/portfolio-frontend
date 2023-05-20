import Image from "next/image";
import Techstack from "./Techstack";

export async function About(props) {
  return (
    <>
      <div id="about" className="sm:pt-[40px] pb-4 md:pt-1 h-auto bg-zinc-700 ">
        <Techstack />
        <div className="flex md:mx-10 flex-wrap  bg-[url('/aboutbg.svg')] bg-fixed shadow-[-6px_13px_12px_0px_rgba(0,0,0,0.75)] sm:flex-row flex-col p-2 m-3 my-10 text-center rounded-md">
          <div className=" bg-red p-2 my-auto sm:w-1/2">
            <div className="flex justify-center rounded-[50%] h-[400] text-center">
              <img
                className="rounded-[50%] my-auto h-[300px] w-[300px] shadow-[-6px_13px_12px_0px_rgba(0,0,0,0.75)]"
                src="/memoji4.gif"
                alt="memoji"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="bg-red h-full sm:text-left p-10 sm:w-1/2 text-white mb-6">
            <h2 className="tracking-wide border-b-2 pb-2">ABOUT ME</h2>
            <p className="mt-6 font-[400]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to mfake a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
