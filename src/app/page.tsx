import DynamicSidebar from "@/components/chunks/DynamicSidebar";
import AboutMeContent from "@/components/chunks/AboutMeContent";
import ExperienceContent from "@/components/chunks/ExperienceContent";
import ResearchContent from "@/components/chunks/ResearchContent";

export default async function Home() {
  return (
    <main className="flex flex-col p-10 text-cat-latte-subtext-1 items-center w-full max-w-2xl md:max-w-3xl justify-center m-auto">
      <section className="flex flex-col md:flex-row items-center">
        <DynamicSidebar />
        <AboutMeContent />
      </section>

      <section className="flex flex-col w-full">
        <ExperienceContent />
      </section>
      {/* <section className="flex flex-col w-full">
        <ResearchContent />
      </section> */}
    </main>
  );
}
