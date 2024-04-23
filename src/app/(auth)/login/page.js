"use client";
import React from "react";
import Form from "@/app/components/modules/Form";
import Link from "next/link";

const LogInPage = () => {
  const isSignUp = false;
  const handleSignUp = (formData) => {
    console.log("Sign up form submitted with:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
        <Form onSubmit={handleSignUp} isSignUp={isSignUp} />
        <div className="mt-4 text-center">
          Don't have an account?
          <Link href="/signup" className="text-blue-500 hover:underline pl-2">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
