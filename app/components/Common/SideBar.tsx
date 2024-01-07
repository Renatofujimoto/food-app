"use client";
import React, { Children, createElement, useState } from "react";
import DialogComponent from "./DialogComponent";
import Link from "next/link";
import Image from "next/image";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { FaReceipt } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { useSideBarDrawer } from "../../lib/store";

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Orders", icon: FaReceipt, url: "/user/orders" },
  { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
  { title: "Help", icon: MdHelp, url: "/user/help" },
];

const SideBar = () => {
  const { isSideBarOpen, onSideBarClose } = useSideBarDrawer();
  return (
    <DialogComponent isVisible={isSideBarOpen} onClose={onSideBarClose}>
      <div className="flex flex-col gap-y-6 px-6 pt-8 text-gray-600">
        <div className="flex justify-center my-3">
          <Link href="/" className="outline-none">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          </Link>
        </div>

        <div className="flex items-center p-3 transition-all font-semibold">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div className="flex flex-col space-y-2 text-xs">
            <span className="pl-4">Renato Fujimoto</span>
            <Link href="/user" className="pl-4 text-green-600">
              View Profile
            </Link>
          </div>
        </div>

        {Links.map((link) => (
          <Link
            href={link.url}
            className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
            key={link.title}
          >
            {createElement(link.icon, {
              className: "h-5 w-5 mr-4 shrink-0",
            })}
            <span className="pl-2">{link.title}</span>
          </Link>
        ))}
        <button className="flex items-center p-3 transition-all font-semibold">
          <HiOutlineArrowRightOnRectangle className="mr-4 shink-0 " size={26} />
          <span className="pl-2">Logout</span>
        </button>
      </div>
    </DialogComponent>
  );
};

export default SideBar;
