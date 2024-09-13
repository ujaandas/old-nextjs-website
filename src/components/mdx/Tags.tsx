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
          className="text-sm bg-cat-mocha-sky text-cat-mocha-sky bg-opacity-10 px-3 py-1 rounded-full mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
