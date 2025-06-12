import { NAVBAR_LIST } from "../../../constant/navbar";
import { Link } from "react-scroll";

const NavbarBigScreen = () => {
  return (
    <>
      <h1 className="font-black text-3xl">CH.</h1>
      <ul className="flex text-xl gap-32">
        {NAVBAR_LIST.map((item, index) => (
          <li
            className="hover:tracking-widest duration-200 cursor-pointer"
            key={index}
          >
            <Link to={item.link} smooth={true} duration={100}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarBigScreen;
