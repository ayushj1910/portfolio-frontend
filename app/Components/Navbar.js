"use client";

import Image from "next/image";
import Link from "next/link";
import { navinfo } from "@/data/navinfo";

export const Navbar = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    elem?.scroll;
  };
  return (
    <>
      {/* Desktop navbar starts here */}
      {/* bg-slate-800 */}
      <header className="fixed top-0 z-30 w-full text-stone-50  bg-indigo-900 shadow-3d">
        <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:mb-0 cursor-pointer">
            <span className="ml-3 text-xl">Ayush // Portfolio</span>
          </a>
          <nav className="md:ml-auto hidden md:block flex-wrap items-center text-base justify-center">
            {navinfo.desktopNavLinks.map((navlink) => {
              return (
                <Link
                  key={navlink.link}
                  href={navlink.link}
                  onClick={handleScroll}
                  className="mr-5 hover:text-gray-300 cursor-pointer"
                >
                  {navlink.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Desktop navbar ends here*/}

      {/* ***** */}

      {/* Mobile navbar starts here */}

      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-20 px-4 bg-slate-800 sm:px-8">
        <div className="flex w-full justify-between items-center text-stone-50">
          {navinfo.mobileNavLinks.map((navlink) => {
            return (
              <Link
                key={navlink.alt}
                href={navlink.link}
                onClick={handleScroll}
                className="p-5 cursor-pointer decoration-transparent"
              >
                <Image
                  src={navlink.imgsrc}
                  width={40}
                  height={40}
                  alt={navlink.alt}
                  className="hover:none"
                />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile navbar ends here */}
    </>
  );
};
