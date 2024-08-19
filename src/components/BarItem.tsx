interface SidebarItemProps {
  text?: string;
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
    <div className={`flex ${children != undefined ? "mt-2" : ""} items-center`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
        <p className={`${textStyle != undefined ? textStyle : ""}`}>{text}</p>
      </a>
    </div>
  );
}
