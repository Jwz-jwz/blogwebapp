import { BlogTag } from "../blog-post/BlogTag";
import { DateGenerate } from "../blog-post/DateGenerate";

export const AllBlogCard = ({
  url,
  tag,
  description,
  time,
  propic,
  username,
}) => {
  return (
    <div className="flex flex-wrap justify-between gap-[20px]">
      <div className=" flex flex-col  w-[392px] gap-[16px] border-[1px] border-[#E8E8EA] p-4 rounded-xl">
        <div className="">
          <img
            className="h-[240px] rounded-[6px] object-cover"
            src={url}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-4">
            <BlogTag tagname={tag} />
            <div className="text-[24px] h-[84px] leading-[28px] font-[600] text-ellipsis overflow-hidden">
              {description}
            </div>
          </div>
          <div className="flex gap-[20px] text-center">
            <img
              className="w-[36px] h-[36px] rounded-[28px]"
              src={propic}
              alt=""
            />
            <div className="flex gap-[20px] p-1">
              <span className="flex justify-center text-[16px] font-[500] leading-[24px] text-[#97989F]">
                {username}
              </span>
              <DateGenerate time={time} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
