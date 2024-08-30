import { MetaBlog } from "../svg/MetaBlog";
import { SearchIcon } from "../svg/SearchIcon";
import { SmallText } from "./SmallText";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container fixed z-50 bg-white md:py-[32px] flex justify-between px-[32px] max-w-7xl">
        <MetaBlog />
        <div className="flex gap-[40px] items-center justify-between">
          <button>
            <SmallText text={"Home"} />
          </button>
          <button>
            <SmallText text={"Blog"} />
          </button>
          <button>
            <SmallText text={"Contact"} />
          </button>
        </div>
        <div className="flex items-center rounded-[5px] justify-between py-[8px] pr-[8px] pl-[16px] gap-[12px] bg-[#F4F4F5]">
          <input
            placeholder="Search"
            className="border-none outline-none bg-[#F4F4F5]"
            type="text"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
