import { BsGithub, BsInstagram, BsMessenger } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import houseMaketplace from "../assets/housemarketplace.jpg";
import articleSummarizer from "../assets/ai.jpeg";
import youtubeClone from "../assets/youtube-mockup.jpg";
import movieapp from "../assets/movieapp.png";
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
import firebaseLogo from "../assets/firebase.svg";
import chakrauiLogo from "../assets/chakraui.svg";

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
    name: "Mail",
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
  // {
  //   name: "React Query",
  //   img: reactQueryLogo,
  //   className: "react-query",
  // },
  {
    name: "Chakra UI",
    img: chakrauiLogo,
    className: "chakra-ui",
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
    id: 1,
    title: "House Marketplace",
    description:
      "A React JS and Firebase web app for property search and listing. Users can login/sign up, manage listings, and view locations on a Leaflet map. Simplifies finding and listing houses.",
    liveLink: "https://house-marketplaceapp.vercel.app",
    githubLink: "https://github.com/thekarthikr/house-marketplace",
    img: houseMaketplace,
    tech: ["Reactjs", "Firebase", "Leaflet Map", "CSS"],
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    description:
      "Summarize articles by pasting their URLs into the input field. The summarized article is stored in the local storage of the browser for future reference.",
    liveLink: "https://article-summarizer-app.netlify.app/",
    githubLink: "https://github.com/thekarthikr/article-summarizer",
    img: articleSummarizer,
    tech: ["Reactjs", "Rapid API", "Tailwindcss"],
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "The YouTube Clone React app offers a user-friendly web interface for searching, watching, and browsing videos. It includes video details, channel information, and comment viewing, emulating the core functionalities of YouTube.",
    liveLink: "https://youtube-clone-reactappp.netlify.app/",
    githubLink: "https://github.com/thekarthikr/youtube-clone",
    img: youtubeClone,
    tech: ["Reactjs", "Rapid API", "Material UI"],
  },
  {
    id: 4,
    title: "Flixx Web Application",
    description:
      "Flixx is a movie website that allows users to browse popular movies and TV shows, search for their favorite titles, and view details about each movie or TV show. Users can also see cast details and their movies.",
    liveLink: "https://flixxmovieapp.netlify.app/",
    githubLink: "https://github.com/thekarthikr/flixx-movie-app",
    img: movieapp,
    tech: ["Vanilla Js", "TMDB API", "CSS"],
  },
];
