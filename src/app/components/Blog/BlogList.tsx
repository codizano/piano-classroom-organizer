import { fetchBlogs } from "../../../../sanity/utils/fetchBlogs";

export const revalidate = 60;

async function BlogList() {
  const blogs = await fetchBlogs();

  if (blogs.length === 0) {
    return <div>Error al obtener los blogs</div>;
  }

  return (
    <div>
      {blogs.map((post) => (
        <div key={post._id}>
          <h2>{post.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
