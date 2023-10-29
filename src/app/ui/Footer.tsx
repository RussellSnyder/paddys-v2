import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="w-full p-4">
      <div className="lg:w-96 p-4 h-max m-auto flex justify-center">
        <div className="mx-3">
          <a href="https://www.facebook.com/paddyslastorder" target="_blank">
            <FontAwesomeIcon size="4x" color="#3b5998" icon={faFacebook} />
          </a>
        </div>
        <div className="mx-3">
          <a href="https://www.instagram.com/paddyslastorder/" target="_blank">
            <FontAwesomeIcon size="4x" color="#3f729b" icon={faInstagram} />
          </a>
        </div>
        <div className="mx-3">
          <a href="https://paddyslastorder.bandcamp.com/" target="_blank">
            <FontAwesomeIcon size="4x" color="#1DA0C3" icon={faBandcamp} />
          </a>
        </div>
      </div>
    </div>
  );
};
