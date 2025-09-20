"use client";
import { useState } from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login"); // 'login' or 'signup'

  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-white">
        <img
          src="https://stories.freepiklabs.com/storage/17493/mobile-login-rafiki-778.png"
          alt="Auth Illustration"
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-white">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-4">
          {/* Tabs */}
          <div className="flex justify-around mb-4">
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${
                activeTab === "login"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${
                activeTab === "signup"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          {activeTab === "login" ? (
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-1.5 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-2">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="123 Main St"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-1.5 rounded-lg font-semibold hover:bg-green-600 transition text-sm"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
