import Image from "next/image";
import pfpLaptop from "@/../public/pfp-laptop.png";
import BlogPostCard from "@/components/blog-post-card";
import { getFirstNPosts } from "@/lib/fetch-mdx";

// Sample blog post data
const blogPosts = [
  {
    title: "My Journey in Web Development",
    date: "2023-06-15",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Exploring the ups and downs of becoming a web developer, and the lessons learned along the way.",
    link: "/blog/web-dev-journey",
    tags: [
      { text: "WebDev", color: "blue" },
      { text: "Personal", color: "purple" },
    ],
  },
  {
    title: "The Future of AI in Design",
    date: "2023-06-01",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A deep dive into how artificial intelligence is shaping the future of design and creativity.",
    link: "/blog/ai-in-design",
    tags: [
      { text: "AI", color: "green" },
      { text: "Design", color: "purple" },
    ],
  },
  {
    title: "Mastering React Hooks",
    date: "2023-05-20",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A comprehensive guide to using React Hooks effectively in your projects.",
    link: "/blog/react-hooks-guide",
    tags: [
      { text: "React", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
];

const text = `Hi, I'm <strong>John Doe</strong>, a web developer based in New York
City. I love building things for the web and sharing my knowledge
with others. Welcome to my personal website!`;

export default async function HomePage() {
  const blogPosts2 = await getFirstNPosts(3);
  console.log(blogPosts2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto md:px-4 py-16 max-w-3xl">
        <section className="flex flex-col md:flex-row align-middle items-center mb-16">
          <Image
            src={pfpLaptop}
            width={200}
            height={200}
            alt="Profile picture"
          />
          <p className="text-lg md:ml-4 mt-10 text-center md:text-left">
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Mini Blog</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
