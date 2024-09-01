import { Blogpost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export const Homepage = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <Trending />
      <Blogpost />
      <Footer />
    </div>
  );
};
