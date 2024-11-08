import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col relative overflow-hidden h-fit w-full">
      {children}
    </div>
  );
};

export default HomeLayout;
