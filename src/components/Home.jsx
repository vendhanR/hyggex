import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { LuRotateCw } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import logo2 from "../assets/logo2.png";
import logoName from "../assets/logoName.png";
import { BiPlus } from "react-icons/bi";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Card from "./Card";

const Home = () => {
  const [fullScreen, setFullScreen] = useState(false);
  function handleFullScreen(type) {
    const docs = document.documentElement;
    if (type === "fullScreen") {
      docs.requestFullscreen();
      setFullScreen(true);
    } else if (type === "exitFullScreen") {
      setFullScreen(false);
      document.exitFullscreen();
    }
  }
  return (
    <>
      <Navbar />
      {/* navigation */}
      <div className="flex pt-16 items-center gap-1 text-[0.600rem] sm:text-[1rem]">
        <Link to={"/"}>
          <GoHome className="text-2xl  hover:text-[#06286E]" />
        </Link>
        <IoIosArrowBack className="rotate-180 text-black" />
        <Link to={"/flashcard"} className=" hover:text-[#06286E] ">
          Flashcard
        </Link>
        <IoIosArrowBack className="rotate-180 text-black" />
        <Link to={"mathematics"} className=" hover:text-[#06286E]">
          Mathematics
        </Link>
        <IoIosArrowBack className="rotate-180 text-black" />
        <Link to={"/"} className="text-[#06286E] font-semibold">
          Relation and Function
        </Link>
      </div>

      {/* heading */}
      <h1 className="pt-16 text-[0.850rem] whitespace-nowrap sm:text-xl md:text-2xl w-full font-bold  bg-gradient-to-b from-[#06286E] to-[#164EC0]  text-transparent bg-clip-text heading">
        Relations and Functions ( Mathematics )
      </h1>

      {/* content  */}
      <div className="pt-14 flex flex-col justify-center items-center ">
        <div className="flex gap-6 sm:gap-14 font-medium text-[#696671]">
          {/* card navs */}
          <p className="font-bold text-[#06286E] border-b-2  border-b-[#06286E] px-2 pb-1">
            Study
          </p>
          <p className="hover:text-[#06286E] cursor-pointer hover:border-b-[#06286E] hover:border-b-2 duration-75">
            Quiz
          </p>
          <p className="hover:text-[#06286E] cursor-pointer hover:border-b-[#06286E] hover:border-b-2 duration-75">
            Test
          </p>
          <p className="hover:text-[#06286E] cursor-pointer hover:border-b-[#06286E] hover:border-b-2 duration-75">
            Game
          </p>
          <p className="hover:text-[#06286E] cursor-pointer hover:border-b-[#06286E] hover:border-b-2 duration-75">
            Others
          </p>
        </div>
        <div className="pt-8 w-full flex flex-col justify-center items-center ">
          <Card />

          {/* card bottom */}
          <div className="flex justify-between pt-8 px-7 sm:px-10 max-w-[30rem] md:max-w-[44.5rem] w-full">
            <LuRotateCw className="w-8 h-8 sm:w-12 sm:h-12 " />
            <div className="flex gap-5 items-center">
              <IoIosArrowBack className="text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 p-2 bg-gradient-to-b to-[#164EC0]  from-[#06286E]" />
              <p className="font-bold bg-gradient-to-b to-[#164EC0] from-[#06286E] text-transparent bg-clip-text ">
                1 / 10
              </p>
              <IoIosArrowBack className="text-white rotate-180 rounded-full w-8 h-8 sm:w-12 sm:h-12 p-2 bg-gradient-to-t to-[#164EC0]  from-[#06286E] " />
            </div>
            {fullScreen ? (
              <MdOutlineCloseFullscreen
                className="w-8 h-8 sm:w-12 sm:h-12"
                onClick={() => handleFullScreen("exitFullScreen")}
              />
            ) : (
              <MdFullscreen
                className="w-8 h-8 sm:w-12 sm:h-12"
                onClick={() => handleFullScreen("fullScreen")}
              />
            )}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mt-20 gap-1">
        <div className="flex">
          <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-full shadow-[0_0_31px_rgba(8,56,153,0.4)]">
            <span>
              <img
                src={logo2}
                className="w-6 h-[24px] sm:w-11 sm:h-[34px]"
                alt="logo"
              />
            </span>
          </div>
          <div className="pl-[0.728rem] sm:pl-[1.328rem]">
            <p className="font-bold text-[#696671] text-[0.475rem] sm:text-[0.775rem]">
              Published by
            </p>
            <img
              src={logoName}
              className="w-[4rem] h-[1.159rem] sm:w-[7rem] sm:h-[2.159rem] mt-[0.664rem]"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex items-center ">
          <BiPlus className="mr-[0.413rem] sm:mr-[0.813rem] w-[2.125rem] sm:w-[3.125rem] h-[2.125rem] sm:h-[3.125rem] text-white rounded-full text-3xl  bg-gradient-to-b to-[#164EC0] from-[#06286E] " />
          <h1 className="text-base whitespace-nowrap sm:text-2xl font-bold bg-gradient-to-b to-[#164EC0] from-[#06286E] text-transparent bg-clip-text">
            Create Flashcard
          </h1>
        </div>
      </div>
      <div className="mt-[9.65rem]">
        <h2 className="faq  text-3xl font-bold  bg-gradient-to-b to-[#164EC0] from-[#06286E] text-transparent bg-clip-text heading">
          FAQ
        </h2>

        {/* FAQ */}
        <FAQ
          question={"Can education flashcards be used for all age groups?"}
          answer={
            "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolres, elementary school students, high school students, and even for college-level and adult learners."
          }
        />
        <FAQ
          question={"How do education flashcards work?"}
          answer={
            "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. User can review the cards repeatedly, reinforcing their memory and enhancing learning through reptition."
          }
        />
        <FAQ
          lastAccordion={true}
          question={"Can education flashcards be used for test preparation?"}
          answer={
            "Absolutely, Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowladge before exams."
          }
        />
      </div>
    </>
  );
};

export default Home;
