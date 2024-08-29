import { TagTrending } from "./TagTrending";

export const TrendingCard = () => {
  const cards = [
    {
      image: "./backimage.png",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];

  return (
    <div className="">
      <div className=" flex justify-between ">
        {cards.map((card, index) => {
          return (
            <div
              key={"card + index"}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
              }}
              className="w-[289px] h-[320px] text-white  text-[18px] font-[600] leading-[28px] rounded-[12px] flex flex-col gap-[16px] pl-[20px] pt-[170px]"
            >
              <div>{card.tag}</div>
              <div>{card.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
