import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "../constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="dark:bg-[#0d0d0d]">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">

        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
              {router.asPath === "/" && (
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.949 201.949"  xmlSpace="preserve" width='35px' height='35px' fill="currentColor" className="inline-block">
                  <g>
                  <g>
                  <g>
                  <path style={{fill: '#10002'}} d="M100.974,77.143c-13.142,0-23.824,10.694-23.824,23.832s10.683,23.835,23.824,23.835     s23.835-10.694,23.835-23.835C124.806,87.836,114.116,77.143,100.974,77.143z M100.974,120.196     c-10.597,0-19.218-8.629-19.218-19.226s8.621-19.218,19.218-19.218c10.593,0,19.215,8.625,19.215,19.218     S111.568,120.196,100.974,120.196z"/>
                  </g>
                  <g>
                  <path style={{fill: '#10002'}} d="M201.944,103.161c0.129-5.902-2.684-11.631-8.113-16.91c0.047-0.333,0.093-0.659,0.093-0.995     c0-3.933-3.182-7.115-7.122-7.115c-1.049,0-2.036,0.236-2.928,0.644c-3.439-2.054-7.304-4.005-11.653-5.816     c-3.486-1.453-7.244-2.759-11.123-3.99c7.448-25.317,6.073-45.534-5.64-53.042c-3.078-1.972-6.717-2.97-10.83-2.97     c-12.107,0-27.801,8.861-43.655,23.671C85.12,21.828,69.434,12.967,57.323,12.967c-4.112,0-7.752,0.998-10.83,2.97     c-7.372,4.721-10.651,14.48-10.232,27.353c-2.287,1.188-3.865,3.547-3.865,6.302c0,3.328,2.287,6.095,5.368,6.875     c0.626,3.325,1.492,6.818,2.48,10.386C15.833,73.761,0.298,85.252,0.004,98.784c-0.247,11.363,10.307,22.089,29.726,30.198     c3.497,1.464,7.279,2.774,11.184,4.005c-1.156,3.926-2.169,7.798-2.91,11.524c-4.091,20.632-1.074,35.373,8.493,41.508     c3.081,1.968,6.718,2.963,10.83,2.963c12.111,0,27.801-8.858,43.655-23.667c15.851,14.813,31.544,23.667,43.651,23.667h0.004     c4.112,0,7.752-0.995,10.83-2.963c9.566-6.134,12.583-20.875,8.493-41.508c-0.608-3.053-1.406-6.206-2.287-9.394     C186.097,128.192,201.651,116.707,201.944,103.161z M144.626,17.576c3.214,0,6.023,0.752,8.346,2.24     c9.749,6.245,10.368,24.716,3.59,47.767c-10.16-2.87-21.448-4.978-33.376-6.256c-6.134-7.967-12.49-15.192-18.868-21.477     C119.191,25.98,133.767,17.576,144.626,17.576z M131.649,120.626c-3.675,5.74-7.548,11.202-11.52,16.395     c-6.46,0.394-13.127,0.526-19.941,0.376c-6.435-0.132-12.773-0.515-18.939-1.131c-3.769-4.967-7.451-10.171-10.951-15.64     c-4.209-6.556-7.949-13.152-11.309-19.687c3.386-6.546,7.14-13.113,11.309-19.619c3.675-5.74,7.555-11.198,11.527-16.388     c4.713-0.29,9.545-0.44,14.466-0.44c1.811,0,3.64,0.021,5.468,0.061c6.435,0.136,12.769,0.519,18.936,1.131     c3.769,4.964,7.448,10.171,10.951,15.636c4.166,6.506,7.924,13.084,11.302,19.626     C139.597,107.474,135.857,114.069,131.649,120.626z M145.56,106.042c4.266,8.786,7.716,17.433,10.311,25.703     c-8.915,2.233-18.9,3.879-29.59,4.817c3.167-4.298,6.263-8.775,9.251-13.442C139.2,117.398,142.532,111.689,145.56,106.042z      M100.974,158.859c-5.347-5.257-10.694-11.18-15.894-17.658c4.928,0.394,9.924,0.694,15.006,0.809     c1.868,0.039,3.733,0.061,5.572,0.061h0.011c3.618,0,7.176-0.079,10.665-0.225C111.307,148.072,106.142,153.773,100.974,158.859z      M74.927,135.517c-10.067-1.267-19.619-3.124-28.287-5.579c2.52-7.716,5.794-15.758,9.752-23.892     c3.024,5.64,6.36,11.349,10.028,17.071C69.166,127.422,72.018,131.534,74.927,135.517z M56.414,95.857     c-4.284-8.883-7.687-17.529-10.246-25.682c8.893-2.215,18.853-3.851,29.5-4.788c-3.167,4.298-6.263,8.786-9.251,13.446     C62.799,84.476,59.46,90.166,56.414,95.857z M100.974,43.09c5.347,5.264,10.694,11.18,15.894,17.662     c-4.928-0.397-9.921-0.701-15.006-0.812c-1.865-0.039-3.726-0.061-5.569-0.061c-3.622,0-7.183,0.082-10.679,0.222     C90.653,53.877,95.81,48.176,100.974,43.09z M135.532,78.832c-2.756-4.295-5.597-8.421-8.511-12.404     c10.039,1.267,19.555,3.124,28.216,5.569c-2.491,7.605-5.74,15.65-9.702,23.86C142.493,90.173,139.15,84.476,135.532,78.832z      M42.532,56.02c2.419-1.134,4.105-3.579,4.105-6.431c0-3.443-2.448-6.317-5.698-6.982c-0.322-10.869,2.194-19.05,8.038-22.79     c2.323-1.489,5.132-2.24,8.346-2.24c10.862,0,25.435,8.403,40.312,22.275c-6.138,6.052-12.268,12.973-18.195,20.593     c-12.658,0.848-24.34,2.634-34.633,5.193C43.87,62.308,43.129,59.113,42.532,56.02z M31.502,124.724     c-17.289-7.226-27.088-16.631-26.888-25.839c0.24-11.22,14.738-21.205,36.919-27.482c2.92,9.33,7.072,19.319,12.258,29.594     c-4.724,9.387-8.654,18.685-11.556,27.575C38.484,127.39,34.859,126.127,31.502,124.724z M57.323,184.387     c-3.21,0-6.02-0.759-8.346-2.255c-7.748-4.964-10.1-18.349-6.456-36.726c0.705-3.568,1.682-7.283,2.792-11.055     c10.182,2.885,21.495,4.996,33.448,6.277c6.141,7.956,12.497,15.178,18.871,21.477C82.758,175.966,68.181,184.387,57.323,184.387     z M159.428,145.406c3.647,18.377,1.296,31.762-6.449,36.726c-2.33,1.496-5.139,2.255-8.349,2.255h-0.004     c-10.862-0.014-25.435-8.421-40.312-22.282c6.148-6.063,12.268-12.977,18.195-20.603c12.683-0.834,24.383-2.63,34.693-5.204     C158.068,139.393,158.841,142.453,159.428,145.406z M160.33,130.571c-2.967-9.505-7.086-19.483-12.175-29.583     c4.828-9.548,8.715-18.839,11.581-27.604c3.74,1.188,7.365,2.441,10.712,3.84c3.69,1.542,7.015,3.189,9.989,4.903     c-0.462,0.948-0.752,2.001-0.752,3.131c0,3.93,3.189,7.118,7.118,7.118c1.836,0,3.486-0.709,4.746-1.843     c3.854,4.069,5.88,8.317,5.787,12.526C197.099,114.291,182.551,124.28,160.33,130.571z"/>
                  </g>
                  </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  </svg>
                )}
                {" "}{userData.name}
              </h1>
            </a>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <Link href="/projects">
            <a
              className={`text-xl nav-link ${
                router.asPath === "/projects"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Projects{" "}
              {router.asPath === "/projects" && (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.949 201.949"  xmlSpace="preserve" width='20px' height='20px' fill="currentColor" className="inline-block">
                <g>
                <g>
                <g>
                <path style={{fill: '#10002'}} d="M100.974,77.143c-13.142,0-23.824,10.694-23.824,23.832s10.683,23.835,23.824,23.835     s23.835-10.694,23.835-23.835C124.806,87.836,114.116,77.143,100.974,77.143z M100.974,120.196     c-10.597,0-19.218-8.629-19.218-19.226s8.621-19.218,19.218-19.218c10.593,0,19.215,8.625,19.215,19.218     S111.568,120.196,100.974,120.196z"/>
                </g>
                <g>
                <path style={{fill: '#10002'}} d="M201.944,103.161c0.129-5.902-2.684-11.631-8.113-16.91c0.047-0.333,0.093-0.659,0.093-0.995     c0-3.933-3.182-7.115-7.122-7.115c-1.049,0-2.036,0.236-2.928,0.644c-3.439-2.054-7.304-4.005-11.653-5.816     c-3.486-1.453-7.244-2.759-11.123-3.99c7.448-25.317,6.073-45.534-5.64-53.042c-3.078-1.972-6.717-2.97-10.83-2.97     c-12.107,0-27.801,8.861-43.655,23.671C85.12,21.828,69.434,12.967,57.323,12.967c-4.112,0-7.752,0.998-10.83,2.97     c-7.372,4.721-10.651,14.48-10.232,27.353c-2.287,1.188-3.865,3.547-3.865,6.302c0,3.328,2.287,6.095,5.368,6.875     c0.626,3.325,1.492,6.818,2.48,10.386C15.833,73.761,0.298,85.252,0.004,98.784c-0.247,11.363,10.307,22.089,29.726,30.198     c3.497,1.464,7.279,2.774,11.184,4.005c-1.156,3.926-2.169,7.798-2.91,11.524c-4.091,20.632-1.074,35.373,8.493,41.508     c3.081,1.968,6.718,2.963,10.83,2.963c12.111,0,27.801-8.858,43.655-23.667c15.851,14.813,31.544,23.667,43.651,23.667h0.004     c4.112,0,7.752-0.995,10.83-2.963c9.566-6.134,12.583-20.875,8.493-41.508c-0.608-3.053-1.406-6.206-2.287-9.394     C186.097,128.192,201.651,116.707,201.944,103.161z M144.626,17.576c3.214,0,6.023,0.752,8.346,2.24     c9.749,6.245,10.368,24.716,3.59,47.767c-10.16-2.87-21.448-4.978-33.376-6.256c-6.134-7.967-12.49-15.192-18.868-21.477     C119.191,25.98,133.767,17.576,144.626,17.576z M131.649,120.626c-3.675,5.74-7.548,11.202-11.52,16.395     c-6.46,0.394-13.127,0.526-19.941,0.376c-6.435-0.132-12.773-0.515-18.939-1.131c-3.769-4.967-7.451-10.171-10.951-15.64     c-4.209-6.556-7.949-13.152-11.309-19.687c3.386-6.546,7.14-13.113,11.309-19.619c3.675-5.74,7.555-11.198,11.527-16.388     c4.713-0.29,9.545-0.44,14.466-0.44c1.811,0,3.64,0.021,5.468,0.061c6.435,0.136,12.769,0.519,18.936,1.131     c3.769,4.964,7.448,10.171,10.951,15.636c4.166,6.506,7.924,13.084,11.302,19.626     C139.597,107.474,135.857,114.069,131.649,120.626z M145.56,106.042c4.266,8.786,7.716,17.433,10.311,25.703     c-8.915,2.233-18.9,3.879-29.59,4.817c3.167-4.298,6.263-8.775,9.251-13.442C139.2,117.398,142.532,111.689,145.56,106.042z      M100.974,158.859c-5.347-5.257-10.694-11.18-15.894-17.658c4.928,0.394,9.924,0.694,15.006,0.809     c1.868,0.039,3.733,0.061,5.572,0.061h0.011c3.618,0,7.176-0.079,10.665-0.225C111.307,148.072,106.142,153.773,100.974,158.859z      M74.927,135.517c-10.067-1.267-19.619-3.124-28.287-5.579c2.52-7.716,5.794-15.758,9.752-23.892     c3.024,5.64,6.36,11.349,10.028,17.071C69.166,127.422,72.018,131.534,74.927,135.517z M56.414,95.857     c-4.284-8.883-7.687-17.529-10.246-25.682c8.893-2.215,18.853-3.851,29.5-4.788c-3.167,4.298-6.263,8.786-9.251,13.446     C62.799,84.476,59.46,90.166,56.414,95.857z M100.974,43.09c5.347,5.264,10.694,11.18,15.894,17.662     c-4.928-0.397-9.921-0.701-15.006-0.812c-1.865-0.039-3.726-0.061-5.569-0.061c-3.622,0-7.183,0.082-10.679,0.222     C90.653,53.877,95.81,48.176,100.974,43.09z M135.532,78.832c-2.756-4.295-5.597-8.421-8.511-12.404     c10.039,1.267,19.555,3.124,28.216,5.569c-2.491,7.605-5.74,15.65-9.702,23.86C142.493,90.173,139.15,84.476,135.532,78.832z      M42.532,56.02c2.419-1.134,4.105-3.579,4.105-6.431c0-3.443-2.448-6.317-5.698-6.982c-0.322-10.869,2.194-19.05,8.038-22.79     c2.323-1.489,5.132-2.24,8.346-2.24c10.862,0,25.435,8.403,40.312,22.275c-6.138,6.052-12.268,12.973-18.195,20.593     c-12.658,0.848-24.34,2.634-34.633,5.193C43.87,62.308,43.129,59.113,42.532,56.02z M31.502,124.724     c-17.289-7.226-27.088-16.631-26.888-25.839c0.24-11.22,14.738-21.205,36.919-27.482c2.92,9.33,7.072,19.319,12.258,29.594     c-4.724,9.387-8.654,18.685-11.556,27.575C38.484,127.39,34.859,126.127,31.502,124.724z M57.323,184.387     c-3.21,0-6.02-0.759-8.346-2.255c-7.748-4.964-10.1-18.349-6.456-36.726c0.705-3.568,1.682-7.283,2.792-11.055     c10.182,2.885,21.495,4.996,33.448,6.277c6.141,7.956,12.497,15.178,18.871,21.477C82.758,175.966,68.181,184.387,57.323,184.387     z M159.428,145.406c3.647,18.377,1.296,31.762-6.449,36.726c-2.33,1.496-5.139,2.255-8.349,2.255h-0.004     c-10.862-0.014-25.435-8.421-40.312-22.282c6.148-6.063,12.268-12.977,18.195-20.603c12.683-0.834,24.383-2.63,34.693-5.204     C158.068,139.393,158.841,142.453,159.428,145.406z M160.33,130.571c-2.967-9.505-7.086-19.483-12.175-29.583     c4.828-9.548,8.715-18.839,11.581-27.604c3.74,1.188,7.365,2.441,10.712,3.84c3.69,1.542,7.015,3.189,9.989,4.903     c-0.462,0.948-0.752,2.001-0.752,3.131c0,3.93,3.189,7.118,7.118,7.118c1.836,0,3.486-0.709,4.746-1.843     c3.854,4.069,5.88,8.317,5.787,12.526C197.099,114.291,182.551,124.28,160.33,130.571z"/>
                </g>
                </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
              )}
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-xl nav-link ${
                router.asPath === "/experience"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Experience{" "}
              {router.asPath === "/experience" && (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.949 201.949"  xmlSpace="preserve" width='20px' height='20px' fill="currentColor" className="inline-block">
                <g>
                <g>
                <g>
                <path style={{fill: '#10002'}} d="M100.974,77.143c-13.142,0-23.824,10.694-23.824,23.832s10.683,23.835,23.824,23.835     s23.835-10.694,23.835-23.835C124.806,87.836,114.116,77.143,100.974,77.143z M100.974,120.196     c-10.597,0-19.218-8.629-19.218-19.226s8.621-19.218,19.218-19.218c10.593,0,19.215,8.625,19.215,19.218     S111.568,120.196,100.974,120.196z"/>
                </g>
                <g>
                <path style={{fill: '#10002'}} d="M201.944,103.161c0.129-5.902-2.684-11.631-8.113-16.91c0.047-0.333,0.093-0.659,0.093-0.995     c0-3.933-3.182-7.115-7.122-7.115c-1.049,0-2.036,0.236-2.928,0.644c-3.439-2.054-7.304-4.005-11.653-5.816     c-3.486-1.453-7.244-2.759-11.123-3.99c7.448-25.317,6.073-45.534-5.64-53.042c-3.078-1.972-6.717-2.97-10.83-2.97     c-12.107,0-27.801,8.861-43.655,23.671C85.12,21.828,69.434,12.967,57.323,12.967c-4.112,0-7.752,0.998-10.83,2.97     c-7.372,4.721-10.651,14.48-10.232,27.353c-2.287,1.188-3.865,3.547-3.865,6.302c0,3.328,2.287,6.095,5.368,6.875     c0.626,3.325,1.492,6.818,2.48,10.386C15.833,73.761,0.298,85.252,0.004,98.784c-0.247,11.363,10.307,22.089,29.726,30.198     c3.497,1.464,7.279,2.774,11.184,4.005c-1.156,3.926-2.169,7.798-2.91,11.524c-4.091,20.632-1.074,35.373,8.493,41.508     c3.081,1.968,6.718,2.963,10.83,2.963c12.111,0,27.801-8.858,43.655-23.667c15.851,14.813,31.544,23.667,43.651,23.667h0.004     c4.112,0,7.752-0.995,10.83-2.963c9.566-6.134,12.583-20.875,8.493-41.508c-0.608-3.053-1.406-6.206-2.287-9.394     C186.097,128.192,201.651,116.707,201.944,103.161z M144.626,17.576c3.214,0,6.023,0.752,8.346,2.24     c9.749,6.245,10.368,24.716,3.59,47.767c-10.16-2.87-21.448-4.978-33.376-6.256c-6.134-7.967-12.49-15.192-18.868-21.477     C119.191,25.98,133.767,17.576,144.626,17.576z M131.649,120.626c-3.675,5.74-7.548,11.202-11.52,16.395     c-6.46,0.394-13.127,0.526-19.941,0.376c-6.435-0.132-12.773-0.515-18.939-1.131c-3.769-4.967-7.451-10.171-10.951-15.64     c-4.209-6.556-7.949-13.152-11.309-19.687c3.386-6.546,7.14-13.113,11.309-19.619c3.675-5.74,7.555-11.198,11.527-16.388     c4.713-0.29,9.545-0.44,14.466-0.44c1.811,0,3.64,0.021,5.468,0.061c6.435,0.136,12.769,0.519,18.936,1.131     c3.769,4.964,7.448,10.171,10.951,15.636c4.166,6.506,7.924,13.084,11.302,19.626     C139.597,107.474,135.857,114.069,131.649,120.626z M145.56,106.042c4.266,8.786,7.716,17.433,10.311,25.703     c-8.915,2.233-18.9,3.879-29.59,4.817c3.167-4.298,6.263-8.775,9.251-13.442C139.2,117.398,142.532,111.689,145.56,106.042z      M100.974,158.859c-5.347-5.257-10.694-11.18-15.894-17.658c4.928,0.394,9.924,0.694,15.006,0.809     c1.868,0.039,3.733,0.061,5.572,0.061h0.011c3.618,0,7.176-0.079,10.665-0.225C111.307,148.072,106.142,153.773,100.974,158.859z      M74.927,135.517c-10.067-1.267-19.619-3.124-28.287-5.579c2.52-7.716,5.794-15.758,9.752-23.892     c3.024,5.64,6.36,11.349,10.028,17.071C69.166,127.422,72.018,131.534,74.927,135.517z M56.414,95.857     c-4.284-8.883-7.687-17.529-10.246-25.682c8.893-2.215,18.853-3.851,29.5-4.788c-3.167,4.298-6.263,8.786-9.251,13.446     C62.799,84.476,59.46,90.166,56.414,95.857z M100.974,43.09c5.347,5.264,10.694,11.18,15.894,17.662     c-4.928-0.397-9.921-0.701-15.006-0.812c-1.865-0.039-3.726-0.061-5.569-0.061c-3.622,0-7.183,0.082-10.679,0.222     C90.653,53.877,95.81,48.176,100.974,43.09z M135.532,78.832c-2.756-4.295-5.597-8.421-8.511-12.404     c10.039,1.267,19.555,3.124,28.216,5.569c-2.491,7.605-5.74,15.65-9.702,23.86C142.493,90.173,139.15,84.476,135.532,78.832z      M42.532,56.02c2.419-1.134,4.105-3.579,4.105-6.431c0-3.443-2.448-6.317-5.698-6.982c-0.322-10.869,2.194-19.05,8.038-22.79     c2.323-1.489,5.132-2.24,8.346-2.24c10.862,0,25.435,8.403,40.312,22.275c-6.138,6.052-12.268,12.973-18.195,20.593     c-12.658,0.848-24.34,2.634-34.633,5.193C43.87,62.308,43.129,59.113,42.532,56.02z M31.502,124.724     c-17.289-7.226-27.088-16.631-26.888-25.839c0.24-11.22,14.738-21.205,36.919-27.482c2.92,9.33,7.072,19.319,12.258,29.594     c-4.724,9.387-8.654,18.685-11.556,27.575C38.484,127.39,34.859,126.127,31.502,124.724z M57.323,184.387     c-3.21,0-6.02-0.759-8.346-2.255c-7.748-4.964-10.1-18.349-6.456-36.726c0.705-3.568,1.682-7.283,2.792-11.055     c10.182,2.885,21.495,4.996,33.448,6.277c6.141,7.956,12.497,15.178,18.871,21.477C82.758,175.966,68.181,184.387,57.323,184.387     z M159.428,145.406c3.647,18.377,1.296,31.762-6.449,36.726c-2.33,1.496-5.139,2.255-8.349,2.255h-0.004     c-10.862-0.014-25.435-8.421-40.312-22.282c6.148-6.063,12.268-12.977,18.195-20.603c12.683-0.834,24.383-2.63,34.693-5.204     C158.068,139.393,158.841,142.453,159.428,145.406z M160.33,130.571c-2.967-9.505-7.086-19.483-12.175-29.583     c4.828-9.548,8.715-18.839,11.581-27.604c3.74,1.188,7.365,2.441,10.712,3.84c3.69,1.542,7.015,3.189,9.989,4.903     c-0.462,0.948-0.752,2.001-0.752,3.131c0,3.93,3.189,7.118,7.118,7.118c1.836,0,3.486-0.709,4.746-1.843     c3.854,4.069,5.88,8.317,5.787,12.526C197.099,114.291,182.551,124.28,160.33,130.571z"/>
                </g>
                </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
              )}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`text-xl nav-link ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Contact{" "}
              {router.asPath === "/contact" && (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.949 201.949"  xmlSpace="preserve" width='20px' height='20px' fill="currentColor" className="inline-block">
                <g>
                <g>
                <g>
                <path style={{fill: '#10002'}} d="M100.974,77.143c-13.142,0-23.824,10.694-23.824,23.832s10.683,23.835,23.824,23.835     s23.835-10.694,23.835-23.835C124.806,87.836,114.116,77.143,100.974,77.143z M100.974,120.196     c-10.597,0-19.218-8.629-19.218-19.226s8.621-19.218,19.218-19.218c10.593,0,19.215,8.625,19.215,19.218     S111.568,120.196,100.974,120.196z"/>
                </g>
                <g>
                <path style={{fill: '#10002'}} d="M201.944,103.161c0.129-5.902-2.684-11.631-8.113-16.91c0.047-0.333,0.093-0.659,0.093-0.995     c0-3.933-3.182-7.115-7.122-7.115c-1.049,0-2.036,0.236-2.928,0.644c-3.439-2.054-7.304-4.005-11.653-5.816     c-3.486-1.453-7.244-2.759-11.123-3.99c7.448-25.317,6.073-45.534-5.64-53.042c-3.078-1.972-6.717-2.97-10.83-2.97     c-12.107,0-27.801,8.861-43.655,23.671C85.12,21.828,69.434,12.967,57.323,12.967c-4.112,0-7.752,0.998-10.83,2.97     c-7.372,4.721-10.651,14.48-10.232,27.353c-2.287,1.188-3.865,3.547-3.865,6.302c0,3.328,2.287,6.095,5.368,6.875     c0.626,3.325,1.492,6.818,2.48,10.386C15.833,73.761,0.298,85.252,0.004,98.784c-0.247,11.363,10.307,22.089,29.726,30.198     c3.497,1.464,7.279,2.774,11.184,4.005c-1.156,3.926-2.169,7.798-2.91,11.524c-4.091,20.632-1.074,35.373,8.493,41.508     c3.081,1.968,6.718,2.963,10.83,2.963c12.111,0,27.801-8.858,43.655-23.667c15.851,14.813,31.544,23.667,43.651,23.667h0.004     c4.112,0,7.752-0.995,10.83-2.963c9.566-6.134,12.583-20.875,8.493-41.508c-0.608-3.053-1.406-6.206-2.287-9.394     C186.097,128.192,201.651,116.707,201.944,103.161z M144.626,17.576c3.214,0,6.023,0.752,8.346,2.24     c9.749,6.245,10.368,24.716,3.59,47.767c-10.16-2.87-21.448-4.978-33.376-6.256c-6.134-7.967-12.49-15.192-18.868-21.477     C119.191,25.98,133.767,17.576,144.626,17.576z M131.649,120.626c-3.675,5.74-7.548,11.202-11.52,16.395     c-6.46,0.394-13.127,0.526-19.941,0.376c-6.435-0.132-12.773-0.515-18.939-1.131c-3.769-4.967-7.451-10.171-10.951-15.64     c-4.209-6.556-7.949-13.152-11.309-19.687c3.386-6.546,7.14-13.113,11.309-19.619c3.675-5.74,7.555-11.198,11.527-16.388     c4.713-0.29,9.545-0.44,14.466-0.44c1.811,0,3.64,0.021,5.468,0.061c6.435,0.136,12.769,0.519,18.936,1.131     c3.769,4.964,7.448,10.171,10.951,15.636c4.166,6.506,7.924,13.084,11.302,19.626     C139.597,107.474,135.857,114.069,131.649,120.626z M145.56,106.042c4.266,8.786,7.716,17.433,10.311,25.703     c-8.915,2.233-18.9,3.879-29.59,4.817c3.167-4.298,6.263-8.775,9.251-13.442C139.2,117.398,142.532,111.689,145.56,106.042z      M100.974,158.859c-5.347-5.257-10.694-11.18-15.894-17.658c4.928,0.394,9.924,0.694,15.006,0.809     c1.868,0.039,3.733,0.061,5.572,0.061h0.011c3.618,0,7.176-0.079,10.665-0.225C111.307,148.072,106.142,153.773,100.974,158.859z      M74.927,135.517c-10.067-1.267-19.619-3.124-28.287-5.579c2.52-7.716,5.794-15.758,9.752-23.892     c3.024,5.64,6.36,11.349,10.028,17.071C69.166,127.422,72.018,131.534,74.927,135.517z M56.414,95.857     c-4.284-8.883-7.687-17.529-10.246-25.682c8.893-2.215,18.853-3.851,29.5-4.788c-3.167,4.298-6.263,8.786-9.251,13.446     C62.799,84.476,59.46,90.166,56.414,95.857z M100.974,43.09c5.347,5.264,10.694,11.18,15.894,17.662     c-4.928-0.397-9.921-0.701-15.006-0.812c-1.865-0.039-3.726-0.061-5.569-0.061c-3.622,0-7.183,0.082-10.679,0.222     C90.653,53.877,95.81,48.176,100.974,43.09z M135.532,78.832c-2.756-4.295-5.597-8.421-8.511-12.404     c10.039,1.267,19.555,3.124,28.216,5.569c-2.491,7.605-5.74,15.65-9.702,23.86C142.493,90.173,139.15,84.476,135.532,78.832z      M42.532,56.02c2.419-1.134,4.105-3.579,4.105-6.431c0-3.443-2.448-6.317-5.698-6.982c-0.322-10.869,2.194-19.05,8.038-22.79     c2.323-1.489,5.132-2.24,8.346-2.24c10.862,0,25.435,8.403,40.312,22.275c-6.138,6.052-12.268,12.973-18.195,20.593     c-12.658,0.848-24.34,2.634-34.633,5.193C43.87,62.308,43.129,59.113,42.532,56.02z M31.502,124.724     c-17.289-7.226-27.088-16.631-26.888-25.839c0.24-11.22,14.738-21.205,36.919-27.482c2.92,9.33,7.072,19.319,12.258,29.594     c-4.724,9.387-8.654,18.685-11.556,27.575C38.484,127.39,34.859,126.127,31.502,124.724z M57.323,184.387     c-3.21,0-6.02-0.759-8.346-2.255c-7.748-4.964-10.1-18.349-6.456-36.726c0.705-3.568,1.682-7.283,2.792-11.055     c10.182,2.885,21.495,4.996,33.448,6.277c6.141,7.956,12.497,15.178,18.871,21.477C82.758,175.966,68.181,184.387,57.323,184.387     z M159.428,145.406c3.647,18.377,1.296,31.762-6.449,36.726c-2.33,1.496-5.139,2.255-8.349,2.255h-0.004     c-10.862-0.014-25.435-8.421-40.312-22.282c6.148-6.063,12.268-12.977,18.195-20.603c12.683-0.834,24.383-2.63,34.693-5.204     C158.068,139.393,158.841,142.453,159.428,145.406z M160.33,130.571c-2.967-9.505-7.086-19.483-12.175-29.583     c4.828-9.548,8.715-18.839,11.581-27.604c3.74,1.188,7.365,2.441,10.712,3.84c3.69,1.542,7.015,3.189,9.989,4.903     c-0.462,0.948-0.752,2.001-0.752,3.131c0,3.93,3.189,7.118,7.118,7.118c1.836,0,3.486-0.709,4.746-1.843     c3.854,4.069,5.88,8.317,5.787,12.526C197.099,114.291,182.551,124.28,160.33,130.571z"/>
                </g>
                </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
              )}
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
              style={{color: "#0A66C2"}} 
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href={userData.socialLinks.github}
            className="text-base font-normal text-gray-A dark:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4 text-center">
        <Link href="/projects">
          <a className="nav-link text-base font-normal text-gray-600 dark:text-gray-300">
            Projects
          </a>
        </Link>
        <Link href="/experience">
          <a className="nav-link text-base font-normal text-gray-600 dark:text-gray-300">
            Experience
          </a>
        </Link>
        <Link href="/contact">
          <a className="nav-link text-base font-normal text-gray-600 dark:text-gray-300">
            Contact
          </a>
        </Link>
      </div>
    </div>
    </div>
  );
}
