import {
  faFacebook,
  faInstagram,
  faBandcamp,
  faYoutubeSquare,
  faSpotify,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaEntry {
  name: string;
  icon: IconDefinition;
  color: string;
  link: string;
}

export const socialMediaEntries: SocialMediaEntry[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/paddyslastorder",
    icon: faFacebook,
    color: "#3b5998",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/paddyslastorder/",
    icon: faInstagram,
    color: "#3f729b",
  },
  {
    name: "Bandcamp",
    link: "https://paddyslastorder.bandcamp.com/",
    icon: faBandcamp,
    color: "#1DA0C3",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@PaddysLastOrder",
    icon: faYoutubeSquare,
    color: "#e52d27",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/5R4zwf5Ttxd0gWde3i1943?si=ZFJ9dZ4bSH",
    icon: faSpotify,
    color: "#7ab800",
  },
];

export const SocialMedia = () => (
  <div className="lg:w-96 p-4 h-max m-auto flex justify-center bg-white rounded-xl">
    {socialMediaEntries.map(({ link, color, icon, name }) => (
      <div className="mx-3" key={name}>
        <a href={link} target="_blank">
          <FontAwesomeIcon size="3x" color={color} icon={icon} />
        </a>
      </div>
    ))}
  </div>
);
