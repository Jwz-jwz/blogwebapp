import { BlogTag } from "./BlogTag";

export const BlogCard = () => {
  const blogcards = [
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blogmain.png",
      tag: <BlogTag tagname={"design"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "./blog.png",
      tag: <BlogTag tagname={"Technology"} />,
      content:
        " The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];

  return (
    <div className="">
      <div className=" grid grid-cols-3 grid-rows-3 justify-between p-[16px]">
        {blogcards.map((blogcard, index) => {
          return (
            <div key={"blogcard + index"}>
              <div
                style={{
                  backgroundImage: `url(${blogcard.image})`,
                  backgroundSize: "cover",
                }}
                className="w-[360px] h-[240px]  rounded-[6px] "
              >
                <div className="flex flex-col gap-[16px]">
                  <div>{blogcard.tag}</div>
                  <div className="text-[24px] leading-[28px] font-[600]">
                    {blogcard.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
