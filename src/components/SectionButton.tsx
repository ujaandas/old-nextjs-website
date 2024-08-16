import { SectionType } from "./SectionContent";

interface SectionButtonProps {
  index: number;
  currentSection: SectionType;
  section: SectionType;
  changeSection: (section: SectionType) => {};
}

export default function SectionButton({
  index,
  currentSection,
  section,
  changeSection,
}: SectionButtonProps) {
  return (
    <button
      key={index}
      className={`${
        currentSection === section ? "bg-cat-latte-overlay-0 bg-opacity-25" : ""
      } p-2 md:m-1 rounded-md transition-colors duration-200 text-nowrap overflow-hidden`}
      onClick={() => changeSection(section)}
    >
      {section.title}
    </button>
  );
}
