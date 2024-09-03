import { BlogTag } from "./BlogTag";
import { DateGenerate } from "./DateGenerate";

export const BlogCard = ({ url, tag, description, time }) => {
  return (
    <div className="flex flex-wrap justify-between gap-[20px]">
      <div className=" flex flex-col  w-[392px] gap-[16px] border-[1px] border-[#E8E8EA] p-4 rounded-xl">
        <div className="">
          <img className="h-[240px] rounded-[6px]" src={url} alt="" />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-4">
            <BlogTag tagname={tag} />
            <div className="text-[24px] h-[84px] leading-[28px] font-[600] text-ellipsis overflow-hidden">
              {description}
            </div>
          </div>
          <DateGenerate time={time} />
        </div>
      </div>
    </div>
  );
};

// export const BlogCard = ({ url, tag, description, time }) => {
//   const publishedDate = new Date(time);

//   const generatMonth = (month) => {
//     switch (month) {
//       case 1:
//         return "January";
//       case 2:
//         return "February";
//       case 3:
//         return "March";
//       case 4:
//         return "April";
//       case 5:
//         return "May";
//       case 6:
//         return "June";
//       case 7:
//         return "July";
//       case 8:
//         return "August";
//       case 9:
//         return "September";
//       case 10:
//         return "October";
//       case 11:
//         return "November";
//       case 12:
//         return "December";
//     }
//   };

//   return (
//     <div className="w-[392px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
//       <div className="flex flex-col gap-4">
//         <div
//           style={{
//             backgroundImage: `url(${url})`,
//             width: "100%",
//             height: "240px",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "6px",
//           }}
//         ></div>
//         <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
//           {tag}
//         </div>
//         <div className="overflow-hidden h-[100px]">
//           <p className="text-2xl font-semibold text-ellipsis ">{description}</p>
//         </div>
//       </div>
//       <p className=" text-[#97989F]">
//         {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}-
//         {publishedDate.getDay()}
//       </p>
//     </div>
//   );
// };
