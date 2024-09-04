import { useEffect, useState } from "react";
import { LeftSumIcon } from "../svg/LeftSumIcon";
import { RightSumIcon } from "../svg/RightSumIcon";

export const Carousel = () => {
  // const slides = [
  //   {
  //     url: `https://media.istockphoto.com/id/509932468/photo/panoramic-view-of-sydney-skyline.jpg?s=612x612&w=0&k=20&c=N5xwAqM_25u3La9Wg2NuncsrJzkJVgTuhI036CN1SB0=`,
  //     tag: "Travel",
  //     text: "Golden Gate Bridge, head to the Legion ",
  //     cardcolor: "#f2f3f4",
  //   },
  //   {
  //     url: `https://images.unsplash.com/photo-1497048679117-1a29644559e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyZWF0aXZlfGVufDB8fDB8fHww`,
  //     tag: "Design",
  //     text: " New York's nightlife is also bursting ",
  //     cardcolor: "#f2f3f4",
  //   },
  //   {
  //     url: `https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.jpg?s=612x612&w=0&k=20&c=rTtWP9ywxZM_BygzURikdoWRHnO4ohD73Z-RDAg_u8M=`,
  //     tag: "Technology",
  //     text: "As the capital city of the U.S., Washington",
  //     cardcolor: "#f2f3f4",
  //   },
  //   {
  //     url: `https://images.unsplash.com/photo-1605289355680-75fb41239154?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNob3d8ZW58MHx8MHx8fDA%3D`,
  //     tag: "Fashion",
  //     text: "As the capital city of the U.S., Washington",
  //     cardcolor: "#f2f3f4",
  //   },
  // ];
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(articles);
};
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const prevSlide = () => {
//     // const isFirstSlide = currentIndex === 0;
//     // const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     // const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//     // setCurrentIndex(newIndex);
//     setCurrentIndex((currentIndex) =>
//       currentIndex === 0 ? articles.length - 1 : currentIndex - 1
//     );
//   };
//   const nextSlide = () => {
//     // const isLastSlide = currentIndex === slides.length - 1;
//     // const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     // const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//     // setCurrentIndex(newIndex);
//     setCurrentIndex((currentIndex) =>
//       currentIndex === articles.length - 1 ? 0 : currentIndex + 1
//     );
//   };

//   return (
//     <div className="w-full hidden md:flex justify-center ">
//       <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8 max-w-7xl ">
//         <div
//           className="h-[600px] flex justify-start items-end pl-[5px] pb-[5px] transition-all ease-linear duration-300"
//           style={{
//             backgroundImage: `url(${articles[currentIndex].cover_image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className=" w-[50%] flex flex-col   border-[1px] border-[var(--bordercolor)] rounded-[12px]  bg-[var(--textwhite)] p-[40px]">
//             <div>
//               <button className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
//                 {articles[currentIndex].tag_list[0]}
//               </button>
//             </div>
//             <div className="flex flex-col gap-[8px] mt-[16px]">
//               <span className="text-[14px] md:text-[36px] leading-[40px] font-[600]">
//                 {articles[currentIndex].description}
//               </span>
//             </div>
//             <span className="mt-[24px] text-[16px] leading-[24px] font-[400] text-[var(--textgrey)]">
//               August 20, 2022
//             </span>
//           </div>
//         </div>
//         <div className="flex justify-end gap-[8px] ">
//           <button onClick={prevSlide}>
//             <LeftSumIcon />
//           </button>
//           <button onClick={nextSlide}>
//             <RightSumIcon />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
