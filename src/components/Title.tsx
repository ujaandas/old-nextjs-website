interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold dark:text-cat-mocha-text text-cat-latte-text">
        {title}
      </h1>
    </div>
  );
}
