import Image from "next/image";
import { fetchBlogs } from "../../../../sanity/utils/fetchBlogs";
import Link from "next/link";

async function BlogList() {
  const blogs = await fetchBlogs();

  if (blogs.length === 0) {
    return <div>Error al obtener los blogs</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-bold text-center">
        Hola soy{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-600">
          Rick
        </span>
        !
      </h1>
      <p className="mt-8 text-gray-600 text-4xl">
        Hola a todos, Bienvenidos a mi blog!
      </p>
      <h2 className="my-6 text-3xl text-gray-700">Mis publicaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {blogs.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post._id}
            className="p-4 shadow-lg"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.name}
                width={750}
                height={300}
                priority={true}
                className="mx-auto object-cover transtion duration-700 rounded-lg hover:skew-x-2 hover:scale-105"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              {post.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
