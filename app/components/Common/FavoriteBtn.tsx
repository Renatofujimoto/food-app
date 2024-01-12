import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const FavoriteBtn = () => {
  return (
    <div className="relative hover:opacity-80 transition">
      <AiOutlineHeart
        size={40}
        className="text-green-700 -top-[20px] -right-[30px] cursor-pointer"
      />
    </div>
  );
};

export default FavoriteBtn;
