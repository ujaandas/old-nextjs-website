import fs from 'fs';
import path from "path";
import { matterizeFile, readGrayMatter } from "./helper/mdx";

const BASE_PATH = path.join(process.cwd(), "src/content");

const fetchMdx = async (dir: string) => {
  // console.log(`fetching mdx from ${dir}`);
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

const fetchCategories = async () => {
  // console.log(`fetching categories from ${BASE_PATH}`);
  return fs.readdirSync(BASE_PATH);
}

const readMdx = async (path: string) => {
  // console.log(`reading mdx from ${path}`);
  const raw = fs.readFileSync(path, 'utf-8');
  const matterized = await matterizeFile(raw);
  const { metadata, content } = await readGrayMatter(matterized);
  return { metadata, content };
}

export const fetchMdxByCategory = async (category: string) => {
  // console.log(`fetching category ${category}`);
  const files = await fetchMdx(path.join(BASE_PATH, category));
  return Promise.all(
    files.map(async (file) => {
      const { metadata, content } = await readMdx(path.join(BASE_PATH, category, file));
      return { metadata, content };
    }
  ));
}

export const fetchAllMdx = async () => {
  // console.log('fetching all mdx');
  const categories = await fetchCategories();
  const result: { [key: string]: { metadata: any, content: string }[] } = {};
  await Promise.all(
    categories.map(async (category) => {
      const files = await fetchMdxByCategory(category);
      result[category] = files;
    })
  );
  return result;
}

