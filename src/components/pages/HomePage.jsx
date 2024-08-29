import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { TrendingCard } from "../trending/TrendingCard";

export const Homepage = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <TrendingCard />
    </div>
  );
};
