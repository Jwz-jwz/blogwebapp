import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { BlogCard } from "./BlogCard";
import { BlogHeader } from "./BlogHeader";
import { LoadMore } from "./LoadMore";

export const Blogpost = ({}) => {
  const [articles, setArticles] = useState([]);
  const [tag, setTag] = useState("");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [tag]);

  // const filterArticles = (cat) => {
  //   const newArticles = articles.filter(
  //     (article) => article.tag_list[0] === cat
  //   );
  //   setArticles(newArticles);
  // };
  const handleChange = (newtag) => {
    setTag(newtag);
    <BlogCard tag={newtag} />;
    console.log(newtag);
  };

  const filteredTag = articles.filter((article) => article.tag_list === tag);
  console.log(filteredTag);

  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-8 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <div className="flex justify-between">
          <div className="hidden md:flex gap-[20px]">
            <button className="text-[#D4A373]">
              <BlogHeader text={"All"} />
            </button>
            <button onClick={() => handleChange("coding")}>
              <BlogHeader text={"coding"} />
            </button>
            <button>
              <BlogHeader text={"meta"} />
            </button>
            <button>
              <BlogHeader text={"news"} />
            </button>
            <button>
              <BlogHeader text={"neonchallenge"} />
            </button>
            <button>
              <BlogHeader text={"database"} />
            </button>
          </div>
          <button>
            <BlogHeader text={"View all"} />
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {articles.map((article, index) => {
            return (
              <div key={article + index}>
                <BlogCard
                  url={article.cover_image}
                  tag={article.tag_list[0]}
                  description={article.description}
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
