import { fetchOneBlog } from "../../../../sanity/utils/fetchOneBlog";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { post: string };
};

async function Post({ params }: Props) {
  const slug = params.post;

  const post = await fetchOneBlog(slug);

  if (!post) {
    return <div>Error al obtener el blog</div>;
  }

  return (
    <div className="mt-6 p-6 md:p-8 lg:p-12 max-w-screen-md mx-auto bg-white shadow-md rounded-lg border border-gray-200">
      <header className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-2 leading-tight text-gray-900">
          {post.name}
        </h1>
        <Link
          href={post.url}
          target="_blank"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Ver
        </Link>
      </header>
      {post && post.image && (
        <Image
          src={post.image}
          alt={post.name}
          width={500}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
          priority={true}
        />
      )}

      <div className="mt-6 prose prose-slate prose-invert">
        {post && <PortableText value={post.content} />}
      </div>
    </div>
  );
}

export default Post;
