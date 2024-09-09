import { useEffect, useState } from "react";
import { LeftSumIcon } from "../svg/LeftSumIcon";
import { RightSumIcon } from "../svg/RightSumIcon";
import { DateGenerate } from "../blog-post/DateGenerate";
import Link from "next/link";

export const Carousel = ({
  prevSlide,
  nextSlide,
  backurl,
  url,
  tag,
  description,
  time,
}) => {
  const toUpperCase = (name) => {
    const names = name?.split(``);
    if (names) {
      return names[0].toUpperCase() + names.slice(1).join(``);
    }
  };

  return (
    <div className="w-full hidden md:flex justify-center ">
      <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8 max-w-7xl ">
        <Link
          href={`/blog-list/${backurl}`}
          className="h-[600px] flex justify-start items-end pl-[5px] pb-[5px] transition-all ease-linear duration-300"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-[50%] flex flex-col   border-[1px] border-[var(--bordercolor)] rounded-[12px]  bg-[var(--textwhite)] p-[40px]">
            <div>
              <button className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
                {toUpperCase(tag)}
              </button>
            </div>
            <div className="flex flex-col gap-[8px] mt-[16px]">
              <span className="text-[14px] md:text-[36px] leading-[40px] font-[600]">
                {description}
              </span>
            </div>
            <span className="mt-[24px] text-[16px] leading-[24px] font-[400] text-[var(--textgrey)]">
              <DateGenerate time={time} />
            </span>
          </div>
        </Link>

        <div className="flex justify-end gap-[8px] ">
          <button onClick={prevSlide}>
            <LeftSumIcon />
          </button>
          <button onClick={nextSlide}>
            <RightSumIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
