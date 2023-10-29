import { Metadata } from "next";
import { PageHeader } from "../ui/PageHeader";
import { bandMemberImageMap, bandMembersInfo, discography } from "./data";
import { Card } from "../ui/Card";
import Image from "next/image";
import { irishGroverFont } from "../fonts";

export const metadata: Metadata = {
  title: "About Paddy's Last Order",
};

const createBandcampEmbed = (id: string, link: string, label: string) =>
  `<iframe style="border: 0; width: 350px; height: 150px;" src="https://bandcamp.com/EmbeddedPlayer/album=${id}/size=medium/bgcol=ffffff/linkcol=e99708/transparent=true/" seamless><a href="${link}">${label}</a></iframe>`;

export default function AboutPage() {
  return (
    <div>
      <PageHeader text="About" />
      <div className="mb-12 md:px-4 md:pb-6 md:border-l-4 border-yellow-700">
        <p className="text-lg mb-4 ">
          Man nehme zwei Gitarren, einen Bass, ein Banjo, eine Mandoline, eine
          Bodhrán, ein Akkordeon und eine Geige und gebe sie sechs fraglos
          talentierten und unerhört sympathischen Musikern ... und Zack! wähnt
          man sich irgendwo mitten auf der grünen Insel in einem herrlich
          überfüllten Irish Pub; höchstwahrscheinlich Guinness-selig, schief und
          laut mitsingend und unumkehrbar infiziert von einer Musik, die einem
          in Herz und Knochen fährt. Verantwortlich dafür zeigt sich Paddy’s
          Last Order, eine Irish Folk-Band aus dem mittelfränkischen
          Herzogenaurach. Handgemacht, ehrlich und ungeschönt sind die Pubsongs
          und Traditionals, mit denen die fünf Paddys und die schöne Geigerin
          durch die Kneipen- und Festivallandschaft Frankens ziehen. Je nach
          Anlass, Uhrzeit und Pegel lassen sie ihr Publikum dabei mit Klassikern
          wie „Irish Rover“, Whiskey in the Jar“ oder traditionellen „Jigs &
          Reels” gepflegt eskalieren oder sorgen mit der einen oder anderen
          A-capella-Perle temporär für ehrfürchtige Stille – spätestens, wenn
          Geigerin Emma mit ihrer Ausnahmestimme sogar den Stoutschaum mit
          Gänsehaut überzieht. Wer Irish Folk und Bands wie The Dubliners oder
          The Pogues liebt, wer sein Event oder Pub gefühlt und akustisch nach
          Irland versetzen will oder einfach nur die richtige Begleitung zu
          Black Stuff, Ale oder Whiskey sucht, wird an Paddy’s Last Order
          wahrlich seine Freude haben. Diese lässt sich dann standesgemäß irisch
          mit einem lautstarken „Delira and Excira!” kundtun und mit dem Erwerb
          einer CD sogar ein Stückweit konservieren: Fünf selbst und regional
          produzierte CD’s zum Nachspüren, Einstimmen und Einfachdranerfreuen
          bietet die Band mittlerweile feil.
        </p>
        <h5 className={`${irishGroverFont.className} text-4xl`}>
          Crack on, Fella’s!
        </h5>
      </div>

      <div className="mb-6">
        <h2 className="text-4xl mb-4">Band Members</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {bandMembersInfo.map(({ name, instrument }) => (
            <Card
              key={name}
              className="border-yellow-700 bg-white border-4 rounded-xl relative"
            >
              <Image
                className="border-b-yellow-700 border-b-4"
                src={
                  bandMemberImageMap[name as keyof typeof bandMemberImageMap][0]
                }
                alt={"paddy's group photo"}
              />
              <Image
                className="border-b-yellow-700 border-b-4 opacity-0 hover:opacity-100 transition-opacity absolute top-0 left-0 right-0"
                src={
                  bandMemberImageMap[name as keyof typeof bandMemberImageMap][1]
                }
                alt={"paddy's group photo"}
              />
              <div className="p-4">
                <h6 className={`${irishGroverFont.className} text-xl`}>
                  {name}
                </h6>
                {instrument}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl mb-6">Discography</h2>
        <div>
          {discography.map(({ name, bandCampId, bandCampLink, image }) => {
            const hasBandCampEmbed = bandCampId && bandCampLink;

            return (
              <div key={name} className="grid md:grid-cols-2 mb-6 items-center">
                <div className="mr-6 mb-4 ">
                  <h4 className="md:hidden text-xl mb-4">{name}</h4>
                  <Image className="" src={image} alt={`${name} cover`} />
                </div>
                <div className="">
                  <h4 className="hidden md:block text-xl mb-4">{name}</h4>

                  {hasBandCampEmbed ? (
                    <div
                      className="overflow-hidden"
                      key={bandCampId}
                      dangerouslySetInnerHTML={{
                        __html: createBandcampEmbed(
                          bandCampId,
                          bandCampLink,
                          name
                        ),
                      }}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
