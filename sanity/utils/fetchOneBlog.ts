import { Blog } from "../../types/Blog";
import { client } from "../../sanity/config/client";
import { groq } from "next-sanity";

export const getOneBlogPostsQuery = groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`;

export async function fetchOneBlog(slug: string): Promise<Blog> {
  try {
    return await client.fetch(
      getOneBlogPostsQuery,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch (error) {
    console.error("Error mientras se carga la publicacion del blog: ", error);
    throw error;
  }
}
