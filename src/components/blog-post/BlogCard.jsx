import { Date } from "../usedinall/Date";
import { BlogTag } from "./BlogTag";

export const BlogCard = () => {
  const blogcards = [
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"Design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"Design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"Design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"Design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
      date: <Date date={"August 20, 2022"} />,
    }, 
  ];

  return (
    <div className="flex flex-wrap justify-between gap-[20px]">
      {blogcards.map((blogcard, index) => {
        return (
          <div
            key={blogcard + index}
            className=" flex flex-col  w-[392px] gap-[16px] border-[1px] border-[#E8E8EA] p-4 rounded-xl"
          >
            <div
              style={{
                backgroundImage: `url(${blogcard.image})`,
                backgroundSize: "cover",
              }}
              className="w-[392px]] h-[240px]  rounded-[6px] "
            ></div>
            <div className="flex flex-col gap-[20px]">
              <div>{blogcard.tag}</div>
              <div className="text-[24px] leading-[28px] font-[600]">
                {blogcard.content}
              </div>
              <div>{blogcard.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
