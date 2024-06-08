"use client";

import { useState } from "react";
import sections from "@/app/data/sections.json";
import SectionButton from "./SectionButton";

export interface SectionType {
  folder: String;
  title: String;
}

interface SectionSelectorProps {
  data: { category: string; posts: JSX.Element[] }[];
}

export default function SectionSelector({ data }: SectionSelectorProps) {
  const [currentSection, setCurrentSection] = useState<SectionType>(
    sections[0]
  );

  const changeSection = (section: SectionType) => {
    setCurrentSection(section);
  };

  const renderAboutMe = () => {
    return <div>About Me</div>;
  };

  const renderData = (data: { category: string; posts: JSX.Element[] }[]) => {
    // console.log(data.map((category) => category.category));
    const ABOUT_ME_INDEX = 0;
    if (currentSection === sections[ABOUT_ME_INDEX]) {
      return renderAboutMe();
    }

    const filteredData = data.filter(
      (category) => category.category === currentSection.folder
    );

    return filteredData.map((category) => (
      <div key={category.category}>
        <div>
          {category.posts.map((post, index) => (
            <div key={index}>{post}</div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex flex-row justify-start mb-3">
        {sections.map((section, index) => (
          <SectionButton
            key={index}
            currentSection={currentSection}
            section={section}
            index={index}
            changeSection={async () => changeSection(section)}
          />
        ))}
      </div>
      <div className="px-4 pt-2 overflow-y-auto">{renderData(data)}</div>
    </div>
  );
}
