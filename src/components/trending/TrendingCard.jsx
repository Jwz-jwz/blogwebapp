import { Tag } from "./Tag";

export const TrendingCard = () => {
  const cards = [
    {
      image: "./backimage.png",
      tag: <Tag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <Tag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <Tag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./backimage.png",
      tag: <Tag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];

  return (
    <div className="flex">
      {cards.map((card) => {
        return (
          <div
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
            }}
            className="w-[200px] h-[200px]"
          >
            <p>{card.tag}</p>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
};
