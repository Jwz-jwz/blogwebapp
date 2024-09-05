import { DateGenerate } from "../blog-post/DateGenerate";
import { SmallTextGrey } from "../usedinall/SmalTextGrey";
import { SinglePagetext } from "./SinglePagetext";

export const SingleMain = ({
  header,
  propic,
  name,
  date,
  coverpic,
  description,
}) => {
  return (
    <div className="w-full flex justify-center mt-[200px] ">
      <div className="container flex flex-col gap-[32px] max-w-7xl px-[240px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[36px] font-[600] leading-[40px]">{header}</h1>
          <div className="flex gap-[24px]">
            <img
              className="w-[28px] h-[28px] rounded-[28px]"
              src={propic}
              alt=""
            />

            <SmallTextGrey text={name} />
            <DateGenerate time={date} />
          </div>
        </div>
        <div>
          <img className="h-[462px] rounded-[12px]" src={coverpic} alt="" />
        </div>
        <div className="flex flex-col gap-[30px]">
          <SinglePagetext text={description} />
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
