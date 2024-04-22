"use client";
import React from "react";
import Form from "@/app/components/modules/Form";
import Link from "next/link";

const SignUpPage = () => {
  const formTitle = "Sign up";
  const handleSignUp = (formData) => {
    console.log("Sign up form submitted with:", formData);
    // Add your sign-up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{formTitle}</h1>
        <Form onSubmit={handleSignUp} formTitle={formTitle} />
        <div className="text-center mt-4">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline pl-2">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
