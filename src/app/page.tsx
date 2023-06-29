import { PageHeader } from "./ui/PageHeader";
import Image from "next/image";
import groupImage from "../assets/images/group.jpeg";

const text = {
  welcome: "Herzlich willkommen auf der Website von Paddy's Last Order!",
};

export default async function Home() {
  return (
    <div>
      <Image className="mb-12" src={groupImage} alt={"paddy's group photo"} />
      <PageHeader text={text.welcome} />
    </div>
  );
}
