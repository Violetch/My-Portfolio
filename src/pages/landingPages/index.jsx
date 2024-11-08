import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";
import HomeSection from "../../components/sections/homeSection";
import Navbar from "../../components/modules/navbar";
import AboutSection from "../../components/sections/aboutSection";
import SkillsSection from "../../components/sections/skillsSection";
import ProjectSection from "../../components/sections/projectSection";
import Footer from "../../components/modules/footer";

const LandingPages = () => {
  return (
    <HomeLayout>
      <Navbar />
      <HomeSection />
      <div className="bg-neutral-900/30 mx-auto hr h-[1px]"></div>
      <AboutSection />
      <div className="bg-neutral-900/30 mx-auto hr h-[1px]"></div>
      <SkillsSection />
      <div className="bg-neutral-900/30 mx-auto hr h-[1px]"></div>
      <ProjectSection />
      <div className="bg-neutral-900/30 mx-auto hr h-[1px]"></div>
      <Footer />
    </HomeLayout>
  );
};

export default LandingPages;
