import Image from "next/image";
import pfpLaptop from "@/../public/pfp-laptop.png";
import BlogPostCard from "@/components/blog-post-card";
import { getFirstNPosts } from "@/lib/fetch-mdx";

const text = `Hi, I'm <strong>Ujaan Das</strong>, 
a computer engineering student at the Hong Kong University of Science and Technology. 
I love building things and sharing my knowledge with others. 
Welcome to my personal website!`;

export default async function HomePage() {
  const blogPosts2 = await getFirstNPosts(3);
  console.log(`blogPosts2`, blogPosts2);

  return (
    <div>
      <section className="flex flex-col md:flex-row align-middle items-center mb-16">
        <Image src={pfpLaptop} width={200} height={200} alt="Profile picture" />
        <p className="text-lg md:ml-4 mt-10 text-center md:text-left">
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Mini Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts2.map((post, index) => (
            <BlogPostCard key={index} filename={post.file} {...post.metadata} />
          ))}
        </div>
      </section>
    </div>
  );
}
