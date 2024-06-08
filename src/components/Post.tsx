import { MDXRemote } from "next-mdx-remote/rsc";

interface PostProps {
  data: string;
}

export default function Post({ data }: PostProps) {
  return (
    <article className="flex flex-col mb-5 p-5 rounded-lg bg-cat-latte-crust text-cat-latte-subtext-0">
      <div className="prose prose-sm">
        <MDXRemote source={data} />
      </div>
      <div className="flex flex-row justify-between">
        <div>date here</div>
        <div>tags here</div>
      </div>
    </article>
  );
}
