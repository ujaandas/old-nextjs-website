import AboutMe from "@/components/Sidebar";
import SectionSelector from "@/components/SectionSelector";
import { fetchAllPostContent } from "./lib/postFetcher";

export default async function Home() {
  const postData = await fetchAllPostContent();
  // console.log(postData.flatMap((category) => category.posts));

  return (
    <main className="flex flex-row bg-cat-latte-base h-screen items-center text-cat-latte-text">
      <div className="flex basis-1/4 h-full bg-cat-latte-mantle rounded-l p-8">
        <AboutMe />
      </div>
      <div className="flex basis-3/4 h-full bg-cat-latte-base rounded-r pt-2">
        <SectionSelector data={postData} />
      </div>
    </main>
  );
}
