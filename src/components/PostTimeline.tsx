import Post from "./mdx/Post";
import { FaEllipsisVertical } from "react-icons/fa6";

interface PostTimelineProps {
  posts: { metadata: any; content: string }[];
  lineOnLeft?: boolean;
}

export default function PostTimeline({ posts, lineOnLeft }: PostTimelineProps) {
  return (
    <div className="py-4">
      {posts.map((post, index) => (
        <div key={index} className="">
          {index !== 0 && (
            <FaEllipsisVertical className="text-sm dark:text-cat-mocha-overlay-0 text-cat-latte-overlay-0 -ml-1 my-2" />
          )}
          <DateSnippet date={post.metadata.date.split("-")[1]} />
          <div className="border-l-4 border-gray-300 pl-5">
            <Post metadata={post.metadata} content={post.content} />
          </div>
          <DateSnippet date={post.metadata.date.split("-")[0]} />
        </div>
      ))}
    </div>
  );
}

function DateSnippet({ date }: { date: string }) {
  return (
    <h4 className="my-1 text-sm dark:text-cat-mocha-overlay-0 text-cat-latte-overlay-0">
      {date}
    </h4>
  );
}
