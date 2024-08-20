import matter, { GrayMatterFile } from "gray-matter";
import { AboutMeMetadata, PostMetadata } from "../data-fetcher";

export const matterizeFile = async (file: string) => {
  return matter(file);
}

export const readGrayMatter = async (post: GrayMatterFile<string>) => {
  if (!post.data) {
    throw new Error('No metadata found in post');
  }
  return {
    metadata: post.data,
    content: post.content
  }
};
