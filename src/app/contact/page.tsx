import { Metadata } from "next";
import {
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Card } from "../ui/Card";
import { PageHeader } from "../ui/PageHeader";
import Image from "next/image";
import GuinessImage from "../../assets/images/guiness.jpeg";

export const metadata: Metadata = {
  title: "Kontakt | Paddy's Last Order",
};

interface ContactEntryProps {
  Icon: typeof UserCircleIcon | typeof PhoneIcon | typeof EnvelopeIcon;
  text: string;
}

const ContactEntry = ({ Icon, text }: ContactEntryProps) => (
  <li className="md:flex px-2 text-center justify-between content-center items-center mb-6">
    <Icon
      width={50}
      color="rgb(161 98 7)"
      className="yellow-700 m-auto md:ml-0"
    />
    <p className="md:ml-6 text-2xl">{text}</p>
  </li>
);

export default function ContactPage() {
  return (
    <div>
      <PageHeader text="Kontakt" />

      <div className="flex justify-center ">
        <Card>
          <ul>
            <ContactEntry text={"Jasper"} Icon={UserCircleIcon} />
            <ContactEntry text={"+49 151 61206586"} Icon={PhoneIcon} />
            <ContactEntry
              text={"kontakt@paddyslastorder.de"}
              Icon={EnvelopeIcon}
            />
          </ul>
        </Card>
      </div>
      <Image src={GuinessImage} alt="bild von tasty Guiness" />
    </div>
  );
}
