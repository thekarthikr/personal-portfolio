import { BsGithub, BsInstagram, BsMessenger } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { SiFirebase, SiLeaflet, SiCss3 } from "react-icons/si";

import houseMaketplace from "../assets/housemarketplace.jpg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css3.svg";
import scssLogo from "../assets/scss.svg";
import jsLogo from "../assets/js.svg";
import tailwindcssLogo from "../assets/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import reactQueryLogo from "../assets/react-queries.svg";
import rapidapiLogo from "../assets/rapidapi.svg";
import gitLogo from "../assets/git.svg";
import materialuiLogo from "../assets/materialui.svg";

export const navLinks = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Projects",
  },
  {
    id: 4,
    name: "Contact",
  },
];

export const socialLinks = [
  {
    link: "https://github.com/thekarthikr",
    icon: <BsGithub />,
    name: "Github",
  },
  {
    link: "https://linkedin.com/in/thekarthikr",
    icon: <FaLinkedinIn />,
    name: "Linked In",
  },
  {
    link: "https://instagram.com/thekarthikr",
    icon: <BsInstagram />,
    name: "Instagram",
  },
];

export const contactLinks = [
  {
    link: "mailto:info@karthikwebdev.me",
    icon: <BiMailSend />,
    name: "Send Mail",
  },
  {
    link: "https://ig.me/m/thekarthikr",
    icon: <BsMessenger />,
    name: "Messenger",
  },
];

export const techStacks = [
  {
    name: "HTML5",
    img: htmlLogo,
    className: "html5",
  },
  {
    name: "CSS3",
    img: cssLogo,
    className: "css3",
  },
  {
    name: "SCSS",
    img: scssLogo,
    className: "scss",
  },
  {
    name: "Tailwind CSs",
    img: tailwindcssLogo,
    className: "tailwindcss",
  },
  {
    name: "Javascript",
    img: jsLogo,
    className: "javascript",
  },
  {
    name: "React Js",
    img: reactLogo,
    className: "reactjs",
  },
  {
    name: "React Query",
    img: reactQueryLogo,
    className: "react-query",
  },
  {
    name: "Material UI",
    img: materialuiLogo,
    className: "material-ui",
  },
  {
    name: "Git",
    img: gitLogo,
    className: "git",
  },
  {
    name: "Rapid API",
    img: rapidapiLogo,
    className: "rapid-api",
  },
];

export const project = [
  {
    title: "House Marketplace",
    description:
      "A React JS and Firebase web app for property search and listing. Users can login/sign up, manage listings, and view locations on a Leaflet map. Simplifies finding and listing houses.",
    liveLink: "https://house-marketplaceapp.vercel.app",
    githubLink: "https://github.com/thekarthikr/house-marketplace",
    img: houseMaketplace,
    tech: [<RiReactjsFill />, <SiFirebase />, <SiLeaflet />, <SiCss3 />],
  },
];
