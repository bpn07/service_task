import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

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
