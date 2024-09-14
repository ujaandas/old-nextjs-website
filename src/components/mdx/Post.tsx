import { MDXRemote } from "next-mdx-remote/rsc";
import Tags from "./Tags";

interface PostProps {
  metadata: any;
  content: string;
}

async function Post({ metadata, content }: PostProps) {
  return (
    <div className="flex flex-col w-full bg-trasparent p-5 my-5 rounded-md">
      <div className="flex flex-col align-baseline items-baseline dark:text-cat-mocha-subtext-1 text-cat-latte-subtext-1">
        <h2 className="text-xl font-semibold">{metadata.subtitle}</h2>
        <h2 className="text-md opacity-80">{metadata.title}</h2>
      </div>
      <article className="prose prose-mg max-w-xl my-3 dark:text-cat-mocha-overlay-2 text-cat-latte-overlay-2 opacity-90">
        <MDXRemote source={content} />
      </article>
      <h3 className="text-sm dark:text-cat-mocha-overlay-0 text-cat-latte-overlay-0">
        {metadata.date}
      </h3>
      <Tags tags={metadata.tags} />
    </div>
  );
}

export default Post;
