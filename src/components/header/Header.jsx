import Link from "next/link";
import { MenuSvg } from "../svg/MenuSvg";
import { MetaBlog } from "../svg/MetaBlog";
import { SearchIcon } from "../svg/SearchIcon";
import { SmallText } from "./SmallText";
import { useEffect, useState } from "react";

export const Header = ({ changeFunction }) => {
  const [articles, setArticles] = useState([]);
  const [searchArticle, setSearchArticle] = useState("");

  const filteredArticle = articles?.filter((article) =>
    article?.title?.toLowerCase().includes(searchArticle)
  );

  const fetchDataSearch = () => {
    fetch(`https://dev.to/api/articles?per_page=10`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchDataSearch();
  }, []);
  const handleInputChange = (event) => {
    setSearchArticle(event.target.value);
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="container fixed z-50 bg-white md:py-[32px] flex justify-between px-[32px] max-w-7xl">
        <Link href="/">
          <MetaBlog />
        </Link>
        <div className="hidden md:flex gap-[40px] items-center justify-between">
          <Link href="/">
            <SmallText text={"Home"} />
          </Link>

          <Link href="/blog-list">
            <SmallText text={"Blog"} />
          </Link>

          <Link href="/contact-us">
            <SmallText text={"Contact"} />
          </Link>
        </div>
        <div className=" hidden md:flex items-center rounded-[5px] justify-between py-[8px] pr-[8px] pl-[16px] gap-[12px] bg-[#F4F4F5]">
          <div className="relative">
            <input
              placeholder="Search"
              className="hidden md:block border-none outline-none bg-[#F4F4F5]"
              type="text"
              onChange={handleInputChange}
            />

            <div
              className={`${
                searchArticle ? "flex flex-col" : "hidden"
              } absolute gap-[10px] bg-white`}
            >
              {filteredArticle?.map((filtered, index) => {
                return (
                  <Link
                    className="bg-gray-100 border border-green-300 rounded-xl w-[350px]"
                    key={filtered.id + index}
                    href={`/blog-list/${filtered.id}`}
                  >
                    <div>{filtered?.description}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={changeFunction}>
            <MenuSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
