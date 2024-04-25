import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-440 w-full object-cover md:w-48" src={user.picture} alt="User's profile" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.name}</div>
          <p className="mt-2 text-gray-500">{user.email}</p>
          <p className="mt-2 text-gray-500">{user.bio}</p>
          {/* <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit Profile
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
