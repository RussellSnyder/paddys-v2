import { PageHeader } from "./ui/PageHeader";
import Image from "next/image";
import groupImage from "../assets/images/group.jpeg";
import { Upcoming } from "./ui/Upcoming";

const text = {
  welcome: "Herzlich willkommen auf der Website von Paddy's Last Order!",
};

export default async function Home() {
  return (
    <div>
      <Image
        className="md:mb-12 mb-2"
        src={groupImage}
        alt={"paddy's group photo"}
      />
      <PageHeader text={text.welcome} />
      <Upcoming />
    </div>
  );
}
