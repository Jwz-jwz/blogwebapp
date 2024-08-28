import { LeftSumIcon } from "./LeftSumIcon";
import { RightSumIcon } from "./RightSumIcon";

export const Hero = () => {
  return (
    <div className="w-full relative top-[100px] flex justify-center">
      <div className=" container flex flex-col gap-[8px]">
        <div className="relative">
          <img className="container" src="./mainpic.png" alt="" />

          <div className="flex flex-col gap-[24px] absolute left-[10px] bottom-[10px] bg-[var(--textwhite)] p-[40px] rounded-[12px] border-[1px] border-[var(--bordercolor)]">
            <div className="flex flex-col gap-[16px]">
              <p className="py-[4px] px-[10px] rounded-[6px] bg-[#4B6BFB] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)]">
                Technology
              </p>
              <p className="text-[36px] leading-[40px] font-[600]">
                Grid system for better Design User Interface
              </p>
            </div>
            <p className="text-[16px] leading-[24px] font-[400] text-[var(--textgrey)]">
              August 20, 2022
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-[8px] ">
          <button>
            <LeftSumIcon />
          </button>
          <button>
            <RightSumIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
