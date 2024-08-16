import { promises as fs } from "fs";
import path from "path";
import { matterizeFile, matterToComponent } from "./mdx";
import { transformDateRange } from "./date";

const basePath = path.join(process.cwd(), "src/app/markdown");

const fetchCurrBasePath = async () => {
  const posts = await fs.readdir(basePath);
  const categories = await Promise.all(
    posts.map(async (category) => {
      const files = await fs.readdir(`${basePath}/${category}`);
      // Sort files based on date
      return { category, files };
    })
  );
  // console.log(categories);
  return categories;
};

export const fetchAllPostContent = async () => {
  const categories = await fetchCurrBasePath();

  return await Promise.all(
    categories.map(async (category) => {
      const posts = await Promise.all(
        category.files.map(async (file) => {
          const thisPost = await matterizeFile(
            `${basePath}/${category.category}/${file}`
          );
          const thisDate = transformDateRange(thisPost.data.date);
          const thisComponent = await matterToComponent(thisPost);
          return { ...thisComponent, date: thisDate };
        })
      );

      posts.sort((a, b) => b.date.start.getTime() - a.date.start.getTime());

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
      return paths;
    })
  ).then((paths) => paths.flat());
};
