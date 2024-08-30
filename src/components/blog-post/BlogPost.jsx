import { SectionName } from "../usedinall/SectionName";
import { BlogCard } from "./BlogCard";
import { BlogHeader } from "./BlogHeader";

export const Blogpost = () => {
  return (
    <div className="w-full flex mt-[100px] justify-center">
      <div className="container p-8 flex flex-col gap-8 max-w-7xl">
        <SectionName name={"All Blog Post"} />
        <div className="flex justify-between">
          <div className="flex gap-[20px]">
            <button className="text-[#D4A373]">
              <BlogHeader text={"All"} />
            </button>
            <button>
              <BlogHeader text={"Design"} />
            </button>
            <button>
              <BlogHeader text={"Travel"} />
            </button>
            <button>
              <BlogHeader text={"Fashion"} />
            </button>
            <button>
              <BlogHeader text={"Technology"} />
            </button>
            <button>
              <BlogHeader text={"Brending"} />
            </button>
          </div>
          <button>
            <BlogHeader text={"View all"} />
          </button>
        </div>

        <BlogCard />
      </div>
    </div>
  );
};
