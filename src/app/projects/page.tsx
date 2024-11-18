import BlogPostCard from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/fetch-mdx";

export default async function ProjectsPage() {
  const blogPosts = await getAllPosts();

  return (
    <section className="flex flex-col align-middle items-start my-10">
      <h2 className="text-2xl font-bold mb-3">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} filename={post.file} {...post.metadata} />
        ))}
      </div>
    </section>
  );
}
