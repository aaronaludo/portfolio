import React from "react";
import userData from "../constants/data";

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 antialiased">
        <h1 className="text-3xl lg:text-6xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md max-w-6xl mx-auto -mt-4 mb-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center sm:text-left mb-24">
          <header>
            <h1 className="text-black dark:text-gray-50 font-semibold text-2xl">
              Let me know if you need anything else
            </h1>
            <p className="text-black text-base dark:text-gray-200 mt-2">
              If you require any further information, feel free to contact me.
            </p>
            <p className="mt-10">{userData.email}</p>
          </header>
        </div>
      </div>
    </section>
  );
}
