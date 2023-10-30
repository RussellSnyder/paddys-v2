import { Metadata } from "next";
import { PageHeader } from "../ui/PageHeader";
import { Download, downloads } from "./data";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Card } from "../ui/Card";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Downloads | Paddy's Last Order",
};

const DownloadEntry = ({
  file,
  label,
  isLast,
}: Download & { isLast: boolean }) => (
  <li className={`${!isLast ? "border-b-2 " : ""}border-amber-700`}>
    <a
      className="p-4 block w-full flex justify-between"
      href={`/downloads/${file}`}
    >
      <span className="lg:text-2xl font-bold">{label}</span>{" "}
      <ArrowDownTrayIcon width={30} />
    </a>
  </li>
);

export default function DownloadsPage() {
  return (
    <div>
      <PageHeader text="Downloads" />
      <Card>
        {Object.entries(downloads).map(([sectionTitle, downloads], i) => (
          <div key={sectionTitle} className="mb-12">
            <h3 className="text-4xl mb-4">{sectionTitle}</h3>
            <ul className={`border-4 border-amber-700 rounded-xl bg-white`}>
              {downloads.map((download: Download) => (
                <DownloadEntry
                  key={download.file}
                  {...download}
                  isLast={i === downloads.length - 1}
                />
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </div>
  );
}
