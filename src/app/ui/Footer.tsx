"use client";

import { useEffect } from "react";

export const Footer = () => {
  return (
    <div className="w-full p-4">
      <div className="w-96 p-4 h-max m-auto rounded-md border-width-8 bg-yellow-700 border-yellow-700">
        <div
          className="fb-page m-auto"
          data-href="https://www.facebook.com/paddyslastorder/"
          data-tabs="timeline"
          data-width="1000"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="true"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/paddyslastorder/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/paddyslastorder/">
              Paddys Last Order
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
