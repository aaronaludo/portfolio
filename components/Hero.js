import React from "react";
import userData from "../constants/data";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-2 md:px-0 dark:bg-[#0d0d0d]">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 mb-52 md:mb-auto">
        <div className="flex flex-wrap items-center md:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 md:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-base md:text-4xl text-gray-900 dark:text-gray-200 -mb-6">
                <span className="font-bold">Hi, </span> I&apos;m Aaron Aludo
              </h1>
              <h1 className="text-base md:text-2xl text-gray-900 dark:text-gray-200">
                A freelance{" "}
                <span className="font-bold">web developer</span> based in Philippines.
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-12 order-first md:order-last">
            <div className="w-full h-auto overflow-hidden relative">
              <Image
                src={userData.avatarUrl}
                alt="avatar"
                className="rounded-1xl w-500"
                width={500}
                height={500}
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
