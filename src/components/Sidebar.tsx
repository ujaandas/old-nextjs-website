/* eslint-disable @next/next/no-img-element */
import aboutMe from "@/app/data/aboutMe.json";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaMap } from "react-icons/fa6";

export default function AboutMe() {
  const cleanUrl = (url: string) =>
    url.replace("https://", "").replace("http://", "").replace("www.", "");

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-start">
        <img
          src="https://picsum.photos/200"
          width={200}
          height={200}
          alt="Profile picture placeholder"
        />
      </div>
      <ul className="flex flex-col">
        <li className="flex mt-1 items-center">{aboutMe.name}</li>
        <li className="flex items-center">@{aboutMe.username}</li>
        <li className="flex mt-3 items-center">{aboutMe.currentRole}</li>
        <li className="flex items-center">{aboutMe.currentCompany}</li>
        <li className="flex mt-3 items-center">
          <a
            href={aboutMe.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 items-center"
          >
            <FaGithub
              className="text-cat-latte-text hover:text-gray-800 mr-1"
              size={24}
            />
            <p>{cleanUrl(aboutMe.links.github)}</p>
          </a>
        </li>
        <li className="flex mt-1 items-center">
          <a
            href={aboutMe.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex mt-1 items-center"
          >
            <FaLinkedin
              className="text-cat-latte-text hover:text-gray-800 mr-1"
              size={24}
            />
            <p>{cleanUrl(aboutMe.links.linkedin)}</p>
          </a>
        </li>
        <li className="flex mt-1 items-center">
          <FaMapMarkerAlt
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={24}
          />
          <p>{aboutMe.currentLocation}</p>
        </li>
      </ul>
    </div>
  );
}
