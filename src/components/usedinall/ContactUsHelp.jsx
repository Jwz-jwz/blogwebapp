import { SmallText } from "../header/SmallText";
import { TagTrending } from "../trending/TagTrending";
import { SectionName } from "./SectionName";
import { SmallTextGrey } from "./SmalTextGrey";

export const ContactUsHelp = () => {
  return (
    <div className="w-full flex justify-center mt-[200px]">
      <div className="container  flex flex-col items-center justify-center px-8 max-w-7xl">
        <div className="w-[63%] flex flex-col gap-[20px] py-[14px] px-[50px]">
          <h1 className="text-[36px] font-[600] leading-[40px]">Contact Us</h1>
          <SmallTextGrey
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            }
          />
          <div className="flex justify-between py-[10px] gap-[50px]">
            <div className="w-[50%] flex flex-col gap-[10px] p-4 border-[1px] rounded-[12px] border-[#E8E8EA]">
              <SectionName name={"Address"} />
              <div className="pr-[30px]">
                <SmallTextGrey
                  text={"1328 Oak Ridge Drive, Saint Louis, Missouri"}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-[10px] p-4 border-[1px] rounded-[12px] border-[#E8E8EA]">
              <SectionName name={"Contact"} />
              <div className="pr-[50px]">
                <SmallTextGrey text={"313-332-8662 info@email.com"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[63%] flex flex-col gap-[20px] py-[14px] px-[50px] ">
          <div className="flex flex-col p-[30px] pb-[50px] gap-[20px] bg-[#F6F6F7] rounded-[10px]">
            <h1 className=" text-[18px] font-[600] leading-[26px]">
              Leave a message
            </h1>
            <div className="flex gap-[37px]">
              <input
                className="w-[37%] rounded-[5px] py-[10px] px-[12px] border-[1px] border-[#DCDDDF]"
                placeholder="Your Name"
                type="text"
              />

              <input
                className="w-[37%] rounded-[5px] p-[12px] border-[1px] border-[#DCDDDF]"
                placeholder="Your Email"
                type="text"
              />
            </div>
            <input
              className="w-[80%] rounded-[5px] p-[12px] border-[1px] border-[#DCDDDF]"
              placeholder="Subject"
              type="text"
            />
            <div className="relative">
              <input
                className=" w-[80%] h-[134px] rounded-[5px] p-[12px] border-[1px] border-[#DCDDDF]"
                type="text"
              />
              <label
                className="absolute top-[10px] left-[12px] text-[16px] font-[400] leading-[24px] text-[#97989F]"
                htmlFor=""
              >
                Write a message
              </label>
            </div>
            <div className="mt-[10px]">
              <button className="px-[16px] py-[10px] text-[12px] font-[500] leading-[20px] rounded-[6px] text-white bg-[#4B6BFB]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
