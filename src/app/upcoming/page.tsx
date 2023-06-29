import { Metadata } from "next";
import { PageHeader } from "../ui/PageHeader";

export const metadata: Metadata = {
  title: "Upcoming | Paddy's Last Order",
};

export default function UpcomingPage() {
  return (
    <div>
      <PageHeader text="Upcoming" />
      <div
        className="fb-page w-full"
        data-href="https://www.facebook.com/paddyslastorder/"
        data-tabs="events"
        data-width="500"
        data-height="1000"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
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
  );
}
