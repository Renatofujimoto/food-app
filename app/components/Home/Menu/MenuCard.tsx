import Image from "next/image";
import React from "react";

type Props = {
  menu: Menu;
  openModal: () => void;
};
const MenuCard = ({ menu, openModal }: Props) => {
  return (
    <div
      className="flex flex-col rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
      onClick={openModal}
    >
      <Image
        src={menu.image}
        width={360}
        height={200}
        alt={menu.title}
        className="h-56 w-full object-scale-down rounded-t-lg"
      />

      <div className="flex flex-col flex-1 p-5">
        <div className="flex justify-between item-center">
          <h2 className="text-gray-600">{menu.title}</h2>
          <span className="text-green-600 font-semibold">${menu.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
