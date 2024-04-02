import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

const readFile = async (path: string) => {
  const post = await fs.readFile(path, "utf-8");
  return <MDXRemote source={post} />;
};

const basePath = path.join(process.cwd(), "public/data/posts");

const readBasePath = async () => {
  const posts = await fs.readdir(basePath);
  const categories = await Promise.all(
    posts.map(async (category) => {
      const files = await fs.readdir(`${basePath}/${category}`);
      return { category, files };
    })
  );
  return categories;
};

export const fetchPosts = async () => {
  const categories = await readBasePath();

  return await Promise.all(
    categories.map(async (category) => {
      const posts = await Promise.all(
        category.files.map(async (file) => {
          const post = await readFile(
            `${basePath}/${category.category}/${file}`
          );
          return post;
        })
      );
      return { category: category.category, posts };
    })
  );
};

const sluggify = (text: string) => {
  return text
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/---/g, "")
    .match(/\#(.*)/g)![0]
    .replace(/\#/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "-")
    .replace(/^-/, "")
    .replace(/\d/, "")
    .toLowerCase();
};

export const fetchSlugs = async () => {
  const categories = await readBasePath();

  const messySlugs = await Promise.all(
    categories.map(async (category) => {
      const posts = await Promise.all(
        category.files.map(async (file) => {
          const post = await fs.readFile(
            `${basePath}/${category.category}/${file}`,
            "utf-8"
          );
          return post;
        })
      );
      return posts;
    })
  );

  const neatSlugs = messySlugs.map((category) => {
    return category.map((post) => {
      return sluggify(post);
    });
  });

  return neatSlugs;
};
