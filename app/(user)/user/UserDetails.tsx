"use client";

import Image from "next/image";
import UserEditAccountModal from "./UserEditAccountModal";

import UserAddProfile from "./UserAddProfile";

type Props = {
  user?: User;
};

const UserDetails = ({ user }: Props) => {
  const email = user?.email as string;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/img/logo.jpg"
        alt="pro-img"
        width={100}
        height={100}
        className="mx-auto  rounded-full "
        priority
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-center my-5 font-semibold leading-tight tracking-tight text-gray-500 md:text-2xl ">
          Renato Fujimoto{" "}
        </h1>
        <p className="text-gray-500 mb-4">renatofujimoto2@gmail.com</p>
        <UserEditAccountModal
          user={{
            id: 0,
            name: "",
            email: "",
            img: "",
            role: "",
          }}
          profile={undefined}
        />
      </div>
    </div>
  );
};

export default UserDetails;
