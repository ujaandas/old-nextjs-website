import { MDXRemote } from "next-mdx-remote/rsc";

interface PlainTextProps {
  content: string;
}

async function PlainText({ content }: PlainTextProps) {
  return (
    <article className="prose prose-mg md:ml-10 mt-10">
      <MDXRemote source={content} />
    </article>
  );
}

export default PlainText;
