import DynamicSidebar from "@/components/chunks/DynamicSidebar";
import AboutMeContent from "@/components/chunks/AboutMeContent";
import ExperienceContent from "@/components/chunks/ExperienceContent";
import ResearchContent from "@/components/chunks/ResearchContent";
import ProjectContent from "@/components/chunks/ProjectContent";

export default async function Home() {
  return (
    // <div className="bg-cat-mocha-mantle">
    <div className="bg-gradient-to-r from-cat-mocha-crust from-10% to-cat-mocha-base to-90%">
      <main className="flex flex-col p-10 snap-mandatory overflow-hidden items-center w-full max-w-2xl md:max-w-3xl justify-center m-auto ">
        <section className="flex flex-col md:flex-row items-center">
          <DynamicSidebar />
          <AboutMeContent />
        </section>
        <section className="flex flex-col snap-start shrink-0 w-full">
          <ExperienceContent />
        </section>
        <section className="flex flex-col snap-start shrink-0 w-full">
          <ResearchContent />
        </section>
        {/* <section className="flex flex-col snap-start shrink-0 w-full">
          <ProjectContent />
        </section> */}
      </main>
    </div>
  );
}
