import Image from "next/image";
import React from "react";
import { HiStar } from "react-icons/hi2";

const HeroSection = () => {
  const bannerImg = "/images/banner.jpg";
  return (
    <section className="relative h-72 md:h-96">
      <div
        className="relative h-48 md:h-72 bg-no-repeat bg-cove w-full"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>

      <div className="absolute bottom-0 left-0 rounded-full w-28 h-28 p-1 overflow-hideen bg-white ring-2 ring-white">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-full object-contain"
        />
      </div>

      <div className="absolute bottom-3 left-40">
        <div>
          <h1>DPS Resto</h1>
        </div>
        <div className="flex items-center">
          <HiStar />
          <p className="mx-1">4.9 rating</p>
        </div>
        <div>More Info</div>
      </div>
    </section>
  );
};

export default HeroSection;
