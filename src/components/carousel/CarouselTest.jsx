import { useEffect, useState } from "react";
import { LeftSumIcon } from "../svg/LeftSumIcon";
import { RightSumIcon } from "../svg/RightSumIcon";
import { DateGenerate } from "../blog-post/DateGenerate";

export const CarouselTest = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState([1]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?page=${page}&&per_page=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  // console.log(articles);

  const prevSlide = () => {
    setPage(page - 1);
  };
  const nextSlide = () => {
    setPage(page + 1);
  };

  return (
    <div className="w-full hidden md:flex justify-center ">
      <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8 max-w-7xl ">
        {articles.map((article) => {
          return (
            <div
              className="h-[600px] flex justify-start items-end pl-[5px] pb-[5px] transition-all ease-linear duration-300"
              style={{
                backgroundImage: `url(${article.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" w-[50%] flex flex-col   border-[1px] border-[var(--bordercolor)] rounded-[12px]  bg-[var(--textwhite)] p-[40px]">
                <div>
                  <button className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
                    {article.tag_list[0]}
                  </button>
                </div>
                <div className="flex flex-col gap-[8px] mt-[16px]">
                  <span className="text-[14px] md:text-[36px] leading-[40px] font-[600]">
                    {article.description}
                  </span>
                </div>
                <span className="mt-[24px] text-[16px] leading-[24px] font-[400] text-[var(--textgrey)]">
                  <DateGenerate time={article.published_at} />
                </span>
              </div>
            </div>
          );
        })}
        <div className="flex justify-end gap-[8px] ">
          <button onClick={prevSlide}>
            <LeftSumIcon />
          </button>
          <button onClick={nextSlide}>
            <RightSumIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
