import Image from "next/image";
import pfpLaptop from "@/../public/pfp-laptop.png";
import BlogPostCard from "@/components/blog-post-card";
import { getFirstNPosts } from "@/lib/fetch-mdx";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import IconCarousel from "@/components/icon-carousel";

export default async function HomePage() {
  const blogPosts2 = await getFirstNPosts(3);

  return (
    <>
      <section className="flex flex-col align-middle items-center mb-10">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={pfpLaptop}
            width={200}
            height={200}
            alt="Profile picture"
          />
          <div className="flex flex-col md:ml-4 mt-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">{`Hey 👋, I'm Ujaan!`}</h1>
            <p className="text-lg">
              <span dangerouslySetInnerHTML={{ __html: introText }} />
            </p>
            <div className="flex flex-row mt-4 align-middle items-center justify-center md:justify-start">
              <LinkIcon href="./UjaanDasResume.pdf">
                <div className="flex flex-row border-2 rounded-sm p-2 border-gray-300  [&:hover]:border-gray-400 transition-colors">
                  <span className="mr-2">Resume</span>
                  <FaFileDownload size={23} />
                </div>
              </LinkIcon>
              <LinkIcon href="https://github.com/ujaandas">
                <FaGithub size={24} className="ml-3 mr-3" />
              </LinkIcon>
              <LinkIcon href="https://linkedin.com/in/ujaandas">
                <FaLinkedin size={24} className="mr-3" />
              </LinkIcon>
              <LinkIcon href="https://instagram.com/ujaa_das">
                <FaInstagram size={24} />
              </LinkIcon>
            </div>
          </div>
        </div>
        <IconCarousel />
      </section>

      <section className="flex flex-col align-middle mb-10">
        <h2 className="text-2xl font-bold mb-2">{`⏰ Currently I'm...`}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {currently.map((text, index) => (
            <li key={index}>
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="leading-relaxed"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col align-middle mb-10">
        <div className="flex flex-row align-middle items-center mb-5 justify-between">
          <h2 className="text-2xl font-bold">{`📽️ Featured Projects`}</h2>
          <LinkIcon href="/projects" newTab={false}>
            <span className="mr-2">{`View More...`}</span>
          </LinkIcon>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts2.map((post, index) => (
            <BlogPostCard key={index} filename={post.file} {...post.metadata} />
          ))}
        </div>
      </section>

      <section className="flex flex-col align-middle mb-10">
        <div className="flex flex-row align-middle items-center mb-5 justify-between">
          <h2 className="text-2xl font-bold">{`📬 Featured Posts`}</h2>
          <LinkIcon href="/blog" newTab={false}>
            <span className="mr-2">{`View More...`}</span>
          </LinkIcon>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts2.map((post, index) => (
            <BlogPostCard key={index} filename={post.file} {...post.metadata} />
          ))}
        </div>
      </section>
    </>
  );
}

function LinkIcon({
  href,
  children,
  className,
  newTab = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`text-gray-500 [&:hover]:text-gray-800 transition-colors cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

const introText = `I'm a computer engineering student at the
Hong Kong University of Science and Technology. 
I love building things and sharing my knowledge with others. 
Welcome to my personal website!`;

const currently = [
  "<strong> 🤖 Working on my Final Year Project </strong> - We're developing a person-specific following robot that uses UWB, CV and SLAM to navigate complex environments.",
  "<strong> 🔬 Researching large-scale assertion generation in Java </strong> - I'm working under Prof. SC Cheung at HKUST to explore the efficacy of different LLMs in testcase generation.",
  "<strong> ⌨️ Building my own personal keyboard </strong> - Built on the STM32, I'm working on a column-staggered, ZMK-compatible ergonomic split keyboard.",
];
