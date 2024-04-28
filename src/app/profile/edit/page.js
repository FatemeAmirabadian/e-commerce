"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/app/redux/slices/userSlice";
import { useRouter } from "next/navigation";

function UserProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const [user, setUser] = useState({
    email: userInfo?.email || "",
    firstName: userInfo?.firstName || "",
    lastName: userInfo?.lastName || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = async () => {
    dispatch(loginSuccess(user));
    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    router.push("/profile");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-2 sm:p-5 w-3/4 sm:w-1/2 rounded">
        <div>
          <label
            className="text-sm sm:text-md font-medium mr-2"
            htmlFor="firstName"
          >
            First name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="border border-gray-300 p-1 sm:p-2 rounded-md mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-1">
          <label
            className="text-sm sm:text-md font-medium mr-2"
            htmlFor="firstName"
          >
            Last name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="border border-gray-300 p-1 sm:p-2 rounded-md mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          onClick={handleSave}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfilePage;
