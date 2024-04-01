import aboutMe from "../../public/data/aboutMe.json";
import { FaBookOpen, FaUniversity } from "react-icons/fa";
import { FaPerson, FaLocationDot } from "react-icons/fa6";
import TextIcon from "./TextIcon";

export default function AboutMe() {
  // TODO: Lazy load icons from json
  const aboutMeValues = Object.values(aboutMe);
  const aboutMeIcons = [FaPerson, FaBookOpen, FaUniversity, FaLocationDot];

  return (
    <div className="flex flex-col">
      <div className="items-center justify-center">
        <img
          src="https://picsum.photos/200"
          width={200}
          height={200}
          alt="Profile picture placeholder"
        />
      </div>
      <div>
        <ul>
          {aboutMeValues.map((value, index) => (
            <li key={index}>
              <TextIcon icon={aboutMeIcons[index]} text={value} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
