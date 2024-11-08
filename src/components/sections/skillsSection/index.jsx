import React from "react";
import { Mapping } from "../../../mapping";
import { SKILLS_ICONS } from "../../../constant/skills";
import { Element } from "react-scroll";

const SkillsSection = () => {
  return (
    <Element name="skills" className="flex justify-center">
      <div className="flex flex-col items-center gap-16 py-28 sk-wrapper-content w-[1920px]">
        <div>
          <h2 className="text-xl">Skills.</h2>
          <h1 className="text-5xl font-black">My Ability</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <Mapping
            of={SKILLS_ICONS}
            render={(item, index) => (
              <div
                className="flex flex-col w-[270px] h-[270px] justify-center items-center p-5 gap-3 bg-neutral-900 text-neutral-100 hover:rounded-xl  duration-200 group"
                key={index}
              >
                {item.icon}
                <h1 className="text-2xl font-semibold group-hover:tracking-widest duration-200">
                  {item.title}
                </h1>
                <p className="text-center">{item.desc}</p>
              </div>
            )}
          />
        </div>
      </div>
    </Element>
  );
};

export default SkillsSection;
