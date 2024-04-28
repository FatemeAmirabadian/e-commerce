"use client";
import LoginForm from "@/app/components/modules/LoginForm";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { loginSuccess } from "@/app/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const LogInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (formData) => {
    const { email, password } = formData;
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const getInfo = await fetch("/api/user/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await getInfo.json();
      const userData = await data.data;

      if (res.status === 401 && data.error === "Incorrect password") {
        toast.error("Incorrect password");
        return;
      } else if (res.status === 200) {
        toast.success("Login successful");
        router.push("/profile");
        dispatch(loginSuccess(userData));
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
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
        <LoginForm onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          Don&apos;t have an account?
          <Link href="/signup" className="text-blue-500 hover:underline pl-2">
            Sign up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogInPage;
