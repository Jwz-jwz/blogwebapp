import { LeftSumIcon } from "./LeftSumIcon";
import { RightSumIcon } from "./RightSumIcon";

export const Hero = () => {
  return (
    <div className="w-full relative top-[100px] flex justify-center">
      <div className="container flex flex-col gap-[8px]">
        <img className="container" src="./mainpic.png" alt="" />
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
