import { Metadata } from "next";
import {
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Card } from "../ui/Card";
import { irishGroverFont } from "../fonts";
import { PageHeader } from "../ui/PageHeader";

export const metadata: Metadata = {
  title: "About Paddy's Last Order",
};

interface ContactEntryProps {
  Icon: typeof UserCircleIcon | typeof PhoneIcon | typeof EnvelopeIcon;
  text: string;
}

const ContactEntry = ({ Icon, text }: ContactEntryProps) => (
  <li className="flex justify-between content-center items-center mb-6">
    <Icon width={50} color="rgb(161 98 7)" className="yellow-700" />
    <p className="ml-6 text-2xl">{text}</p>
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
    </div>
  );
}
