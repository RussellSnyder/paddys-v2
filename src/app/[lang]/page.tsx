import { PageHeader } from "../ui/PageHeader";
import Image from "next/image";
import groupImage from "../../assets/images/group.jpeg";
import { SupportedLanguage } from "../types";
import { getDictionary } from "./dictionaries";
// import groupImage from " /images/group.jpeg";

interface Props {
  params: {
    lang: SupportedLanguage;
  };
}

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <div>
      <Image
        className="mb-12"
        src={groupImage}
        alt={dict.homepage.groupImageAlt}
      />
      <PageHeader text={dict.homepage.welcome} />
    </div>
  );
}
