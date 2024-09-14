import DynamicSidebar from "@/components/chunks/DynamicSidebar";
import AboutMeContent from "@/components/chunks/AboutMeContent";
import ExperienceContent from "@/components/chunks/ExperienceContent";
import ResearchContent from "@/components/chunks/ResearchContent";
import ProjectContent from "@/components/chunks/ProjectContent";
import Chunk from "@/components/Chunk";

export default async function Home() {
  return (
    // <div className="bg-cat-mocha-mantle">
    <div className="bg-gradient-to-r dark:from-cat-mocha-crust from-cat-latte-base from-10% dark:to-cat-mocha-base to-cat-latte-mantle to-90% p-5">
      <main className="flex flex-col p-10 md:p-0 items-start w-full max-w-2xl md:max-w-3xl justify-center m-auto ">
        <Chunk className="md:flex-row mb-10">
          <DynamicSidebar />
          <AboutMeContent />
        </Chunk>
        <Chunk>
          <ExperienceContent />
        </Chunk>
        <Chunk>
          <ResearchContent />
        </Chunk>
      </main>
    </div>
  );
}
