import React from "react";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center bg-light-red items-center">
      <div className="rounded  w-[500px] flex flex-col items-center bg-white justify-center pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin <span className="font-thin">SDN CIWAREGU</span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              or
              <a
                href="#"
                className="font-meduim text-light-red hover:text-red-600 pr-2"
              >
                {" "}
                Register
              </a>
            </p>
          </div>
        </div>

        <form className="mt-8 w-[300px] space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input type="text" autoComplete="none" required className="apperance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm text-sm"
              placeholder="Username"/>
            </div>

            <div>
              <input type="password" autoComplete="none" required className="apperance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm text-sm"
              placeholder="Password"/>
            </div>
          </div>

          <div>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md
            text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
