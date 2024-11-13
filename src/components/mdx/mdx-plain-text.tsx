import { MDXRemote } from "next-mdx-remote/rsc";

interface PlainTextProps {
  content: string;
}

async function PlainText({ content }: PlainTextProps) {
  return (
    <article className="prose prose-mg md:ml-10 mt-10 dark:text-cat-mocha-subtext-1 text-cat-latte-subtext-1 dark:[&_a]:text-cat-mocha-sapphire [&_a]:text-cat-latte-sapphire">
      <MDXRemote source={content} />
    </article>
  );
}

export default PlainText;
