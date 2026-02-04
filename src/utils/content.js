//Navbar Content
import psychoArt from "/assets/icons/psychoArt.svg";
import search from "/assets/icons/search.svg";

import HeroImage from "/assets/images/HeroImage.svg";
// icons
import blockChain from "/assets/icons/blockChain.svg";
import binanceLogo from "/assets/icons/binanceLogo.svg";
import ethereumLogo from "/assets/icons/ethereumLogo.svg";


// Collections Image
import Card1 from "/assets/images/Card1.svg"
import Card2 from "/assets/images/Card2.svg"
import Card3 from "/assets/images/Card3.svg"
import Card4 from "/assets/images/Card4.svg"
import Card5 from "/assets/images/Card5.svg"
import Card6 from "/assets/images/Card6.svg"
import Card7 from "/assets/images/Card7.svg"
import Card8 from "/assets/images/Card8.svg"
import Card9 from "/assets/images/Card9.svg"

import youtube from "/assets/icons/youtube.svg";
import discord from "/assets/icons/discord.svg";
import instagram from "/assets/icons/instagram.svg";

export const FeaturedArtworkContent = {
    cards: [
        {
          section: "Art",
          img: Card1,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
        {
          section: "Art",
          img: Card2,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
        {
          section: "Art",
          img: Card3,
          owner: "@Johny",
          billType: "Current Bid",
          bill: "0.005 ETH",
          productName: "Yellow Painting",
        },
    ]
};

export const collectionsContent = {
  sectionName: "Collections",
  secDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  btns: [
    {
      name: "Art",
      style: "",
    },
    {
      name: "Sport",
      style: "",
    },
    {
      name: "Photography",
      style: "",
    },
    {
      name: "Pattern",
      style: "",
    },
  ],
  cards: [
    { 
      id: "1",
      section: "Art",
      img: Card1,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "2",
      section: "Art",
      img: Card2,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "3",
      section: "Art",
      img: Card3,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "4",
      section: "Sport",
      img: Card4,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "5",
      section: "Sport",
      img: Card5,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "6",
      section: "Sport",
      img: Card6,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "7",
      section: "Photography",
      img: Card7,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
      
    },
    {
      id: "8",
      section: "Photography",
      img: Card8,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
    {
      id: "9",
      section: "Photography",
      img: Card9,
      owner: "@Johny",
      billType: "Current Bid",
      bill: "0.005 ETH",
      productName: "Yellow Painting",
      active: false,
    },
  ],
};

export const icons = [
  { src: binanceLogo, alt: "Binance_logo", style: "aspect-5/1" },
  { src: ethereumLogo, alt: "EthereumLogo", style: "aspect-16/5" },
  { src: blockChain, alt: "Blockchain", style: "aspect-33/5" },
];

export const navbarContent = {
  logo: {
    psychoArt,
    alt: "logo",
  },
  icons: { magnifyingGlass: search, alt: "searchIcon" },
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
  image: HeroImage,
};

export const aboutUsContent = {
  section: "About Us",
  sectionDescription:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tittle: "Get Popular NFT",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.",
};

export const askedQuestionContent = {
  sectionTitle: "Frequently Asked Question",
  SectionDesceiption: "Wanna Ask Something",
  questions: [
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
    "Lorem ipsum ipsum ?",
  ],
};

export const footerContent = {
  projectDetails: {
    projectName: psychoArt,
    projectOverView:
      "The best NFT marketplace website in the world and feel your experience in selling or buy our work",
  },
  about: [
    {
      page: "Product",
      Link: "#",
    },
    {
      page: "Resource",
      Link: "#",
    },
    {
      page: "Term & Condition",
      Link: "#",
    },
    {
      page: "FAQ",
      Link: "#",
    },
  ],
  company: [
    {
      page: "Our Team",
      Link: "#",
    },
    {
      page: "Our Partners",
      Link: "#",
    },
    {
      page: "Privacy & Policy",
      Link: "#",
    },
    {
      page: "Features",
      Link: "#",
    },
  ],
  contact: {
    phoneNumber: "+012 3456789",
    email: "adorableprogrammer@gmail.com",
    socialMedias: [
      {
        plateform: youtube,
        Link: "#",
      },
      {
        plateform: discord,
        Link: "#",
      },
      {
        plateform: instagram,
        Link: "#",
      },
    ],
  },
};

export const creator = {
  name: "Zarror",
}
