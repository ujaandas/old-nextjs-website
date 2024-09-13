import { fetchMdxByCategory } from "@/lib/data-fetcher";
import PlainText from "../mdx/PlainText";

async function AboutMeContent() {
  const aboutMeData = await fetchMdxByCategory("aboutMe");
  return (
    <div>
      {/* <h1 className="text-3xl font-bold -mb-7 mt-5 md:ml-10">About Me</h1> */}
      <PlainText content={aboutMeData[0].content} />
    </div>
  );
}

export default AboutMeContent;
