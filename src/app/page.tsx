import { PageHeader } from "./ui/PageHeader";
import Image from "next/image";
import groupImage from "../assets/images/group.jpeg";
import { Upcoming } from "./ui/Upcoming";

const text = {
  welcome: "Céad Mile fáilte!",
};

export default async function Home() {
  return (
    <div>
      <Image
        className="md:mb-6 mb-2"
        src={groupImage}
        alt={"paddy's group photo"}
      />
      <PageHeader text={text.welcome} />
      <Upcoming />
    </div>
  );
}
