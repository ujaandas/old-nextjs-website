import fs from "fs";
import path from "path";
import { matterizeFile, readGrayMatter } from "./helper/mdx";
import { parseDate } from "./date";

const BASE_PATH = path.join(process.cwd(), "/blog");

interface Metadata {
  date: string;
  [key: string]: any;
}

interface MdxFile {
  file: string;
  metadata: Metadata;
  content: string;
}

interface GrayMatterResult {
  metadata: Record<string, any>;
  content: string;
}

const fetchMdx = async (dir: string): Promise<string[]> => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

// Update readMdx to validate the date format
const readMdx = async (
  filePath: string
): Promise<{ metadata: Metadata; content: string }> => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const matterized = await matterizeFile(raw);
  const { metadata, content } = (await readGrayMatter(
    matterized
  )) as GrayMatterResult;

  if (!metadata.date) {
    throw new Error(
      `Metadata for file ${filePath} is missing required 'date' field.`
    );
  }

  try {
    // Validate date format by attempting to parse it
    parseDate(metadata.date);
  } catch (error) {
    throw new Error(
      `Invalid date in file ${filePath}: ${(error as Error).message}`
    );
  }

  const typedMetadata: Metadata = {
    date: metadata.date,
    ...metadata,
  };

  return { metadata: typedMetadata, content };
};

// Update fetchAllMdx to sort the posts by date
export const fetchAllMdx = async (): Promise<MdxFile[]> => {
  const mdxFiles = await fetchMdx(BASE_PATH);
  const mdxData = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(BASE_PATH, file);
      try {
        const { metadata, content } = await readMdx(filePath);
        return { file, metadata, content };
      } catch (error) {
        console.error(error);
        return null;
      }
    })
  );

  const validMdxData = mdxData.filter((data): data is MdxFile => data !== null);

  const sortedMdxData = validMdxData.sort((a, b) => {
    const dateA = parseDate(a.metadata.date);
    const dateB = parseDate(b.metadata.date);
    return dateA.getTime() - dateB.getTime();
  });

  return sortedMdxData;
};
