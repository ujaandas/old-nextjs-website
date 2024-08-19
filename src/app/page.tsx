import Sidebar from "@/components/Sidebar";
import SectionScroller from "@/components/SectionScroller";
import { fetchAllPostContent } from "./lib/posts";
import AboutMe from "@/components/chunks/AboutMe";

export default async function Home() {
  const postData = await fetchAllPostContent();
  // console.log(postData.flatMap((category) => category.posts));

  return (
    // <main className="flex flex-row max-w-3xl bg-cat-latte-base h-dvh justify-center text-cat-latte-text">
    //   <div className="flex h-full bg-cat-latte-base">
    //     <SectionScroller data={postData} />
    //   </div>
    // </main>
    <main className="flex flex-col md:flex-row justify-center text-cat-latte-subtext-0">
      <AboutMe />
    </main>
  );
}
