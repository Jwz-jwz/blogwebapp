import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { BlogCard } from "./BlogCard";
import { BlogHeader } from "./BlogHeader";
import { LoadMore } from "./LoadMore";

export const Blogpost = ({ url, tag, description }) => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-8 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <div className="flex justify-between">
          <div className="hidden md:flex gap-[20px]">
            <button className="text-[#D4A373]">
              <BlogHeader text={"All"} />
            </button>
            <button>
              <BlogHeader text={"Design"} />
            </button>
            <button>
              <BlogHeader text={"Travel"} />
            </button>
            <button>
              <BlogHeader text={"Fashion"} />
            </button>
            <button>
              <BlogHeader text={"Technology"} />
            </button>
            <button>
              <BlogHeader text={"Brending"} />
            </button>
          </div>
          <button>
            <BlogHeader text={"View all"} />
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {articles.map((article) => {
            return (
              <BlogCard
                url={article.cover_image}
                tag={article.tag_list[1]}
                description={article.description}
                time={article.published_at}
              />
            );
          })}
        </div>
        {/* <BlogCard url={url} tag={tag} description={description} /> */}
        <button className="flex justify-center">
          <LoadMore />
        </button>
      </div>
    </div>
  );
};
