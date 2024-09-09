import { BlogTag } from "./BlogTag";
import { DateGenerate } from "./DateGenerate";

export const BlogCard = ({ url, tags, description, time }) => {
  const toUpperCase = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

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
            {/* <BlogTag tagname={toUpperCase(tag)} /> */}

            <div className="flex flex-wrap gap-[5px]">
              {tags.map((tagsis, index) => {
                return (
                  <div key={index}>
                    <BlogTag tagname={toUpperCase(tagsis)} />
                  </div>
                );
              })}
            </div>

            {/* <BlogTag tagname={tag} /> */}
            <div className="text-[24px]  leading-[28px] font-[600] line-clamp-3">
              {description}
            </div>
          </div>
          <DateGenerate time={time} />
        </div>
      </div>
    </div>
  );
};
