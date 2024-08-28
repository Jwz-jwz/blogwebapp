import { LeftSumIcon } from "./LeftSumIcon";
import { RightSumIcon } from "./RightSumIcon";

export const Hero = () => {
  return (
    <div className="w-full relative top-[100px] flex justify-center">
      <div className=" container flex flex-col gap-[8px]">
        <div className="relative">
          <img className="container" src="./mainpic.png" alt="" />

          <div className="w-[200px] h-[200px] bg-red-200 absolute left-[10px] bottom-[10px]">
            hello
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
