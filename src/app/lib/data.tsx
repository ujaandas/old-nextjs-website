import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

const readFile = async (path: string) => {
  const post = await fs.readFile(path, "utf-8");
  return <MDXRemote source={post} />;
};

export const fetchPosts = async () => {
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
