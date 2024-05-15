import { PortableTextBlock } from "next-sanity";
import { Slug } from "sanity";
export type Blog = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: Slug;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
