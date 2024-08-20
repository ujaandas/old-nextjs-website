import ProfilePic from "../ProfilePic";
import BarItem from "../BarItem";
import aboutMe from "@/data/aboutMe.json";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

async function AboutMe() {
  return (
    <div className="flex flex-col justify-center align-middle min-w-fit *:mt-1">
      <ProfilePic />
      <BarItem text={`${aboutMe.name}`} textStyle="text-5xl font-extrabold" />
      <BarItem
        text={`${aboutMe.currentRole} @ ${aboutMe.currentCompany}`}
        textStyle="text-md"
      />
      <BarItem
        text={`@${aboutMe.username} · ${aboutMe.pronouns}`}
        textStyle="text-md font-thin"
      />
      <div className="flex flex-row">
        <BarItem link={aboutMe.links.github}>
          <FaGithub
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={22}
          />
        </BarItem>
        <BarItem link={aboutMe.links.linkedin}>
          <FaLinkedin
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={22}
          />
        </BarItem>
        <BarItem link={aboutMe.links.instagram}>
          <FaInstagram
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={22}
          />
        </BarItem>
      </div>
    </div>
  );
}

export default AboutMe;
