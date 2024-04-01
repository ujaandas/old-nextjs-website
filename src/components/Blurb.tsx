interface BlurbProps {
  title: string;
  description: string;
}

export default function Blurb({ title, description }: BlurbProps) {
  const chunkedTitle = title.length > 10 ? title.slice(0, 10) + "..." : title;
  const chunkedDescription =
    description.length > 50 ? description.slice(0, 50) + "..." : description;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{chunkedTitle}</h1>
      <p className="text-lg">{chunkedDescription}</p>
    </div>
  );
}
