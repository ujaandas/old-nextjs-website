"use client";

import { useState } from "react";
import sections from "../../public/data/sections.json";

interface SectionType {
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

  const renderData = (data: { category: string; posts: JSX.Element[] }[]) => {
    console.log(data.map((category) => category.category));
    const filteredData = data.filter(
      (category) => category.category === currentSection.folder
    );
    return filteredData.map((category) => (
      <div key={category.category}>
        <h1>{category.category}</h1>
        <div>
          {category.posts.map((post, index) => (
            <div key={index}>{post}</div>
          ))}
        </div>
      </div>
    ));
  };

  // console.log(data.flatMap((category) => category.posts));

  return (
    <>
      <div className="flex flex-row">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`${
              currentSection === section ? "bg-blue-500" : "bg-blue-300"
            } p-2 m-2 rounded-md`}
            onClick={() => changeSection(section)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div>{renderData(data)}</div>
    </>
  );
}
