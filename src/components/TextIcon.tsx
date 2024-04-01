import { IconType } from "react-icons";

interface TextIconProps {
  icon: IconType;
  text: string;
}

export default function TextIcon({ icon, text }: TextIconProps) {
  const Icon = icon;
  return (
    <span className="flex items-center align-bottom mb-1">
      <Icon />
      <h3 className="ml-3 text-xl font-semibold"> {text} </h3>
    </span>
  );
}
