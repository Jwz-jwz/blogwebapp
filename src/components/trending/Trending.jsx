import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { TrendingCard } from "./TrendingCard";
import Link from "next/link";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&top=2`)
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
        <div className="md:flex justify-between">
          {articles.map((article, index) => {
            return (
              <Link href={`/blog-list/${article?.id}`} key={article.id + index}>
                <TrendingCard
                  image={article?.cover_image}
                  tag={article?.tag_list[0]}
                  description={article?.description}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
