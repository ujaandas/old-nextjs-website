import Post from "@/components/mdx/mdx-post";
import { getAllPosts, getPostBySlug } from "@/lib/fetch-mdx";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.file.replace(/\.mdx$/, "") }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Post content={post.content} metadata={post.metadata} />
    </div>
  );
}
