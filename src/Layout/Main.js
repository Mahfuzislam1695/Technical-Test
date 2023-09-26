import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex relative overflow-x-hidden bg-[#F3F4F6]">
      <div className={` h-screen w-full relative`}>
        <Navbar />
        <div className="pt-14">
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
