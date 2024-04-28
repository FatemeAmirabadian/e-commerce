import React from "react";
import { setSearchTerm } from "../../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Header = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="bg-blue-500 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold hidden sm:block">
          <Link href={"/"}>My eCommerce App</Link>
        </div>
        {/* <sm saerch */}
        <div className="px-2 sm:hidden m-auto">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 px-1 py-1 rounded-md focus:outline-none"
          />
        </div>
        {/* >sm search and buttons */}
        <div className="flex">
          <div className="hidden sm:flex mr-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex items-center hidden md:block">
            <button className="bg-white text-blue-500 px-4 py-1 rounded-md mr-3">
              <Link href={"/cart"}>Cart</Link>
            </button>
            <button className="bg-white text-blue-500 px-4 py-1 rounded-md">
              <Link href={"/profile"}>Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
