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
    <div className="flex flex-col mb-5 p-5 rounded-lg bg-cat-latte-crust text-cat-latte-subtext-0 max-w-xl">
      <div className="flex flex-row align-bottom items-baseline justify-between">
        <div>
          <h1 className="font-bold text-2xl text-cat-latte-text">
            {data.title}
          </h1>
          <h2 className="font-semibold text-cat-latte-subtext-0">
            {data.subtitle}
          </h2>
        </div>
        <div className="hidden md:flex md:flex-col">
          <h3 className="text-sm text-cat-latte-subtext-0">{data.date}</h3>
          <h3 className="text-sm text-cat-latte-subtext-1">{data.location}</h3>
        </div>
      </div>

      <article className="prose prose-sm mt-3">
        <MDXRemote source={content} />
      </article>

      <div className="flex flex-col md:hidden mt-3">
        <h3 className="text-sm text-cat-latte-subtext-1">{data.date}</h3>
        <h3 className="text-sm text-cat-latte-subtext-1">{data.location}</h3>
      </div>
    </div>
  );
}
