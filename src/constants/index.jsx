import { BsGithub, BsInstagram, BsMessenger } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import houseMaketplace from "../assets/housemarketplace.jpg";

export { default as htmlLogo } from "../assets/html5.svg";
export { default as cssLogo } from "../assets/css3.svg";
export { default as scssLogo } from "../assets/scss.svg";
export { default as jsLogo } from "../assets/js.svg";
export { default as tailwindcssLogo } from "../assets/tailwindcss.svg";
export { default as reactLogo } from "../assets/react.svg";
export { default as reactQueriesLogo } from "../assets/react-queries.svg";
export { default as rapidapiLogo } from "../assets/rapidapi.svg";
export { default as gitLogo } from "../assets/git.svg";
export { default as materialuiLogo } from "../assets/materialui.svg";

export const navLinks = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About me",
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
    link: "ig.me/m/thekarthikr",
    icon: <BsMessenger />,
    name: "Messenger",
  },
];

export const project = [
  {
    title: "House Marketplace",
    description:
      "This is a web application built using React JS and Firebase. It is designed to help users find houses for sale or rent, and to allow users to list their properties for others to find. Users can login and sign up using Google or their email and password. They can then create, edit, and delete their property listings, as well as view the location of their property on a Leaflet map.",
    liveLink: "https://house-marketplaceapp.vercel.app",
    githubLink: "https://github.com/thekarthikr/house-marketplace",
    img: houseMaketplace,
  },
];
