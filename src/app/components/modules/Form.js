import React, { useState } from "react";
import TextInput from "./TextInput";
import Link from "next/link";

function Form({ onSubmit, isSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      isSignUp && onSubmit({ email, password, confirmPassword });
    }
    onSubmit({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignUp && (
          <TextInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {isSignUp ? (
            <Link href={"/login"}>sign up</Link>
          ) : (
            <Link href={"/profile"}>login</Link>
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
