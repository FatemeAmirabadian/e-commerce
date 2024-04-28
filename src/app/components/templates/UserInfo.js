"use client";
import React from "react";
import UserProfilePage from "./UserProfilePage";
import withAuthentication from "../../utils/withAuthorization";

const AuthenticatedUserProfilePage = withAuthentication(UserProfilePage);

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <AuthenticatedUserProfilePage />
    </div>
  );
};

export default App;
