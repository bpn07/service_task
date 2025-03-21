import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export const headerOptions: { type: string; link: string; icon: IconType }[] = [
  {
    type: "email",
    link: "needhelp@company.com",
    icon: MdEmail,
  },
  {
    type: "location",
    link: "30 Broklyn Golden Street. New York",
    icon: FaLocationPin,
  },
];

export const socialLinks: { link: string; icon: IconType }[] = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/",
  },
];

 export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];