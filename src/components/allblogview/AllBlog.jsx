import { useEffect, useState } from "react";
import { SectionName } from "../usedinall/SectionName";
import { LoadMore } from "../blog-post/LoadMore";
import { AllBlogCard } from "./AllBlogCard";
import Link from "next/link";

export const AllBlog = ({}) => {
  const [articles, setArticles] = useState([]);
  const [perpage, setPerpage] = useState(12);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${perpage}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [perpage]);

  const handleLoadmore = () => {
    setPerpage(perpage + 3);
  };

  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-12 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <div className="flex flex-wrap justify-between gap-[20px]">
          {articles.map((article, index) => {
            return (
              <Link href={`/blog-list/${article?.id}`} key={article.id + index}>
                <AllBlogCard
                  url={article?.cover_image}
                  tag={article?.tag_list[0]}
                  description={article?.description}
                  propic={article?.user?.profile_image_90}
                  username={article?.user?.name}
                  time={article?.published_at}
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
