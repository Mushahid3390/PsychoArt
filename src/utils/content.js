import Banner1 from "../assets/images/Banner1.svg";
import Banner2 from "../assets/images/Banner2.svg";
import Banner3 from "../assets/images/Banner3.svg";
import Banner4 from "../assets/images/Banner4.svg";
import Banner5 from "../assets/images/Banner5.svg";
import Banner6 from "../assets/images/Banner6.svg";

// icons
import binanceLogo from "../assets/icons/BinanceLogo.svg";
import blockChain from "../assets/icons/BlockChain.svg";
import EthereumLogo from "../assets/icons/EthereumLogo.svg";

//Navbar Content
import psychoArt from "../assets/icons/PsychoArt.svg";
import search from "../assets/icons/search.svg";

export const icons = [
  { src: binanceLogo, alt: "Binance_logo", style: "aspect-5/1" },
  { src: EthereumLogo, alt: "EthereumLogo", style: "aspect-16/5" },
  { src: blockChain, alt: "Blockchain", style: "aspect-33/5" },
];

export const navbarContent = {
  logo: {
    psychoArt,
    alt: "logo",
  },
  icons: { magnifyingGlass: search, alt: "searcgIcon" },
  navigations: [
    { name: "Collections", style: "" },
    { name: "Features", style: "" },
    { name: "FAQ", style: "" },
    {
      name: "Select Wallet",
      style:
        "no-hover py-2.5 hover:opacity-85 active:scale-98 px-5 rounded-[10px] bg-linear-to-t from-[#B75CFF] to-[#671AE4]",
    },
  ],
};

export const homeData = {
  tittle: "Create, Sell & Collect Your Own Creative NFT",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  statistics: [
    {
      name: "Artworks",
      counts: "37k+",
    },
    {
      name: "Artist",
      counts: "20k+",
    },
    {
      name: "Aucations",
      counts: "99k+",
    },
  ],
  btnLabel: "Sell NFT",
  images: [
    { src: Banner1, alt: "Banner1" },
    { src: Banner3, alt: "Banner3" },
    { src: Banner4, alt: "Banner4" },
    { src: Banner2, alt: "Banner2" },
    { src: Banner5, alt: "Banner5" },
    { src: Banner6, alt: "Banner6" },
  ],
};

export const aboutUsContent = {
  section: "About Us",
  sectionDescription:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tittle: "Get Popular NFT",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.",
};
