import Link from "next/link";

export const BlogHeader = ({ handleChange }) => {
  return (
    <div className="flex justify-between">
      <div className="hidden md:flex gap-[20px] text-[12px] leading-[25px] font-[700]  ">
        <button
          onClick={() => handleChange("")}
          className="text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
        >
          All
        </button>
        <button
          className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
          onClick={() => handleChange("coding")}
        >
          Coding
        </button>
        <button
          onClick={() => handleChange("database")}
          className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
        >
          Database
        </button>
        <button
          onClick={() => handleChange("learning")}
          className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
        >
          Learning
        </button>
        <button
          onClick={() => handleChange("discuss")}
          className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
        >
          Discuss
        </button>
        <button
          onClick={() => handleChange("watercooler")}
          className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300"
        >
          Watercooler
        </button>
      </div>
      <Link
        className="hover:text-[#D4A373] hover:scale-110 transition-all ease-linear duration-300 text-[12px] leading-[25px] font-[700]"
        href="./blog-list"
      >
        View All
      </Link>
    </div>
  );
};
