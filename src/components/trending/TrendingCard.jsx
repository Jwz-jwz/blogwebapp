import { TagTrending } from "./TagTrending";

export const TrendingCard = ({ image, tag, description }) => {
  const toUpperCase = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };
  return (
    <div className="flex flex-wrap gap-[20px] md:flex justify-between ">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[289px] h-[320px] text-white  text-[18px] font-[600] leading-[28px] bg-[#141624]  bg-blend-soft-light rounded-[12px] flex flex-col gap-[16px] pl-[20px] pt-[170px] transition-all ease-linear duration-300 hover:scale-105 hover:cursor-pointer"
      >
        <button className="flex justify-start ">
          <TagTrending tagname={toUpperCase(tag)} />
        </button>
        <div className="line-clamp-3 h-[76px]">{description}</div>
      </div>
    </div>
  );
};
