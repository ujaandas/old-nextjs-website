interface TagsProps {
  tags: string[];
}

function Tags({ tags }: TagsProps) {
  if (!tags) return null;
  return (
    <div className="flex flex-wrap mt-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-sm bg-cat-latte-overlay-2 bg-opacity-30 text-cat-latte-text px-2 py-1 rounded-full mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
