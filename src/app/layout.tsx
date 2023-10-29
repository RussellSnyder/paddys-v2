import { openSansFont } from "./fonts";
import "./globals.css";
import { Footer } from "./ui/Footer";
import { Navigation } from "./ui/Navigation";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
  title: "Paddy's Last order",
  description: "Irische Musik in Deutschland spielen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
        nonce="QlVVPSyF"
      />
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
