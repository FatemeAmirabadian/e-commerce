"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { logout } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(userInfo));
    toast.success("Logout successful");
  };

  return (
    <div className="bg-white p-2 w-3/4 sm:w-1/2 sm:p-5 rounded">
      <p className="tracking-wide text-md text-indigo-500 font-semibold sm:text-xl">
        Email: {userInfo?.email}
      </p>
      <p className="mt-2 text-gray-500 px-1">
        FirstName:<span className="pl-1">{userInfo?.firstName}</span>
      </p>
      <p className="my-2 text-gray-500 px-1">
        LastName:<span className="pl-1">{userInfo?.lastName}</span>
      </p>
      <span className="p-1 text-white bg-gray-500 rounded">
        <Link href={"/profile/edit"}>complete profile info</Link>
      </span>
      <br />
      <button
        onClick={handleLogout}
        className="flex items-center mt-5 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Logout
        <HiOutlineLogout className="ml-1 text-xl" />
      </button>
    </div>
  );
};

export default UserProfile;
