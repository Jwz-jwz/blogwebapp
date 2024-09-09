// export const toUpperCase = (name) => {
//   const titles = name.map((title) => title.split(``));
//   titles.forEach((title) => {
//     title[0] = title[0].toUpperCase();
//   });
//   return titles.map((title) => title.join(``));
// };
export const BlogTag = ({ tagname }) => {
  return (
    <div>
      <span className="px-[10px] py-[4px] text-[14px] font-[500] leading-[20px] rounded-[6px] text-[#4B6BFB] bg-[#e5e7e9]">
        {tagname}
      </span>
    </div>
  );
};
