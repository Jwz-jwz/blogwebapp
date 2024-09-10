import { useEffect, useState } from "react";
import { Blogpost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Menu } from "../header/Menu";
import { Trending } from "../trending/Trending";

export const Homepage = () => {
  const [articles, setArticles] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchDataCarousel = () => {
    fetch(`https://dev.to/api/articles?top=2`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
 

  useEffect(() => {
    fetchDataCarousel();
  }, []);


  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? articles.length - 1 : currentIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === articles.length - 1 ? 0 : currentIndex + 1
    );
  };

  const [isShow, setIsShow] = useState(false);
  const showHandle = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="">
      <Menu isShow={isShow} changeFunction={showHandle} />
      <Header changeFunction={showHandle} />
      <Carousel
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        backurl={articles[currentIndex]?.id}
        url={articles[currentIndex]?.cover_image}
        tag={articles[currentIndex]?.tag_list[0]}
        description={articles[currentIndex]?.description}
        time={articles[currentIndex]?.published_at}
      />
      <Trending />
      <Blogpost />
      <Footer />
    </div>
  );
};
