import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MENU_ICONS = [
  {
    icon: (
      <FaInstagram className="hover:text-[#C13584] duration-300" size={18} />
    ),
    url: "https://www.instagram.com/",
  },
  {
    icon: <FaYoutube className="hover:text-[#FF0000] duration-300" size={20} />,
    url: "https://www.youtube.com",
  },
  {
    icon: (
      <FaXTwitter className="hover:text-[#1DA1F2] duration-300" size={18} />
    ),
    url: "https://www.twitter.com",
  },
];

export { MENU_ICONS };
