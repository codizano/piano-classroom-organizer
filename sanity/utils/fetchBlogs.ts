import { Blog } from "../../types/Blog";
import { sanityClient } from "../config/sanityClient";
import { groq } from "next-sanity";
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
    return await sanityClient.fetch(getAllBlogPostsQuery);
  } catch (error) {
    console.error(
      "Error mientras se cargan las publicaciones del blog: ",
      error
    );
    throw error;
  }
}
