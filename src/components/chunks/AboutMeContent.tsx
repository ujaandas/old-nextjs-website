import { fetchMdxByCategory } from "@/lib/data-fetcher";
import PlainText from "../mdx/PlainText";

async function AboutMeContent() {
  const aboutMeData = await fetchMdxByCategory("aboutMe");
  return <PlainText content={aboutMeData[0].content} />;
}

export default AboutMeContent;
