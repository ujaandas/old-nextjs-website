import { MDXRemote } from "next-mdx-remote/rsc";

interface PlainTextProps {
  content: string;
}

async function PlainText({ content }: PlainTextProps) {
  return (
    <article className="prose prose-mg md:ml-10 mt-10 text-cat-mocha-subtext-1 [&_a]:text-cat-mocha-sapphire">
      <MDXRemote source={content} />
    </article>
  );
}

export default PlainText;
