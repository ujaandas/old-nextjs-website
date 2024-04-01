import AboutMe from "@/components/AboutMe";
import SectionSelector from "@/components/SectionSelector";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Home() {
  const readFile = async (path: string) => {
    const post = await fs.readFile(path, "utf-8");
    return <MDXRemote source={post} />;
  };

  const fetchPosts = async () => {
    const dirs = await fs.readdir("./public/data/posts");
    const categories = await Promise.all(
      dirs.map(async (category) => {
        const files = await fs.readdir(`./public/data/posts/${category}`);
        return { category, files };
      })
    );

    return await Promise.all(
      categories.map(async (category) => {
        const posts = await Promise.all(
          category.files.map(async (file) => {
            const post = await readFile(
              `./public/data/posts/${category.category}/${file}`
            );
            return post;
          })
        );
        return { category: category.category, posts };
      })
    );
  };

  const postData = await fetchPosts();
  // console.log(postData.flatMap((category) => category.posts));

  return (
    <main className="flex flex-row bg-green-400 min-h-screen items-center p-12">
      <div className="flex basis-1/3 bg-red-400">
        <AboutMe />
      </div>
      <div className="flex basis-2/3 bg-blue-400">
        <SectionSelector data={postData} />
      </div>
    </main>
  );
}
