import { useMediaQuery } from "react-responsive";
import NavbarBigScreen from "./NavbarBigScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";

const Navbar = () => {
  const isScreen = useMediaQuery({ query: "(max-width: 1150px)" });
  return (
    <div className="flex fixed w-full justify-center z-10">
      <div className="na-wrapper-content w-[1920px] flex justify-between py-8 items-center text-neutral-900">
        {isScreen ? <NavbarSmallScreen /> : <NavbarBigScreen />}
      </div>
    </div>
  );
};

export default Navbar;
