import {
  Roboto,
  Ubuntu,
  Comic_Neue,
  Poppins,
  Lato,
  Pacifico,
  Roboto_Mono,
  Montserrat,
  Bad_Script,
  DM_Serif_Text,
  PT_Serif_Caption,
  Inter,
} from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const dm_serif: NextFont = DM_Serif_Text({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

const pt_serif_caption: NextFont = PT_Serif_Caption({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

const inter: NextFont = Inter({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto: NextFont = Roboto({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const robotoMono: NextFont = Roboto_Mono({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const ubuntu: NextFont = Ubuntu({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const poppins: NextFont = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const comicNeue: NextFont = Comic_Neue({
  display: "swap",
  weight: ["700"],
  subsets: ["latin"],
});
const lato: NextFont = Lato({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const pacifico: NextFont = Pacifico({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});
const monsterRat: NextFont = Montserrat({
  display: "swap",
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});
const badScript: NextFont = Bad_Script({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export {
  inter,
  dm_serif,
  pt_serif_caption,
  roboto,
  robotoMono,
  ubuntu,
  poppins,
  comicNeue,
  lato,
  pacifico,
  monsterRat,
  badScript,
};
