import React from "react";
import UserProfilePage from "./UserProfilePage";

const user = {
  name: "John Doe",
  email: "john@example.com",
  picture: "https://example.com/profile-picture.jpg",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <UserProfilePage user={user} />
    </div>
  );
};

export default App;
