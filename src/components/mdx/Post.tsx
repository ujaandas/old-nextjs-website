import { MDXRemote } from "next-mdx-remote/rsc";
import Tags from "./Tags";

interface PostProps {
  metadata: any;
  content: string;
}

async function Post({ metadata, content }: PostProps) {
  return (
    <div className="flex flex-col w-full bg-cat-latte-base p-5 my-5 rounded-md">
      <div className="flex flex-row align-baseline items-baseline">
        <h2 className="text-xl font-semibold">{metadata.subtitle}</h2>
        <h2 className="text-xl font-semibold mx-1">·</h2>
        <h2 className="text-lg">{metadata.title}</h2>
      </div>
      <article className="prose prose-mg max-w-xl my-3">
        <MDXRemote source={content} />
      </article>
      <h3 className="text-sm">{metadata.date}</h3>
      <Tags tags={metadata.tags} />
    </div>
  );
}

export default Post;
