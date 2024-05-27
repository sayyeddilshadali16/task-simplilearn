import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="flex flex-col justify-center w-full max-w-md p-8 m-auto bg-white rounded-md shadow-md lg:w-1/2">
          <h2 className="text-3xl font-semibold text-center text-blue-600">
            Welcome back!
          </h2>
          <p className="text-center text-gray-600">
            Log in to continue learning
          </p>
          <form className="mt-6">
            <div>
              <label className="block text-sm text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Login
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <span className="w-1/5 border-b lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">
                or login with
              </span>
              <span className="w-1/5 border-b lg:w-1/4"></span>
            </div>
            <div className="flex flex-wrap justify-around mt-4">
              <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 mt-2">
                Google
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mt-2">
                Facebook
              </button>
              <button className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-900 mt-2">
                LinkedIn
              </button>
              <button className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 mt-2">
                Apple
              </button>
            </div>
          </div>
          <p className="mt-8 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-gray-800 bg-opacity-40">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white">
                World's #1 online bootcamp
              </h2>
              <p className="mt-4 text-lg text-white">
                Get started with your immersive learning experience
              </p>
              <p className="mt-2 text-sm text-gray-300">
                2M careers advanced | 1500 live classes every month | 85%
                reported promotion or a new job
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
