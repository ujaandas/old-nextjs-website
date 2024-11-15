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
import Timeline from "@/components/timeline";

export default async function HomePage() {
  const blogPosts2 = await getFirstNPosts(3);

  return (
    <>
      <section className="flex flex-col md:flex-row align-middle items-center mb-16">
        <Image src={pfpLaptop} width={200} height={200} alt="Profile picture" />
        <div className="flex flex-col md:ml-4 mt-10 text-center md:text-left">
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
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-5">Work Experience</h2>
        <Timeline experiences={experiences} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-5">Featured Posts</h2>
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 [&:hover]:text-gray-800 transition-colors"
    >
      {children}
    </a>
  );
}

const introText = `Hi, I'm <strong>Ujaan Das</strong>, 
a computer engineering student at the Hong Kong University of Science and Technology. 
I love building things and sharing my knowledge with others. 
Welcome to my personal website!`;

const experiences = [
  {
    duration: "2020 - Present",
    company: "Tech Innovators Inc.",
    position: "Senior Software Engineer",
    description:
      "Led development of cutting-edge web applications using React and Node.js, improving user engagement by 40%.",
  },
  {
    duration: "2018 - 2020",
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    description:
      "Developed and maintained multiple client websites, utilizing a variety of modern web technologies and frameworks.",
  },
  {
    duration: "2016 - 2018",
    company: "StartUp Ventures",
    position: "Junior Developer",
    description:
      "Assisted in the creation of mobile-responsive designs and implemented new features for the companys main product.",
  },
];
