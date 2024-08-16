import Image from "next/image";
import pfpLaptop from "@/../public/pfp-laptop.png";

export default function ProfilePic() {
  return (
    <div className="flex items-center justify-start">
      <Image src={pfpLaptop} width={150} height={150} alt="Profile picture" />
    </div>
  );
}
