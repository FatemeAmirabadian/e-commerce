'use client'
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const withAuthentication = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const userInfo = useSelector((state) => state.user.user);
    const router = useRouter();

    useEffect(() => {
      // If user is not authenticated, redirect to login page
      if (!userInfo) {
        router.push("/login");
      }
    }, [userInfo, router]);

    // Render the wrapped component if user is authenticated
    return userInfo ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuthentication;
