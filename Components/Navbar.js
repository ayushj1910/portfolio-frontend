import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      {/* Desktop navbar starts here */}
      <header className="fixed top-0 z-30 w-full text-stone-50 bg-slate-800">
        <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:mb-0 cursor-pointer">
            <span className="ml-3 text-xl">Ayush // Portfolio</span>
          </a>
          <nav className="md:ml-auto hidden md:block flex-wrap items-center text-base justify-center">
            <Link
              href="#hero"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              href="#blogs"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Blogs
            </Link>
            <Link
              href="#contact"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      {/* Desktop navbar ends here*/}
      {/* ***** */}
      {/* Mobile navbar starts here */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-20 px-4 bg-slate-800 sm:px-8">
        <div className="flex w-full justify-between items-center text-stone-50">
          <Link
            href="#hero"
            className="p-5 cursor-pointer decoration-transparent"
          >
            <Image
              src={"/homeicon.png"}
              width={40}
              height={40}
              alt="home-page"
              className="hover:none"
            />
          </Link>
          <Link href="#about" className="p-5 cursor-pointer">
            <Image
              src={"/infoicon.png"}
              width={40}
              height={40}
              alt="about-page"
              className="hover:none"
            />
          </Link>
          <Link href="#projects" className="p-5 cursor-pointer">
            <Image
              src={"/projecticon.png"}
              width={40}
              height={40}
              alt="project-page"
              className="hover:none"
            />
          </Link>
          <Link href="#blogs" className="p-5 cursor-pointer">
            <Image
              src={"/blogicon.png"}
              width={40}
              height={40}
              alt="blog-page"
              className="hover:none"
            />
          </Link>
          <Link href="#contact" className="p-5 cursor-pointer">
            <Image
              src={"/contacticon.png"}
              width={40}
              height={40}
              alt="contact-page"
              className="hover:none"
            />
          </Link>
        </div>
      </nav>
      {/* Mobile navbar ends here */}
    </>
  );
};
