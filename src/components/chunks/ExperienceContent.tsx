import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";
import Title from "../Title";

async function ExperienceContent() {
  const experienceContent = await fetchMdxByCategory("experience");
  experienceContent.reverse();
  return (
    <div className="mt-10">
      <Title title="Experience" />
      {experienceContent.map((content, index) => (
        <Post
          key={index}
          metadata={content.metadata}
          content={content.content}
        />
      ))}
    </div>
  );
}

export default ExperienceContent;
