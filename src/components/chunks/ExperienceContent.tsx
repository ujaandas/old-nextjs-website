import { fetchMdxByCategory } from "@/lib/data-fetcher";
import Post from "../mdx/Post";
import Title from "../Title";
import PostTimeline from "../PostTimeline";

async function ExperienceContent() {
  const experienceContent = (await fetchMdxByCategory("experience")).reverse();
  return (
    <div className="">
      <Title title="Experience" />
      <PostTimeline posts={experienceContent} />
    </div>
  );
}

export default ExperienceContent;
