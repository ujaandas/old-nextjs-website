import BlogPostCard from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/fetch-mdx";

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <section className="flex flex-col align-middle items-start mb-16">
      <h2 className="text-2xl font-bold mb-3">All Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} filename={post.file} {...post.metadata} />
        ))}
      </div>
    </section>
  );
}
