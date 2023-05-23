import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import BlogCard from "./BlogCard";

async function getBlogsData() {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "ayushj19") {
          publication {
            posts(page: 0) {
              _id
              slug
              title
              brief
            }
          }
        }
      }
    `,
  });
  return data;
}

export const Blogs = async () => {
  const blogs = await getBlogsData();

  return (
    <div id="blogs" className="h-auto bg-zinc-700">
      <h1 className="mx-auto w-[50%] border-b-2 uppercase text-indigo-500 text-center text-3xl pt-14 pb-4 tracking-[0.25rem]">
        Blogs
      </h1>
      <BlogCard blogs={blogs} />
    </div>
  );
};
