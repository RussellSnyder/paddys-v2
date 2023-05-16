import { Metadata } from "next";

import de from "./de.json";
import en from "./en.json";
import page from "./page.json";

export const metadata: Metadata = {
  title: "About Paddy's Last Order",
};

export default function ContactPage() {
  return (
    <div>
      <h1>{de.title}</h1>

      <div>
        <ul>
          <li>{page.contact.name}</li>
          <li>{page.contact.phone}</li>
          <li>{page.contact.email}</li>
        </ul>
      </div>
    </div>
  );
}
