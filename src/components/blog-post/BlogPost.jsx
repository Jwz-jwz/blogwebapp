import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { BlogCard } from "./BlogCard";
import { BlogHeader } from "./BlogHeader";
import { LoadMore } from "./LoadMore";
import Link from "next/link";

export const Blogpost = ({}) => {
  const [articles, setArticles] = useState([]);
  const [tag, setTag] = useState("");
  const [perpage, setPerpage] = useState(9);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${perpage}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [tag, perpage]);

  const handleChange = (newtag) => {
    setTag(newtag);
  };
  const handleLoadmore = () => {
    setPerpage(perpage + 3);
  };
  console.log(perpage);

  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-8 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <BlogHeader handleChange={handleChange} />

        <div className="flex flex-wrap justify-between gap-[20px]">
          {articles.map((article, index) => {
            return (
              <Link href={`/blog-list/${article.id}`} key={article + index}>
                <BlogCard
                  url={article.cover_image}
                  tag={article.tag_list}
                  description={article.description}
                  time={article.published_at}
                />
              </Link>
            );
          })}
        </div>
        <button onClick={handleLoadmore} className="flex justify-center">
          <LoadMore />
        </button>
      </div>
    </div>
  );
};
