import { SmallText } from "./SmallText";
import { MetaBlog } from "./svg/MetaBlog";
import { SearchIcon } from "./svg/SearchIcon";

export const Header = () => {
  return (
    <div className="w-full fixed flex justify-center items-center">
      <div className="container md:py-[32px] flex justify-between">
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
          <input placeholder="Search" className="bg-[#F4F4F5]" type="text" />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
