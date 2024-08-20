import matter, { GrayMatterFile } from "gray-matter";
import { GrayMatterData } from "../data-fetcher";

export const matterizeFile = async (file: string) => {
  return matter(file);
}

export const readGrayMatter = async (post: GrayMatterFile<string>) => {
  return {
    metadata: post.data as GrayMatterData,
    content: post.content
  }
};
