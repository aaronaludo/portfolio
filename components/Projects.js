import React from "react";
import userData from "../constants/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-black">
      <div className="bg-[#F1F1F1] dark:bg-black">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-3xl md:text-5xl font-bold pt-20 pb-10 text-center">
            Freelancing Project
          </h1>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            layout="fill"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
