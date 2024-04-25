import Image from "next/image";
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-440 w-full object-cover md:w-48"
            src={user.picture}
            alt="User's profile"
            width={500}
            height={500}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {user.name}
          </div>
          <p className="mt-2 text-gray-500">{user.email}</p>
          <p className="mt-2 text-gray-500">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
