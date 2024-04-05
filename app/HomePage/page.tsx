import Nav from "@/components/Shared/Nav";
import React from "react";
import HomeHeader from "../Sections/HomeHeader/HomeHeader";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <HomeHeader />
      </div>
    </div>
  );
};

export default HomePage;
