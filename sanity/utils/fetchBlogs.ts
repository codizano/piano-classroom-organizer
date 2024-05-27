import { Blog } from "../../types/Blog";
import { groq } from "next-sanity";
import { client } from "../../sanity/config/client";

const getAllBlogPostsQuery = groq`*[_type == "blog"]{
    _id, 
    name, 
    "slug": slug.current, 
    "image": image.asset->url, 
    url, 
    content, 
 }`;
export async function fetchBlogs(): Promise<Blog[]> {
  try {
    return await client.fetch(
      getAllBlogPostsQuery,
      {},
      { next: { revalidate: 60 } }
    );
  } catch (error) {
    console.error(
      "Error mientras se cargan las publicaciones del blog: ",
      error
    );
    throw error;
  }
}
