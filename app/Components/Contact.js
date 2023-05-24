import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatSquareHeart } from "react-icons/bs";
import { Socials } from "./Socials.js";

export default function Contact() {
  return (
    <div id="contact" className="h-auto bg-[#0F172A]">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Contact
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <CiMail style={{ fontSize: "25px" }} />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                    Mail
                  </h2>
                  <p className="leading-relaxed">
                    <a href="mailto:ayushjain201474@gmail.com">
                      ayushjain201474@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaWhatsapp style={{ fontSize: "25px" }} />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                    WhatsApp
                  </h2>
                  <p className="leading-relaxed">
                    <a target="_blank" href="https://wa.me//+918302079321">
                      +91 8302079321
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center"></div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <BsChatSquareHeart
                    style={{ fontSize: "25px", marginTop: "4px" }}
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                    Socials
                  </h2>

                  <Socials />
                </div>
              </div>
            </div>
            <img
              className="lg:w-3/5 md:w-3/5 object-cover object-center rounded-lg md:mt-0 "
              src="/contact.svg"
              alt="step"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
