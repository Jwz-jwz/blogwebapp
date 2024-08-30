import { Blogpost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Carouseltest } from "../carousel/CarouselTest";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
import { TrendingCard } from "../trending/TrendingCard";

export const Homepage = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <Trending />
      <Blogpost />
      <Carouseltest />
    </div>
  );
};
