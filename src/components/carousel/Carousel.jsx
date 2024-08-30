import { LeftSumIcon } from "../svg/LeftSumIcon";
import { RightSumIcon } from "../svg/RightSumIcon";

export const Carousel = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8 max-w-7xl">
        <div
          className="h-[600px] flex justify-start items-end pl-[5px] pb-[5px]"
          style={{
            backgroundImage: `url(https://musiprof.com/wp-content/uploads/2024/03/piano-1.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <div className=" w-[40%] flex flex-col   border-[1px] border-[var(--bordercolor)] rounded-[12px]  bg-[var(--textwhite)] p-[40px]">
            <div>
              <span className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
                Technology
              </span>
            </div>
            <div className="flex flex-col gap-[8px] mt-[16px]">
              <span className="text-[36px] leading-[40px] font-[600]">
                Grid system for better Design User Interface
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
