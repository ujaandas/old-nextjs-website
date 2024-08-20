import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";

async function ExperienceContent() {
  const experienceContent = await fetchMdxByCategory("experience");
  experienceContent.reverse();
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Experience</h1>
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
