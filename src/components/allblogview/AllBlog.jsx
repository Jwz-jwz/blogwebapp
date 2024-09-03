import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { LoadMore } from "../blog-post/LoadMore";
import { AllBlogCard } from "./AllBlogCard";

export const AllBlog = ({}) => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=12")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-12 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <div className="flex flex-wrap justify-between gap-[20px]">
          {articles.map((article, index) => {
            return (
              <div key={article + index}>
                <AllBlogCard
                  url={article.cover_image}
                  tag={article.tag_list[0]}
                  description={article.description}
                  propic={article.user.profile_image_90}
                  username={article.user.name}
                  time={article.published_at}
                />
              </div>
            );
          })}
        </div>
        <button className="flex justify-center">
          <LoadMore />
        </button>
      </div>
    </div>
  );
};
