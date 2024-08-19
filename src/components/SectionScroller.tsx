"use client";

import { useRef, useState, useEffect } from "react";

export interface SectionType {
  folder: string;
  title: string;
}

interface SectionScrollerProps {
  data: { category: string; posts: JSX.Element[] }[];
}

export default function SectionScroller({ data }: SectionScrollerProps) {
  const sectionRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  const sections = data.map((section) => section.category);

  const renderData = (data: { category: string; posts: JSX.Element[] }[]) => {
    return data.map((item, index) => (
      <div
        key={index}
        ref={(el) => {
          sectionRef.current[index] = el;
        }}
      >
        <h2>{item.category}</h2>
        {item.posts}
      </div>
    ));
  };

  const handleScroll = (index: number) => {
    sectionRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(index);
  };

  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex flex-row justify-center md:justify-start mb-3">
        {sections.map((section: string, index: number) => (
          <button
            key={index}
            onClick={() => handleScroll(index)}
            // className={index === activeSection ? "font-bold" : ""}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="px-4 pt-2 overflow-y-auto">{renderData(data)}</div>
    </div>
  );
}
