import { StaticImageData } from "next/image";
import Emma1 from "../../assets/images/bandMembers/Emma1.jpg";
import Emma2 from "../../assets/images/bandMembers/Emma2.jpg";
import Flo1 from "../../assets/images/bandMembers/Flo1.jpg";
import Flo2 from "../../assets/images/bandMembers/Flo2.jpg";
import Georg1 from "../../assets/images/bandMembers/Georg1.jpg";
import Georg2 from "../../assets/images/bandMembers/Georg2.jpg";
import Jasper1 from "../../assets/images/bandMembers/Jasper1.jpg";
import Jasper2 from "../../assets/images/bandMembers/Jasper2.jpg";
import Smiley1 from "../../assets/images/bandMembers/Smiley1.jpg";
import Smiley2 from "../../assets/images/bandMembers/Smiley2.jpg";
import Todd1 from "../../assets/images/bandMembers/Todd1.jpg";
import Todd2 from "../../assets/images/bandMembers/Todd2.jpg";

import AnyWhichWayTheWindsMayBlowCover from "../../assets/images/discography/AnyWhichWayTheWindsMayBlowCover.jpg";
import InTheMiddleOfTheTuneCover from "../../assets/images/discography/InTheMiddleOfTheTuneCover.jpg";
import SickAndTiredOfWorkinCover from "../../assets/images/discography/SickAndTiredOfWorkinCover.jpg";
import ItsAlwaysBeenTheLastToLaughCover from "../../assets/images/discography/ItsAlwaysBeenTheLastToLaughCover.jpg";
import LiveAtTheHourAfterDark from "../../assets/images/discography/LiveAtTheHourAfterDark.jpg";

interface BandMemberInfo {
  name: string;
  instrument: string;
}

export const bandMembersInfo: BandMemberInfo[] = [
  { name: "Emma", instrument: "Violin" },
  { name: "Flo", instrument: "Guitar" },
  { name: "Georg", instrument: "Accordion" },
  { name: "Jasper", instrument: "Guitar, Bandjo, Mandolin" },
  { name: "Smiley", instrument: "Guitar, Bodhrán" },
  { name: "Todd", instrument: "Bass, Guitar" },
];

export const bandMemberImageMap = {
  Emma: [Emma1, Emma2],
  Flo: [Flo1, Flo2],
  Georg: [Georg1, Georg2],
  Jasper: [Jasper1, Jasper2],
  Smiley: [Smiley1, Smiley2],
  Todd: [Todd1, Todd2],
};

interface DiscographyEntry {
  name: string;
  date: number;
  image: StaticImageData;
  bandCampId?: string;
  bandCampLink?: string;
}

export const discography: DiscographyEntry[] = [
  {
    name: "Sick and Tired of Workin'",
    date: 2012,
    image: SickAndTiredOfWorkinCover,
    bandCampId: "3439254929",
    bandCampLink:
      "https://paddyslastorder.bandcamp.com/album/sick-and-tired-of-workin",
  },
  {
    name: "Any Which Way the Winds may Blow",
    date: 2014,
    image: AnyWhichWayTheWindsMayBlowCover,
    bandCampId: "2768487509",
    bandCampLink:
      "https://paddyslastorder.bandcamp.com/album/any-which-way-the-winds-may-blow",
  },
  {
    name: "It's always been the last to laugh",
    date: 2015,
    image: ItsAlwaysBeenTheLastToLaughCover,
  },
  {
    name: "In the Middle of the Tune",
    date: 2017,
    image: InTheMiddleOfTheTuneCover,
    bandCampId: "3285839865",
    bandCampLink:
      "https://paddyslastorder.bandcamp.com/album/in-the-middle-of-the-tune",
  },
  {
    name: "Live at the hour after dark",
    date: 2023,
    image: LiveAtTheHourAfterDark,
  },
];
