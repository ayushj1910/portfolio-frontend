export default function Footer() {
  return (
    <div className="h-auto bg-black md:mb-0 mb-[60px]">
      <div className="flex flex-wrap flex-col md:flex-row justify-center sm:justify-between container py-10 px-10 mx-auto">
        <p className="text-gray-500 mb-[10px] md:mb-0 text-center">
          Copyright © {new Date().getFullYear()}. All rights reserved
        </p>
        <p className="text-center text-gray-500">
          Coded with ❤️ by{" "}
          <a className="text-white" href="www.linkedin.com/in/ayushj19">
            Ayush
          </a>
        </p>
      </div>
    </div>
  );
}
