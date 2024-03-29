import Image from "next/image";
import React from "react";

type Props = {
  promo: PromoTypes;
};

function PromoCard({ promo }: Props) {
  return (
    <article className="flex w-96 rounded-lg shrink-0 shadow-lg text-gray-500 hover:bg-green-200 hover:text-green-600 transition-all duration-200 ease-out bg-slate-100">
      <div className="flex flex-1 relative overflow-hidden">
        <span className="absolute rotate-[50deg] top-4 right-1 px-4 py-2 bg-red-500 text-white text-center">
          {promo.PercentOff}%OFF
        </span>
        <Image src={promo.img} width={200} height={200} alt={promo.title} />
      </div>

      <div className="flex flex-col flex-1 p-5 space-y-3">
        <p className=" font-semi-bold">{promo.title}</p>
        <p className="text-xs inline-flex items-center">
          {" "}
          {promo.salesQ} sells
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-2"></span>
          {promo.likesN} Likes
        </p>
        <p className="text-red-500">$ {promo.price}</p>
        <button className="form-button">Order Now</button>
      </div>
    </article>
  );
}

export default PromoCard;
