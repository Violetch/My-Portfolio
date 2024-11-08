import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

const SKILLS_ICONS = [
  {
    icon: (
      <FaHtml5 className="group-hover:text-[#e34c26] duration-200" size={60} />
    ),
    title: "HTML",
    desc: "HTML is a markup language used to structure and define the content of a web page.",
  },
  {
    icon: (
      <FaCss3Alt
        className="group-hover:text-[#264de4] duration-200"
        size={60}
      />
    ),
    title: "CSS",
    desc: "CSS is a computer language for laying out and structuring web pages (HTML or XML).",
  },
  {
    icon: (
      <IoLogoJavascript
        className="group-hover:text-[#f0db4f] duration-200"
        size={60}
      />
    ),
    title: "JS",
    desc: "JavaScript is programming language to create interactive web applications.",
  },
  {
    icon: (
      <RiTailwindCssFill
        className="group-hover:text-[#a5f3fc] duration-200"
        size={60}
      />
    ),
    title: "TAILWIND",
    desc: "Tailwind CSS is a utility-first CSS framework that provides low-level.",
  },
  {
    icon: (
      <RiReactjsFill
        className="group-hover:text-[#61DBFB] duration-200"
        size={60}
      />
    ),
    title: "REACT JS",
    desc: "React.js is a JavaScript library for building user interfaces and creating interactive web.",
  },
];

export { SKILLS_ICONS };
