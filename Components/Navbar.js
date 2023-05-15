export const Navbar = () => {
  return (
    <>
      {/* Desktop navbar starts here */}
      <header className="fixed top-0 z-30 w-full text-white bg-slate-700">
        <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:mb-0 cursor-pointer">
            <span className="ml-3 text-xl">Ayush // Portfolio</span>
          </a>
          <nav className="md:ml-auto hidden md:block flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Projects</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Blogs</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
          </nav>
        </div>
      </header>
      {/* Desktop navbar ends here*/}
      {/* ***** */}
      {/* Mobile navbar starts here */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 bg-slate-800 sm:px-8">
        <div className="flex w-full justify-between items-center">
          <a className=" p-5 hover:text-gray-900 cursor-pointer">H</a>
          <a className=" p-5 hover:text-gray-900 cursor-pointer">A</a>
          <a className=" p-5 hover:text-gray-900 cursor-pointer">P</a>
          <a className=" p-5 hover:text-gray-900 cursor-pointer">B</a>
          <a className=" p-5 hover:text-gray-900 cursor-pointer">C</a>
        </div>
      </nav>
      {/* Mobile navbar ends here */}
    </>
  );
};
