import React from "react";
import userData from "../constants/data";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-2 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 mb-52 md:mb-auto">
        <div className="flex flex-wrap items-center md:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 md:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-base md:text-4xl text-gray-900 dark:text-gray-200 -mb-6">
                <span className="font-bold">Hi, </span> I&apos;m Aaron Aludo
              </h1>
              <h1 className="text-base sm:text-2xl text-gray-900 dark:text-gray-200">Founder at <span className="font-bold">Wyrtech</span> </h1>
              <h1 className="text-base md:text-2xl text-gray-900 dark:text-gray-200">
                A 19-year-old{" "}
                <span className="font-bold">software engineer</span> based in Philippines.
              </h1>
              <div className="relative flex flex-col md:flex-row md:space-x-4">
                <a
                  href="https://discord.gg/tBkWgzzyea"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center w-full px-6 py-3 mb-3 text-sm text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 bg-black rounded-md md:mb-0 hover:bg-gray-800 md:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg>
                  &nbsp; Join 
                  <span className="font-bold">&nbsp;Wyrtech Community</span>
                </a>
              </div>
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
