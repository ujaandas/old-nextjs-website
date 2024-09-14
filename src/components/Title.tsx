interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-r dark:from-cat-mocha-crust from-cat-latte-base from-10% dark:to-cat-mocha-base to-cat-latte-mantle to-90% py-3 -m-2">
      <h1 className="text-3xl font-bold dark:text-cat-mocha-text text-cat-latte-text">
        {title}
      </h1>
    </div>
  );
}
