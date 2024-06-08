import Post, { GrayMatterData } from "@/components/Post";
import { promises as fs } from "fs";
import matter, { GrayMatterFile } from "gray-matter";

export const matterizeFile = async (path: string) => {
  const file = await fs.readFile(path, "utf-8").then((post) => matter(post));
  return file;
};

export const matterToComponent = async (post: GrayMatterFile<string>) => {
  // console.log(`Reading file at: ${path}`);
  return <Post content={post.content} data={post.data as GrayMatterData} />;
};
