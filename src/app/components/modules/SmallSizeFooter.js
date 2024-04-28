import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";

function SmallSizeFooter() {
  return (
    <div className="z-50 fixed w-full bg-blue-500 py-4 px-10 text-white text-center flex justify-between sm:hidden bottom-0">
      <div className="text-2xl">
        <Link href={"/"}>
          <IoHomeOutline />
        </Link>
      </div>
      <div className="text-2xl">
        <Link href={'/cart'}>
          <RiShoppingCart2Line />
        </Link>
      </div>
      <div className="text-2xl">
        <Link href={'/profile'}>
          <CgProfile />
        </Link>
      </div>
    </div>
  );
}

export default SmallSizeFooter;
