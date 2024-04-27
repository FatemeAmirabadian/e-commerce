import Link from "next/link";
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white p-2 w-3/4 sm:w-1/2 sm:p-5 rounded">
      <p className="tracking-wide text-md text-indigo-500 font-semibold sm:text-xl">
        Email: {user.email}
      </p>
      <p className="mt-2 text-gray-500 px-1">FirstName:<span className="pl-1">{user.firstName}</span></p>
      <p className="my-2 text-gray-500 px-1">LastName:<span className="pl-1">{user.lastName}</span></p>
      <span className="p-1 text-white bg-gray-500 rounded">
        <Link href={"/profile/edit"}>complete profile info</Link>
      </span>
    </div>
  );
};

export default UserProfile;
