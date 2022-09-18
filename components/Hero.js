import React from "react";
import userData from "../constants/data";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="px-2 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 mb-52 md:mb-auto">
        <div className="flex flex-wrap items-center md:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 md:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-base md:text-4xl text-gray-900 dark:text-gray-200 -mb-6">
                <span className="font-bold">Hi, </span> I&apos;m Aaron Aludo
              </h1>
              <h1 className="text-base md:text-2xl text-gray-900 dark:text-gray-200">
                A 19-year-old{" "}
                <span className="font-bold">software developer</span> based in Philippines.
              </h1>
              <div className="relative flex flex-col md:flex-row md:space-x-4">
                <a
                  href="https://discord.com/invite/t5fJFKNdws"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center w-full px-6 py-3 mb-3 text-sm text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 bg-black rounded-md md:mb-0 hover:bg-gray-800 md:w-auto"
                >
                  <span className="font-bold">Learn More</span>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-6 py-3 text-sm text-gray-900 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"> <path d="M7.416 3.604l4.605 4.98-3.251 6.395 6.855-1.229 3.12 7.532 13.255-17.38zM6.573 14.385l1.276-1.047-1.647 0.521-0.172-0.24 0.683-0.661-0.891 0.359c-3.407 1.323-5.823 4.62-5.823 8.485 0 2.599 1.093 4.937 2.844 6.593-0.751-1.317-1.183-2.844-1.183-4.475 0-3.817 2.417-7.219 5.755-8.557l0.423-1.020-1 0.437-0.281-0.38zM12.391 11.76l2.131-3.76 12.531-2.932z"/> </svg>
                  
                  &nbsp; Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-12 order-first md:order-last">
            <div className="w-full h-auto overflow-hidden">
              <img
                src={userData.avatarUrl}
                alt="avatar"
                className="rounded-1xl w-500"
              />
              <div className="flex flex-row justify-between mt-5">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
