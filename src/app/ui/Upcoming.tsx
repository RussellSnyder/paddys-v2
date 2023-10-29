"use client";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import styles from "./Upcoming.module.css";

var dateInPast = function (date: Date) {
  const currentDate = new Date();
  if (date.setHours(0, 0, 0, 0) <= currentDate.setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
};

interface UpcomingShows {
  image: {
    url: string;
    imgix_url: string;
  };
  post: string;
  show_upcoming_until: string;
}

export const Upcoming = () => {
  const [upcomingData, setUpcomingData] = useState<UpcomingShows>();

  useEffect(() => {
    async function getUpcoming() {
      const response = await fetch(
        "https://api.cosmicjs.com/v3/buckets/paddys-last-order-production/objects/653e8b92ea8be85b42cf7cbe?read_key=45150TE4Jjl5IhpcDNoNzMB7JKQAGxOKupelGqOWV3W1YPYMDP&depth=1&props=metadata,"
      );
      const upcoming = await response.json();

      setUpcomingData(upcoming.object.metadata);
    }
    getUpcoming();
  }, []);

  if (!upcomingData) return null;

  const currentDate = format(new Date(), "yyyy-MM-dd");

  if (
    upcomingData.show_upcoming_until &&
    dateInPast(new Date(upcomingData.show_upcoming_until))
  ) {
    return null;
  }

  return (
    <div className={`mb-6 ${styles.upcoming}`}>
      <h3 className="text-xl">Upcoming!</h3>
      <div dangerouslySetInnerHTML={{ __html: upcomingData.post }} />
    </div>
  );
};
