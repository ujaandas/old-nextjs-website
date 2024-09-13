import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";
import Title from "../Title";

async function ResearchContent() {
  const researchContent = await fetchMdxByCategory("research");
  return (
    <div className="mt-10">
      <Title title="Research" />
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
