import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faInstagram,
  faFacebook,
  faYoutubeSquare,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="w-full p-4">
      <div className="lg:w-96 p-4 h-max m-auto flex justify-center bg-white rounded-xl">
        <div className="mx-3">
          <a href="https://www.facebook.com/paddyslastorder" target="_blank">
            <FontAwesomeIcon size="3x" color="#3b5998" icon={faFacebook} />
          </a>
        </div>
        <div className="mx-3">
          <a href="https://www.instagram.com/paddyslastorder/" target="_blank">
            <FontAwesomeIcon size="3x" color="#3f729b" icon={faInstagram} />
          </a>
        </div>
        <div className="mx-3">
          <a href="https://paddyslastorder.bandcamp.com/" target="_blank">
            <FontAwesomeIcon size="3x" color="#1DA0C3" icon={faBandcamp} />
          </a>
        </div>
        <div className="mx-3">
          <a href="https://www.youtube.com/@PaddysLastOrder" target="_blank">
            <FontAwesomeIcon size="3x" color="#e52d27" icon={faYoutubeSquare} />
          </a>
        </div>
        <div className="mx-3">
          <a
            href="https://open.spotify.com/artist/5R4zwf5Ttxd0gWde3i1943?si=ZFJ9dZ4bSH2DltaPfy7C0A&nd=1"
            target="_blank"
          >
            <FontAwesomeIcon size="3x" color="#7ab800" icon={faSpotify} />
          </a>
        </div>
      </div>
    </div>
  );
};
