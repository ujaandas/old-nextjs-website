interface SidebarItemProps {
  text: string;
  textStyle?: string;
  link?: string;
  children?: React.ReactNode;
}

export default function SidebarItem({
  text,
  textStyle,
  link,
  children,
}: SidebarItemProps) {
  return (
    <li className={`flex ${children != undefined ? "mt-1" : ""} items-center`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex ${children != undefined ? "mt-1" : ""} items-center`}
      >
        {children}
        <p className={`${textStyle != undefined ? textStyle : ""}`}>{text}</p>
      </a>
    </li>
  );
}
