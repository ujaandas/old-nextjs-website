import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export interface GrayMatterData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  tags: string[];
  slug: string;
}

interface PostProps {
  content: string;
  data: GrayMatterData;
}

export default function Post({ content, data }: PostProps) {
  return (
    <div className="flex flex-col mb-5 p-5 rounded-lg bg-cat-latte-crust text-cat-latte-subtext-0 ">
      <div className="grid grid-cols-2 grid-rows-2 align-bottom items-baseline justify-between">
        <h1 className="flex justify-start font-bold text-2xl text-cat-latte-text">
          {data.title}
        </h1>
        <h3 className="flex justify-end text-sm text-cat-latte-subtext-1">
          {data.date}
        </h3>
        <h2 className="flex justify-start font-semibold text-cat-latte-subtext-0">
          {data.subtitle}
        </h2>
        <h3 className="flex justify-end text-sm text-cat-latte-subtext-1">
          {data.location}
        </h3>
      </div>

      <article className="prose prose-sm w-max">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
