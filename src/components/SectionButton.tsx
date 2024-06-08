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
      } p-2 m-2 rounded-md transition-colors duration-200`}
      onClick={() => changeSection(section)}
    >
      {section.title}
    </button>
  );
}
