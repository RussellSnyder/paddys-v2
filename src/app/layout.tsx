import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";
import socialShare from "../assets/images/social-share.jpg";
import { openSansFont } from "./fonts";
import "./globals.css";
import { Footer } from "./ui/Footer";
import { Navigation } from "./ui/Navigation";
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE)
    : new URL("https://paddys-last-order.netlify.app"),
  title: "Paddy's Last order",
  description: "Irische Musik in Deutschland spielen",
  openGraph: {
    type: "website",
    phoneNumbers: "+49 151 61206586",
    emails: "kontakt@paddyslastorder.de",
    images: socialShare.src,
    url: "paddyslastorder.de",
    countryName: "Germany",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={openSansFont.className}>
        <div id="fb-root"></div>
        <main className="flex min-h-screen flex-col p-2 max-w-screen-xl m-auto">
          <Navigation />
          <div className="p-4 max-w-screen-lg mx-auto lg:mb-20">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
