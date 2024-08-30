import { useState } from "react";
export const Carouseltest = () => {
  const slides = [
    {
      url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRHJ_PdjPlI3cd6oi_wBYTeXY5vET8SczrA&s`,
    },
    {
      url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrieWOCRaYdJTbEJrdz7rQwNizpSUh7RTmg&s`,
    },
    {
      url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAgeMBTYmKFHujapv1QumXkfJSkUllB45uQ&s`,
    },
    {
      url: `https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg`,
    },
  ];
  return (
    <div className="w-full flex justify-center ">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="container h-[400px] max-w-7xl rounded-[2px] p-8"
      ></div>
    </div>
  );
};
