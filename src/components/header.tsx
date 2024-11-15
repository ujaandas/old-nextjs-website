import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center h-14 px-4 md:px-6 w-full">
      <nav className="flex-1 hidden md:flex justify-start">
        <HeaderNavButton href="/" text="Home" />
        <HeaderNavButton href="/projects" text="Projects" />
        <HeaderNavButton href="/blog" text="Blog" />
        <HeaderNavButton href="/contact" text="Contact" />
      </nav>
    </header>
  );
}

function HeaderNavButton({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="mx-2.5 p-2 items-center rounded-md text-md text-gray-400 [&:hover]:text-gray-600 transition-colors"
      prefetch={true}
    >
      {text}
    </Link>
  );
}
