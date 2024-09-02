import { TagTrending } from "./TagTrending";

export const TrendingCard = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1688220019316-3e22587dd158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D",
      tag: <TagTrending tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];

  return (
    <div className="flex flex-wrap gap-[20px] md:flex justify-between ">
      {cards.map((card, index) => {
        return (
          <div
            key={card + index}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
            }}
            className="w-[289px] h-[320px] text-white  text-[18px] font-[600] leading-[28px] rounded-[12px] flex flex-col gap-[16px] pl-[20px] pt-[170px] transition-all ease-linear duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <button className="flex justify-start ">{card.tag}</button>
            <div>{card.content}</div>
          </div>
        );
      })}
    </div>
  );
};
