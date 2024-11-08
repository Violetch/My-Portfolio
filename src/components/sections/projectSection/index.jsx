import React from "react";
import { Mapping } from "../../../mapping";
import { Element } from "react-scroll";
import { PROJECT_LIST } from "../../../constant/project";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <Element name="project" className="flex justify-center bg-neutral-100">
      <div className="flex flex-col items-center gap-16 py-28 sk-wrapper-content w-[1920px]">
        <div>
          <h2 className="text-xl">Project.</h2>
          <h1 className="text-5xl font-black">My Project</h1>
        </div>
        <div className="pr-wrapper-project flex flex-wrap justify-center items-center gap-12">
          <Mapping
            of={PROJECT_LIST}
            render={(item, index) => (
              <div
                className="flex flex-col w-[450px] h-fit overflow-hidden bg-neutral-900 hover:rounded-xl duration-200 group text-neutral-100 group"
                key={index}
              >
                <img
                  className="w-[470px] group-hover:shadow-2xl group-hover:shadow-white/20 filter grayscale group-hover:grayscale-0 duration-200"
                  src={item.img}
                />
                <div className="flex flex-col gap-2 p-6">
                  <h1 className="text-3xl font-black group-hover:tracking-wider duration-200">
                    {item.title}
                  </h1>
                  <p className="">{item.desc}</p>
                  <button className="w-fit border font-semibold tracking-wider border-neutral-100 px-7 hover:px-10 py-2 hover:rounded-xl hover:bg-neutral-100 hover:text-neutral-900 duration-200">
                    <Link to={item.url}>{item.buttonTitle}</Link>
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </Element>
  );
};

export default ProjectSection;
