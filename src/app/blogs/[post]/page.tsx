import { fetchOneBlog } from "../../../../sanity/utils/fetchOneBlog";
import Image from "next/image";

type Props = {
  params: { post: string };
};

async function Post({ params }: Props) {
  const slug = params.post;
  const post = await fetchOneBlog(slug);

  return (
    <div>
      <header>
        <h1>{post.name}</h1>
        <a>{post.url}</a>
      </header>
      <Image src={post.image} alt={post.name} width={500} height={500} />
    </div>
  );
}

export default Post;
