import { fetchMdxByCategory } from "@/lib/data-fetcher";
import PlainText from "../mdx/PlainText";

async function AboutMeContent() {
  const aboutMeData = await fetchMdxByCategory("aboutMe");
  return (
    <div>
      <PlainText content={aboutMeData[0].content} />
    </div>
  );
}

export default AboutMeContent;
