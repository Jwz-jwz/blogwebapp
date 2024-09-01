export const SmallText = ({ text }) => {
  return (
    <div className="text-[16px] font-[400] leading-[24px] flex justify-center items-center text-[#3B3C4A] hover:cursor-pointer hover:scale-110 transition-all ease-linear duration-300">
      {text}
    </div>
  );
};
