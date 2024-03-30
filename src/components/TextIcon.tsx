import { IconType } from "react-icons";

interface TextIconProps {
  icon: IconType;
  text: string;
}

export default function TextIcon({ icon, text }: TextIconProps) {
  const Icon = icon;
  return (
    <div className="flex flex-row">
      <Icon />
      <div>
        <p> {text} </p>
      </div>
    </div>
  );
}
