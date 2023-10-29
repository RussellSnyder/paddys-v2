import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import { PageHeader } from "../ui/PageHeader";
import { socialMediaEntries } from "../ui/SocialMedia";

export const metadata: Metadata = {
  title: "Media | Paddy's Last Order",
};

export default function SocialMediaPage() {
  return (
    <div>
      <PageHeader text="Social Media" />

      <div>
        {socialMediaEntries.map(({ link, color, icon, name }) => (
          <a href={link} target="_blank" key={name}>
            <div className="mb-6 flex items-center">
              <FontAwesomeIcon size="5x" color={color} icon={icon} />
              <div className="ml-6">
                <h3 className="text-5xl mb-2">{name}</h3>
                <p>{link}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
