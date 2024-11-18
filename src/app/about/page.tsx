import BlogPostCard from "@/components/blog-post-card";
import Timeline from "@/components/timeline";
import { getAllPosts } from "@/lib/fetch-mdx";

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <>
      <section className="flex flex-col align-middle items-start my-10">
        <h2 className="text-2xl font-bold mb-5">Work Experience</h2>
        <Timeline experiences={experiences} />
      </section>

      <section className="flex flex-col align-middle mb-10">
        <h2 className="text-2xl font-bold mb-2">{`🌟 Skills & Technologies`}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {skills.map((text, index) => (
            <li key={index}>
              <p className="leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

const experiences = [
  {
    duration: "2024 - Present",
    company: "HKUST, CASTLE Lab",
    position: "Undergraduate Research Assistant",
    description:
      "Developed a Python-based Github scraper, collected Java abstract syntax trees, and enhanced assertion generation precision by 33%.",
  },
  {
    duration: "Apr. 2024 - Sep. 2024",
    company: "Stellerus Technology",
    position: "Software Engineering Intern",
    description:
      "Developed backend services for real-time geospatial data, optimized geometry calculations, and designed a Redis-based distributed caching system.",
  },
  {
    duration: "Oct. 2022 - Jul. 2023",
    company: "HKUST, HCI Initiative Lab",
    position: "Full-Stack Research Assistant",
    description:
      "Led front-end development of a robot trajectory feedback system, integrated React.js with Python Flask backend, and co-authored papers published in IUI and AAAI.",
  },
];

const skills = [
  "💻 Programming Languages: C/C++, Python, Java, C#, Javascript/Typescript, HTML/CSS, SQL",
  "⚙️ Frameworks: ASP.NET Core, Maven, FastAPI, Next.js, React.js, Node.js",
  "📊 Technologies: Linux, Git, Github, Azure, AWS, Docker",
  "🗃️ Databases: PostgreSQL, MongoDB, MySQL",
];
