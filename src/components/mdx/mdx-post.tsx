import { MDXRemote } from "next-mdx-remote/rsc";
import Tags from "./mdx-tags";

interface PostProps {
  metadata: any;
  content: string;
  showDate?: boolean;
}

async function Post({ metadata, content, showDate }: PostProps) {
  return (
    <div className="flex flex-col w-full bg-trasparent py-5 rounded-md">
      <div className="flex flex-col align-baseline items-baseline dark:text-cat-mocha-subtext-1 text-cat-latte-subtext-1">
        <h2 className="text-xl font-semibold">{metadata.subtitle}</h2>
        <h2 className="text-md opacity-80">{metadata.title}</h2>
      </div>
      <article className="prose prose-mg my-3 dark:text-cat-mocha-overlay-2 text-cat-latte-overlay-2">
        <MDXRemote source={content} />
      </article>
      {showDate && (
        <h3 className="text-sm dark:text-cat-mocha-overlay-0 text-cat-latte-overlay-0">
          {metadata.date}
        </h3>
      )}
      {/* <Tags tags={metadata.tags} /> */}
    </div>
  );
}

export default Post;
