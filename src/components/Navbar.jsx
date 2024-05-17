import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="flex place-content-between items-center pt-8 pb-1  ">
      <div className="">
        <img className="w-[8rem] md:w-[11.938rem]" src={logo} alt="logo" />
      </div>
      <div className="md:flex gap-4 justify-center items-center  hidden ">
        <p className="hover:text-[#06286E] cursor-pointer">Home</p>
        <p className="hover:text-[#06286E] cursor-pointer">Flashcard</p>
        <p className="hover:text-[#06286E] cursor-pointer">Contact</p>
        <p className="hover:text-[#06286E] cursor-pointer">FAQ</p>
        <button className="px-7 py-2 bg-blue-500 rounded-[32px] text-white bg-gradient-to-b to-[#164EC0] from-[#06286E] font-medium hover:scale-110 duration-100">
          Login
        </button>
      </div>

      <div className="md:hidden" onClick={() => setShowNavbar(!showNavbar)}>
        <IoReorderThreeOutline className="text-3xl hover:scale-125 active:scale-95 duration-100" />
      </div>
      {showNavbar && (
        <>
          <div className="md:hidden realative ">
            <div className="absolute inset-0 opacity-100 z-50 bg-slate-400 flex flex-col gap-4 justify-center items-center">
              <div
                className="md:hidden"
                onClick={() => setShowNavbar(!showNavbar)}
              >
                <RiCloseLargeFill className="text-3xl text-white active:rotate-90 duration-200 hover:text-[#06286E] cursor-pointer" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center text-white">
                <p className="hover:underline hover:text-[#06286E] cursor-pointer">Home</p>
                <p className="hover:underline hover:text-[#06286E] cursor-pointer">Flashcard</p>
                <p className="hover:underline hover:text-[#06286E] cursor-pointer">Contact</p>
                <p className="hover:underline hover:text-[#06286E] cursor-pointer">FAQ</p>
                <button className="px-7 py-2 bg-blue-500 rounded-[32px] text-white bg-gradient-to-b to-[#164EC0]  from-[#06286E] font-medium hover:scale-110 duration-100">
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
