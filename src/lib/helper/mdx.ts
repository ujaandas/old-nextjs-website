import { GrayMatterData } from "@/components/Post";
import matter, { GrayMatterFile } from "gray-matter";

export const matterizeFile = async (file: string) => {
  return matter(file);
}

export const readGrayMatter = async (post: GrayMatterFile<string>) => {
  return {
    metadata: post.data as GrayMatterData,
    content: post.content
  }
};
