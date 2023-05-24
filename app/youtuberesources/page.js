import Link from "next/link";
export default function Youtube() {
  return (
    <div className="h-[100vh] bg-[#0F172A]">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Youtube Resources
      </h1>
      <Link href="/">Go Back</Link>
    </div>
  );
}
