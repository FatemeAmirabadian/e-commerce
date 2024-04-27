"use client";
import React from "react";
import UserProfilePage from "./UserProfilePage";
import { useSelector } from "react-redux";

const App = () => {
  const userInfo = useSelector((state) => state.user.user);
  const user = {
    email: userInfo?.email,
    firstName: userInfo?.firstName,
    lastName: userInfo?.lastName,
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <UserProfilePage user={user} />
    </div>
  );
};

export default App;
