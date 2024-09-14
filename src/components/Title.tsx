interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1 className="text-3xl font-bold dark:text-cat-mocha-text text-cat-latte-text">
      {title}
    </h1>
  );
}
