import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const HomeSection = () => {
  return (
    <Element
      name="home"
      className="flex justify-center h-screen text-neutral-900"
    >
      <div className="ho-wrapper-content flex flex-col py-28 justify-center items-center text-center">
        <h2 className="text-8xl tracking-tighter mt-auto">CHLYN</h2>
        <h1 className="text-[14em] font-black tracking-tighter -mt-[70px] ">
          HAVIA
        </h1>
        <h3 className="text-2xl tracking-[21px] -mt-[90px] ml-[52px]">
          Front-End Developer
        </h3>
        <p className="text-center mt-7 text-xl tracking-wide">
          Hello, my name is Chlynhavia you can call me Chlyn <br /> i'am a
          Front-End Web Developer
        </p>
        <Link
          className="mt-auto hover:bg-neutral-900 rounded-full p-2 duration-200 group"
          to="about"
          smooth={true}
          duration={100}
        >
          <MdKeyboardDoubleArrowDown
            className="group-hover:text-white duration-200"
            size={25}
          />
        </Link>
      </div>
    </Element>
  );
};

export default HomeSection;
