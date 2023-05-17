import { PageHeader } from "./ui/PageHeader";
import Image from "next/image";
import groupImage from "../assets/images/group.jpeg";
// import groupImage from " /images/group.jpeg";

export default function Home() {
  return (
    <div>
      <Image
        className="mb-12"
        src={groupImage}
        alt="bild von Paddy's Musiker"
      />
      <PageHeader text="Herzlich willkommen auf der Website von Paddy's Last Order!" />
    </div>
  );
}
