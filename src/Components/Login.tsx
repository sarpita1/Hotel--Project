"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("User Data:", data);
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/room10.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-8">
        {/* Left - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <h3 className="text-gray-900 text-3xl font-bold text-center">
            Sign In
          </h3>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Sign in to your account and explore a world of possibilities.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
            {/* Username Input */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">
                User Name
              </label>
              <input
                {...register("username", { required: "Username is required" })}
                type="text"
                className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-500"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  Something went wrong!
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  Something went wrong!
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign-in Button */}
            <button
              type="submit"
              className="w-full py-3 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right - Image Section */}
        <div className="hidden md:block">
          <img
            src="/images/room10.jpg"
            alt="Sign In"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
