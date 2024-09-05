import { useState } from "react";
import { Blogpost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Menu } from "../header/Menu";
import { Trending } from "../trending/Trending";
import { CarouselTest } from "../carousel/CarouselTest";

export const Homepage = () => {
  const [isShow, setIsShow] = useState(false);
  const showHandle = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="">
      <Menu isShow={isShow} changeFunction={showHandle} />
      <Header changeFunction={showHandle} />
      <Carousel />
      <Trending />
      <Blogpost />
      <Footer />
    </div>
  );
};
