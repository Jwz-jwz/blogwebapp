import Link from "next/link";
import { MenuSvg } from "../svg/MenuSvg";
import { MetaBlog } from "../svg/MetaBlog";
import { SearchIcon } from "../svg/SearchIcon";
import { SmallText } from "./SmallText";
import { useEffect, useState } from "react";

export const Header = ({ changeFunction }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="container fixed z-50 bg-white md:py-[32px] flex justify-between px-[32px] max-w-7xl">
        <Link href="/">
          <MetaBlog />
        </Link>
        <div className="hidden md:flex gap-[40px] items-center justify-between">
          <Link href="/">
            <SmallText text={"Home"} />
          </Link>

          <Link href="/blog-list">
            <SmallText text={"Blog"} />
          </Link>

          <Link href="/contact-us">
            <SmallText text={"Contact"} />
          </Link>
        </div>
        <div className="hidden md:flex items-center rounded-[5px] justify-between py-[8px] pr-[8px] pl-[16px] gap-[12px] bg-[#F4F4F5]">
          <input
            placeholder="Search"
            className="hidden md:block border-none outline-none bg-[#F4F4F5]"
            type="text"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={changeFunction}>
            <MenuSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
