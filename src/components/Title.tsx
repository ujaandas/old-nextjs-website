interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="text-3xl font-bold text-cat-mocha-text">{title}</h1>;
}
