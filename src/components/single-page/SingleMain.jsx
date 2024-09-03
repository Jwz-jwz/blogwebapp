import { SmallTextGrey } from "../usedinall/SmalTextGrey";
import { SinglePagetext } from "./SinglePagetext";

export const SingleMain = () => {
  return (
    <div className="w-full flex justify-center mt-[200px] ">
      <div className="container flex flex-col gap-8 max-w-7xl px-[240px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[36px] font-[600] leading-[40px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex gap-[24px]">
            <img src="./profile.png" alt="" />

            <SmallTextGrey text={"Tracey Wilson"} />
            <SmallTextGrey text={"August 20, 2022"} />
          </div>
        </div>
        <div>
          <img src="./sqaure.png" alt="" />
        </div>
        <div className="flex flex-col gap-[30px]">
          <SinglePagetext
            text={
              "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels."
            }
          />
          <SinglePagetext
            text={
              "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."
            }
          />
        </div>
        <div>
          <h1 className="text-[24px] leading-[28px] font-[600]">
            Research Your Destination
          </h1>
          <div className="mt-4 flex flex-col gap-[30px]">
            <SinglePagetext
              text={
                "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas."
              }
            />
            <SinglePagetext
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus."
              }
            />
          </div>
        </div>
        <div>
          <h1 className="text-[24px] leading-[28px] font-[600]">
            Plan your Itinerary
          </h1>
          <div className="mt-4 flex flex-col gap-[30px]">
            <SinglePagetext
              text={
                "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas."
              }
            />
            <SinglePagetext
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
