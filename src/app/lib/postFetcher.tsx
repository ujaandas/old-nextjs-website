import { promises as fs } from "fs";
import Post from "@/components/Post";
import path from "path";

const basePath = path.join(process.cwd(), "src/app/markdown");

export const renderPost = async (path: string) => {
  // console.log(`Reading file at: ${path}`);
  const post = await fs.readFile(path, "utf-8");
  return <Post data={post} />;
};

const fetchCurrBasePath = async () => {
  const posts = await fs.readdir(basePath);
  const categories = await Promise.all(
    posts.map(async (category) => {
      const files = await fs.readdir(`${basePath}/${category}`);
      return { category, files };
    })
  );
  return categories;
};

export const fetchAllPostContent = async () => {
  const categories = await fetchCurrBasePath();

  return await Promise.all(
    categories.map(async (category) => {
      const posts = await Promise.all(
        category.files.map(async (file) => {
          const post = await renderPost(
            `${basePath}/${category.category}/${file}`
          );
          return post;
        })
      );
      return { category: category.category, posts };
    })
  );
};

export const fetchAllPostPaths = async () => {
  const categories = await fetchCurrBasePath();

  return Promise.all(
    categories.map(async (category) => {
      const paths = await Promise.all(
        category.files.map(async (file) => {
          const pathToFile = `${basePath}/${category.category}/${file}`;
          return pathToFile;
        })
      );
      // console.log(`paths: ${paths}`);
      return paths;
    })
  ).then((paths) => paths.flat());
};
