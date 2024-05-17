import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Flashcard = () => {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 items-center gap-1  ">
      <Link to={'/'}><GoHome className="text-2xl" /> </Link>
        <IoIosArrowBack className="rotate-180 text-black" />
        <Link to={"/flashcard"} className="text-[#06286E] font-semibold">
          Flashcard
        </Link>
      </div>

      {/* heading */}
      <h1 className="pt-16 text-[0.850rem] whitespace-nowrap sm:text-xl md:text-2xl w-full font-bold  bg-gradient-to-b from-[#06286E] to-[#164EC0]  text-transparent bg-clip-text heading">
        Flashcard
      </h1>
    </>
  );
};

export default Flashcard;
