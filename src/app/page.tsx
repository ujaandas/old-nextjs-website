import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-row bg-green-400 min-h-screen items-center p-12">
      <div className="flex basis-1/3 bg-red-400">
        <AboutMe />
      </div>
      <div className="flex basis-2/3 bg-blue-400">
        <div>SectionSelector</div>
      </div>
    </main>
  );
}
