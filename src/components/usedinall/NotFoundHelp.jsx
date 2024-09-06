import Link from "next/link";
import { TagTrending } from "../trending/TagTrending";
import { SmallTextGrey } from "./SmalTextGrey";

export const NotFoundHelp = () => {
  return (
    <div className="w-full flex justify-center mt-[200px]">
      <div className="w-[28%] h-[208px] flex gap-[40px] p-3">
        <p className="flex items-center text-[72px] font-[400] leading-[72px]">
          404
        </p>
        <p className="border-l-[1px] border-[#E8E8EA]"></p>
        <div className="flex flex-col justify-center gap-[20px] py-2">
          <h1 className="text-[24px] font-[600] leading-[40px]">
            Page Not Found
          </h1>

          <SmallTextGrey
            text={
              "We're sorry, This page is unknown or does not exist the page you are looking for."
            }
          />
          <div>
            <button className="">
              <Link
                className="px-[16px] py-[10px] text-[12px] font-[500] leading-[20px] rounded-[6px] text-white bg-[#4B6BFB]"
                href="/"
              >
                Back to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
