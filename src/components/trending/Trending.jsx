import { SectionName } from "../usedinall/SectionName";
import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="container p-8 flex flex-col gap-[30px] max-w-7xl">
        <SectionName name={"Technology"} />
        <TrendingCard />
      </div>
    </div>
  );
};
