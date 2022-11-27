import userData from "../constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-[#0d0d0d]">
      <div className="bg-[#F1F1F1] dark:bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-3xl md:text-5xl font-bold pt-20 pb-10 text-center">
            Experience
          </h1>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-[#0d0d0d] -mt-4 pb-16 mt-10">
        <div className="grid grid-cols-1 dark:bg-[#0d0d0d] max-w-xl mx-auto pt-200">
          {userData.experience.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
        {year}
      </h1>
      <h1 className="font-semibold text-xl dark:text-black">{title}</h1>
      <p className="text-gray-500">{company}</p>
      <p className="text-gray-600 my-2">{desc}</p>
    </div>
  );
};
