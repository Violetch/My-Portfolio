import React, { useState } from "react";
import { Mapping } from "../../../mapping";
import { NAVBAR_LIST } from "../../../constant/navbar";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MENU_ICONS } from "../../../constant/menu";

const NavbarSmallScreen = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <h1 className="font-black text-3xl">CH</h1>
      <motion.div
        initial={{ translateX: isMenu ? "0" : "30px", opacity: isMenu ? 1 : 0 }}
        animate={{ translateX: isMenu ? "30px" : "0", opacity: isMenu ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <HiBars3BottomRight size={30} onClick={() => setIsMenu(true)} />
      </motion.div>
      {isMenu ? (
        <motion.div
          className="nm-wrapper-content flex flex-col px-16 py-12 h-screen bg-neutral-900/90 absolute inset-0 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-fit ml-auto"
            initial={{ rotateZ: "90deg" }}
            animate={{ rotateZ: "0" }}
            transition={{ duration: 0.3 }}
          >
            <IoCloseOutline size={30} onClick={() => setIsMenu(false)} />
          </motion.div>
          <ul className="my-auto flex flex-col text-xl gap-5">
            <Mapping
              of={NAVBAR_LIST}
              render={(item, index) => (
                <motion.li
                  className="flex gap-2 cursor-pointer"
                  key={index}
                  initial={{
                    translateY: "-50px",
                    opacity: 0,
                  }}
                  animate={{
                    translateY: "0",
                    opacity: 1,
                  }}
                  transition={{ delay: item.delay, transition: 0.3 }}
                >
                  <h6
                    className={`text-neutral-400  -mt-[6px] text-[15px] ${
                      activeIndex === index
                        ? "opacity-0 -translate-y-3"
                        : "opacity-1"
                    } duration-300`}
                  >
                    {item.number}
                  </h6>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={100}
                    className="tracking-wider hover:translate-x-3 duration-300 text-5xl font-black"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              )}
            />
          </ul>
          <div className="flex justify-center items-center mx-auto gap-12">
            <Mapping
              of={MENU_ICONS}
              render={(item, index) => (
                <a key={index} href={item.url}>
                  {item.icon}
                </a>
              )}
            />
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavbarSmallScreen;
