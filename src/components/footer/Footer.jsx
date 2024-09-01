import { FbLogo } from "../svg/FbLogo";
import { InstaLogo } from "../svg/InstaLogo";
import { LinkedinLogo } from "../svg/LinkeLogo";
import { MetaBlog } from "../svg/MetaBlog";
import { TweetLogo } from "../svg/TweetLogo";
import { SmallTextGrey } from "../usedinall/SmalTextGrey";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center mt-[100px] bg-[#F6F6F7] border-t-[1px] border-t-[#E8E8EA]">
      <div className="container max-w-7xl p-8 flex flex-col gap-[25px]">
        <div className="flex justify-start gap-[20px]">
          <div className="flex flex-col gap-[24px] w-[27.5%]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[18px] font-[600] leading-[28px]">About</h1>
              <SmallTextGrey
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                }
              />
            </div>
            <div className="flex flex-col justify-start gap-[4px]">
              <SmallTextGrey text={"Email : info@jstemplate.net"} />
              <SmallTextGrey text={"Phone : 880 123 456 789"} />
            </div>
          </div>
          <div className="w-[45%] flex justify-center">
            <div className="flex flex-col items-start gap-[12px]">
              <SmallTextGrey text={"Home"} />
              <SmallTextGrey text={"Blog"} />
              <SmallTextGrey text={"Text"} />
            </div>
          </div>
          <div className="w-[27.5] flex gap-[16px]">
            <FbLogo />
            <TweetLogo />
            <InstaLogo />
            <LinkedinLogo />
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-t-[#DCDDDF] py-8">
          <MetaBlog />
          <div className="flex justify-end gap-4 ">
            <button className="transition-all ease-out duration-200 hover:cursor-pointer hover:scale-105">
              <SmallTextGrey text={"Terms of Use"} />
            </button>
            <p className="border-l-[1px] border-l-[#E8E8EA]"></p>
            <button className="transition-all ease-out duration-200 hover:cursor-pointer hover:scale-105">
              <SmallTextGrey text={"Privacy Policy"} />
            </button>
            <p className="border-l-[1px] border-l-[#E8E8EA]"></p>
            <button className="transition-all ease-out duration-200 hover:cursor-pointer hover:scale-105">
              <SmallTextGrey text={"Cookie Policy"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
