import React from "react";
import userData from "../constants/data";
import Image from "next/image";

export default function Youtube() {
  return (
    <>
    <div className="px-2 py-58">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 md:mb-auto pt-20 pb-10">
        <div className="flex flex-wrap items-center md:-mx-3 justify-center">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 md:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-2xl md:text-4xl text-gray-900 dark:text-gray-200 -mb-6 text-center">
                <span className="font-bold">Wyrtech on YouTube</span>
              </h1>
              <h1 className="text-lg md:text-lg text-gray-900 dark:text-gray-200 text-center">
                Our YouTube channel has 1000+ free tutorials and crash courses
              </h1>
              <div className="relative flex md:flex-row md:space-x-4 justify-center">
                <a
                  href="https://www.youtube.com/channel/UCe7SdIm9NLlk91LeK7FrwUw"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-6 py-3 text-sm text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 bg-black rounded-md md:mb-0 hover:bg-gray-800 md:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16"> <path fill="#ff0000" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>
                  <span className="font-bold">&nbsp;&nbsp;Visit Channel</span>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 order-first md:order-last">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src={`/youtube.png`}
                alt="avatar"
                className="rounded-1xl w-500"
                width={590}
                height={462}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {userData.projects1.map((proj, idx) => (
          <YoutubeProjectsCard
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
            key={idx}
          />
        ))}
      </div>
      <div className="relative flex flex-col md:space-x-4 py-10">
          <a
          href="https://www.youtube.com/channel/UCe7SdIm9NLlk91LeK7FrwUw/videos"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-full px-6 py-3 mb-3 text-sm text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 bg-black rounded-md md:mb-0 hover:bg-gray-800 md:w-auto"
          >
            <span className="font-bold">&nbsp;See Videos</span>
          </a>
        </div>
    </div>
    </>
  );
}

const YoutubeProjectsCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-60 md:h-52 object-cover">
          <Image
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            layout="fill"
          />
        </div>
        {/* <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
          {title}
        </h1> */}
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};