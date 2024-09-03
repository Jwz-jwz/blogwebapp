import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&&top=2")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="container p-8 flex flex-col gap-[30px] max-w-7xl">
        <SectionName name={"Trending"} />
        <div className="flex justify-between">
          {articles.map((article, index) => {
            return (
              <div key={article + index}>
                <TrendingCard
                  image={article.cover_image}
                  tag={article.tag_list[0]}
                  description={article.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
