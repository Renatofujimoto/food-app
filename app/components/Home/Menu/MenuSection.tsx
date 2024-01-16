import { MenuData } from "@/app/data/menu-data";
import React from "react";
import MenuModal from "./MenuModal";

const MenuSection = () => {
  return (
    <section className="mb-24">
      <div className="max-w-2xl mx-auto my-5 text-center">
        <h2
          className="text-3xl leading-tight tracking-tight text-gray-600
        sm:text-4xl"
        >
          Menu
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-2">
        {MenuData.map((menu) => (
          <MenuModal
            menu={menu}
            key={menu.id}
            user={{
              id: 0,
              name: "",
              email: "",
              img: "",
              role: "",
            }}
          />
        ))}
      </div>
    </section>
  );
};
export default MenuSection;
