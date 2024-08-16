import Image from "next/image";
import aboutMe from "@/app/data/aboutMe.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function AboutMe() {
  const cleanUrl = (url: string) =>
    url.replace("https://", "").replace("http://", "").replace("www.", "");

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-start">
        <Image
          src="https://picsum.photos/200"
          width={200}
          height={200}
          alt="Profile picture placeholder"
        />
      </div>
      <ul className="flex flex-col">
        <ul className="mt-3">
          <li className="flex items-center text-xl font-extrabold">
            {aboutMe.name}
          </li>
          <li className="flex items-center text-md font-thin">
            @{aboutMe.username} · {aboutMe.pronouns}
          </li>
        </ul>
        <ul className="mt-3 text-md">
          <li className="flex items-center">{aboutMe.currentRole}</li>
          <li className="flex items-center">@ {aboutMe.currentCompany}</li>
        </ul>
        <ul className="mt-3 text-sm">
          <li className="flex items-center">
            <a
              href={aboutMe.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex mt-1 items-center"
            >
              <FaGithub
                className="text-cat-latte-text hover:text-gray-800 mr-1"
                size={22}
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
                size={22}
              />
              <p>{cleanUrl(aboutMe.links.linkedin)}</p>
            </a>
          </li>
          <li className="flex mt-1 items-center">
            <FaMapMarkerAlt
              className="text-cat-latte-text hover:text-gray-800 mr-1"
              size={22}
            />
            <p>{aboutMe.currentLocation}</p>
          </li>
        </ul>
      </ul>
    </div>
  );
}
