export default function BlogCard({ blogs }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.user.publication.posts.map((post) => {
            return (
              <div className="p-4  lg:w-1/3" key={post.id}>
                <div className="h-full shadow-3d bg-gray-100 bg-opacity-75 px-4 pt-6 pb-4 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{post.brief}</p>
                  <a
                    href={`https://ayushj.hashnode.dev/` + post.slug}
                    target="_blank"
                    className="text-indigo-500 inline-flex items-center cursor-pointer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
