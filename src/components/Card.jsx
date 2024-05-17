import React, { useState } from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdLightbulbOutline } from "react-icons/md";

const Card = () => {
  const [flipCard, setFlipCard] = useState(false);
  return (
    <>
      <div
        className={`relative transition-transform duration-700 cursor-pointer max-w-[44.5rem] h-[393px] w-full [transform-style:preserve-3d]
      ${flipCard && "[transform:rotateY(180deg)] [perspective:300px] "}
      `}
        onClick={() => setFlipCard(!flipCard)}
      >
        {/* card 1 */}
        <div
          className="absolute top-0 left-0 bg-gradient-to-tr from-[#2284F1] to-[#051A91] w-full h-full rounded-[42px] z-10 [backface-visibility:hidden]
        flex flex-col items-center
        "
        >
          <div className=" mt-7 items-start w-full flex justify-between px-14">
            <MdLightbulbOutline className="text-white text-[34px]" />
            <IoMdVolumeHigh className="text-white text-[34px] " />
          </div>
          <h1 className="text-white font-bold mt-28 text-lg  sm:text-[2rem]">9 + 6 + 7x - 2x - 3</h1>
        </div>

        {/* card 1 */}
        <div className="absolute top-0 left-0 bg-gradient-to-tr from-[#2d87b6] to-[#091e4a] w-full h-full rounded-[42px]  flex flex-col items-center [transform:rotateY(180deg)]  ">
          <div className=" mt-7 items-start w-full flex justify-between px-14">
            <MdLightbulbOutline className="text-white text-[34px]" />
            <IoMdVolumeHigh className="text-white text-[34px] " />
          </div>
          <h1 className="text-white font-bold mt-28 text-2xl">5x + 12</h1>
        </div>
      </div>

      {/* <div className=" w-full max-w-[30rem] md:max-w-[44.5rem] h-[393px]   group  [perspective:1000px]">
        <div className="w-full h-full transition-all duration-1000 [transform-style:preserve-3d] rounded-[42px] bg-gradient-to-tr from-[#2284F1] to-[#051A91]  group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center">
            <div className=" mt-7 items-start w-full flex justify-between px-14">
              <MdLightbulbOutline className="text-white text-[34px]" />
              <IoMdVolumeHigh className="text-white text-[34px] " />
            </div>
            <h1 className="text-white font-bold mt-28 text-2xl">23-3x-34d</h1>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
