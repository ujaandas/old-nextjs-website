import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";
import Title from "../Title";

async function ProjectContent() {
  const projectContent = await fetchMdxByCategory("projects");
  return (
    <div className="mt-10">
      <Title title="Projects" />
      {projectContent.map((content, index) => (
        <Post
          key={index}
          metadata={content.metadata}
          content={content.content}
        />
      ))}
    </div>
  );
}

export default ProjectContent;
