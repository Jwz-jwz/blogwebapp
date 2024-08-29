import { LeftSumIcon } from "../svg/LeftSumIcon";
import { RightSumIcon } from "../svg/RightSumIcon";

export const Carousel = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8">
        <div className="relative">
          <img className="w-[100%]" src="./mainpic.png" alt="" />
          <div className="flex flex-col borde-[1px] border-[var(--bordercolor)] rounded-[12px] absolute left-[10px] bottom-[10px] bg-[var(--textwhite)] p-[40px] pr-[150px]">
            <div>
              <span className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
                Technology
              </span>
            </div>
            <div className="flex flex-col gap-[8px] mt-[16px]">
              <span className="text-[36px] leading-[40px] font-[600]">
                Grid system for better
              </span>
              <span className="text-[36px] leading-[40px] font-[600]">
                Design User Interface
              </span>
            </div>
            <span className="mt-[24px] text-[16px] leading-[24px] font-[400] text-[var(--textgrey)]">
              August 20, 2022
            </span>
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
