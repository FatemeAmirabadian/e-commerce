'use client'
import bcrypt from "bcryptjs";
import Link from "next/link";
import SignupForm from "@/app/components/modules/SignupForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const handleSignUp = async ({ email, password, confirmPassword }) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    const minPasswordLength = 8;
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Regular expression for strong password

    
    if (!password || password.length < minPasswordLength) {
      toast.error(`Password must be at least ${minPasswordLength} characters long`);
      return;
    }

    
    if (!passwordStrengthRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and one number");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: hashedPassword }), // Store hashed password
      });

      const data = await res.json();

      if (res.status === 400 && data.error === "user already exists") {
        toast.error("This user already exists");
        return;
      } else if (res.status === 201) {
        toast.success("Sign up successfully", {
          onClose: () => {
            router.push("/login");
          },
        });
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign up</h1>
        <SignupForm onSubmit={handleSignUp} />
        <div className="text-center mt-4">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline pl-2">
            Log in
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
