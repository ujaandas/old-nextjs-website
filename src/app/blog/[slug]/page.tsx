import Post from "@/components/mdx/mdx-post";
import { fetchAllMdx, getPostBySlug, MdxFile } from "@/lib/fetch-mdx";

interface BlogPostProps {
  post: MdxFile | null;
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await fetchAllMdx();
  return posts.map((post) => ({ slug: post.file.replace(/\.mdx$/, "") }));
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Post content={post.content} metadata={post.metadata} />
    </div>
  );
};
export default BlogPost;
