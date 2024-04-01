import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

const readFile = async (path: string) => {
  const post = await fs.readFile(path, "utf-8");
  return <MDXRemote source={post} />;
};

const readBasePath = async () => {
  const dirs = await fs.readdir("../../public/data/posts");
  const categories = await Promise.all(
    dirs.map(async (category) => {
      const files = await fs.readdir(`../../public/data/posts/${category}`);
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
            `../../public/data/posts/${category.category}/${file}`
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
            `../../public/data/posts/${category.category}/${file}`,
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
