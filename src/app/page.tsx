import Sidebar from "@/components/Sidebar";
import SectionScroller from "@/components/SectionScroller";
import { fetchAllPostContent } from "./lib/posts";
import QuickInfo from "@/components/chunks/QuickInfo";
import AboutMeContent from "@/components/chunks/AboutMeContent";

export default async function Home() {
  const postData = await fetchAllPostContent();
  // console.log(postData.flatMap((category) => category.posts));

  return (
    // <main className="flex flex-row max-w-3xl bg-cat-latte-base h-dvh justify-center text-cat-latte-text">
    //   <div className="flex h-full bg-cat-latte-base">
    //     <SectionScroller data={postData} />
    //   </div>
    // </main>
    <main className="flex flex-col md:flex-row p-10 items-center justify-center text-cat-latte-subtext-0">
      <section className="flex flex-col md:flex-row items-center max-w-3xl justify-center align-bottom">
        <QuickInfo />
        <AboutMeContent />
      </section>
    </main>
  );
}
