import React from "react";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";

const AboutSection = () => {
  const isScreen = useMediaQuery({ query: "(max-width 480px)" });

  return (
    <Element name="about" className="flex justify-center h-fit bg-neutral-100">
      <div className="ab-wrapper-content py-28 flex justify-center items-center gap-48 aw-[1920px]">
        <div className="overflow-hidden hover:rounded-md hover:shadow-2xl shadow-black duration-200">
          <img className="w-[300px]" src="./PP.jpg" />
        </div>
        <div className="ab-wrapper-desc flex flex-col items-center">
          <h2 className="text-5xl font-black mb-3">ABOUT ME</h2>
          <h1 className="text-xl font-medium underline">Hello, I'am Chlyn.</h1>
          {isScreen ? (
            <div className="flex flex-col gap-3 text-center ">
              <p>
                Hello, let me introduce myself, my name is Chlyn Havia, I come
                from Indonesia, I live in Probolinggo, my hobbies are editing,
                designing, sports and playing games.
              </p>
              <p>
                I am a Front-End Web Developer, I have been experienced in this
                field for about 1 year, I have no work experience but I am sure
                I can make a good website according to your request.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-center ">
              <p>
                Hello, let me introduce myself, my name is Chlyn Havia, I come
                from Indonesia, <br /> I live in Probolinggo, my hobbies are
                editing, designing, sports and playing games.
              </p>
              <p>
                I am a Front-End Web Developer, I have been experienced in this
                field <br /> for about 1 year, I have no work experience but I
                am sure I can make a good <br /> website according to your
                request.
              </p>
            </div>
          )}
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
