import matter, { GrayMatterFile } from "gray-matter";

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
