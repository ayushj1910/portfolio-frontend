import { About } from "@/app/Components/About";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
// import { use } from "react";
// import axios, { Axios } from "axios";

export default async function Home() {
  // const res = await fetch("http://localhost:1337/api/skills?populate=*");
  // const data = await res.json();

  // // const data = await axios.get("http://localhost:1337/api/skills");

  // console.log(data);
  // console.log(hello);
  return (
    <>
      <Hero />

      <About />
      <Projects />
    </>
  );
}
// async function getData() {
//   let headers = {
//     Authorization:
//       "Bearer ce9735d3cc83490336565c246d1f906be7cd36e05875a9df74005f3877a61ad3897907fb25771d05e05b99a8f8bc66619f9ec85c5b1011ab00395f3ceec29719c1e06987a38f7209e2b2b5a6995053f88ac82f92fa5a5d2eba78fb6ce2881af50ac44d4315d3908034b367f9161accd604b47128a14e80f41ac0099a74a844f4",
//   };
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();

//   return data;
// }

// export async function getServerSideProps(context) {
//   let headers = {
//     Authorization:
//       "Bearer ce9735d3cc83490336565c246d1f906be7cd36e05875a9df74005f3877a61ad3897907fb25771d05e05b99a8f8bc66619f9ec85c5b1011ab00395f3ceec29719c1e06987a38f7209e2b2b5a6995053f88ac82f92fa5a5d2eba78fb6ce2881af50ac44d4315d3908034b367f9161accd604b47128a14e80f41ac0099a74a844f4",
//   };
//   let data = await fetch("http://localhost:1337/api/skills?populate=*", {
//     headers: headers,
//   });
//   let skills = await data.json();
//   console.log(skills);

//   return {
//     props: { skills: skills }, // will be passed to the page component as props
//   };
// }
