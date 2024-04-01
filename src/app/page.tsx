import AboutMe from "@/components/Sidebar";
import SectionSelector from "@/components/SectionSelector";
import { fetchPosts, fetchSlugs } from "./lib/data";

export default async function Home() {
  const postData = await fetchPosts();
  // console.log(postData.flatMap((category) => category.posts));

  return (
    <main className="flex flex-row bg-green-400 h-screen items-center p-12">
      <div className="flex basis-1/3 h-full bg-red-400">
        <AboutMe />
      </div>
      <div className="flex basis-2/3 h-full bg-blue-400">
        <SectionSelector data={postData} />
      </div>
    </main>
  );
}
