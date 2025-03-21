import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { ShortTermIcon } from "@/components/SVGCollections";
import { CiClock2 } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

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

export const consultingBlog = [
  {
    image: "/blog-1.png",
    title: "HR Consulting",
    description:
      "There are many variations of passages of lorem ipsum is simply free text available in the market, but the majority time you put aside to be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "Helping Clients to Solve Recruitments Problems",
    content:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

export const whyChoose: { title: string; icon: IconType }[] = [
  {
    title: "Short Term <br/> Hiring",
    icon: ShortTermIcon,
  },
  {
    title: "Last Minute <br/> Hiring",
    icon: CiClock2,
  },
  {
    title: "Administration <br/> Rules",
    icon: IoDocumentTextOutline,
  },
];

export const serviceBenefits = [
  "Cost Effective",
  "Equal Opportunities",
  "Creates High Brand Awareness",
  "Higher ROI",
];
