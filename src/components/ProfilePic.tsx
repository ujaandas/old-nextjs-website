import Image from "next/image";
import pfpLaptop from "@/../public/pfp-laptop.png";

export default function ProfilePic() {
  return (
    <div className="flex items-center justify-start -ml-6">
      <Image src={pfpLaptop} width={200} height={200} alt="Profile picture" />
    </div>
  );
}
