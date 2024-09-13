import ProfilePic from "../ProfilePic";
import BarItem from "../BarItem";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { fetchMdxByCategory } from "@/lib/data-fetcher";

async function AboutMe() {
  const aboutMeRaw = await fetchMdxByCategory("aboutMe");
  const aboutMe = aboutMeRaw[0].metadata;
  return (
    <div className="flex flex-col justify-center align-middle min-w-fit *:mt-1 text-cat-mocha-text">
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
        <BarItem link={aboutMe.github}>
          <FaGithub
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={22}
          />
        </BarItem>
        <BarItem link={aboutMe.linkedin}>
          <FaLinkedin
            className="text-cat-latte-text hover:text-gray-800 mr-1"
            size={22}
          />
        </BarItem>
        <BarItem link={aboutMe.instagram}>
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
