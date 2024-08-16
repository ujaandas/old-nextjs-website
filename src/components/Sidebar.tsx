"use client";

import aboutMe from "@/app/data/aboutMe.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import ProfilePic from "./ProfilePic";
import { useState } from "react";
import SidebarItem from "./SidebarItem";

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(true);

  const cleanUrl = (url: string) =>
    url.replace("https://", "").replace("http://", "").replace("www.", "");

  // TODO: Create a custom hook to listen for window size changes
  // If window is too small, auto close the sidebar

  return (
    <div className="flex flex-col w-full ">
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "<<" : ">>"}</button>
      <div
        className={`${
          isOpen
            ? "bg-cat-latte-mantle rounded-l p-4 h-full justify-center items-center"
            : "hidden"
        }`}
      >
        <ProfilePic />
        <ul className="flex flex-col">
          <ul className="mt-3">
            <SidebarItem
              text={`${aboutMe.name}`}
              textStyle="text-xl font-extrabold"
            />
            <SidebarItem
              text={`@${aboutMe.username} · ${aboutMe.pronouns}`}
              textStyle="text-sm font-thin"
            />
          </ul>
          <ul className="mt-3 text-md">
            <SidebarItem text={`${aboutMe.currentRole}`} />
            <SidebarItem text={`@ ${aboutMe.currentCompany}`} />
          </ul>
          <ul className="mt-3 text-sm">
            <SidebarItem
              text={cleanUrl(aboutMe.links.github)}
              link={aboutMe.links.github}
            >
              <FaGithub
                className="text-cat-latte-text hover:text-gray-800 mr-1"
                size={22}
              />
            </SidebarItem>
            <SidebarItem
              text={cleanUrl(aboutMe.links.linkedin)}
              link={aboutMe.links.linkedin}
            >
              <FaLinkedin
                className="text-cat-latte-text hover:text-gray-800 mr-1"
                size={22}
              />
            </SidebarItem>
            <SidebarItem text={aboutMe.currentLocation}>
              <FaMapMarkerAlt
                className="text-cat-latte-text hover:text-gray-800 mr-1"
                size={22}
              />
            </SidebarItem>
          </ul>
        </ul>
      </div>
    </div>
  );
}
