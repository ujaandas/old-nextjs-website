import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";

async function ResearchContent() {
  const researchContent = await fetchMdxByCategory("research");
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Research</h1>
      {researchContent.map((content, index) => (
        <Post
          key={index}
          metadata={content.metadata}
          content={content.content}
        />
      ))}
    </div>
  );
}

export default ResearchContent;
