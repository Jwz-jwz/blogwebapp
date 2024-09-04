import Link from "next/link";
import { CloseSvg } from "../svg/CloseSvg";
import { MetaBlog } from "../svg/MetaBlog";
import { SearchIcon } from "../svg/SearchIcon";
import { SmallText } from "./SmallText";

export const Menu = ({ isShow, changeFunction }) => {
  return (
    <div
      className={`absolute transition-all ease-in duration-300  ${
        isShow ? "left-[=10%]" : "right-[100%]"
      } w-full flex flex-col justify-center p-4 pt-[30px] gap-[40px]`}
    >
      <div className="container flex flex-col items-start gap-[20px] ">
        <div className="container flex justify-between">
          <Link href="./">
            <MetaBlog />
          </Link>
          <button onClick={changeFunction}>
            <CloseSvg />
          </button>
        </div>
        <button className="">
          <Link href="./">
            <SmallText text={"Home"} />
          </Link>
        </button>
        <button>
          <Link href="./blog-list">
            <SmallText text={"Blog"} />
          </Link>
        </button>
        <button>
          <Link href="./contact-us">
            <SmallText text={"Contact"} />
          </Link>
        </button>
      </div>
      <div className=" container flex justify-end rounded-[5px] py-[8px] pr-[8px] pl-[16px] gap-[12px] bg-[#F4F4F5]">
        <input
          placeholder="Search"
          className="hidden md:block border-none outline-none bg-[#F4F4F5]"
          type="text"
        />
        <button className="">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
