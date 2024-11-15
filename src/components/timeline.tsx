import React from "react";

type WorkExperience = {
  duration: string;
  company: string;
  position: string;
  description: string;
};

interface WorkExperienceTimelineProps {
  experiences: WorkExperience[];
}

export default function Timeline({ experiences }: WorkExperienceTimelineProps) {
  return (
    <div className="relative border-l-2 border-gray-200 ml-3">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex items-center mb-2 sm:mb-0">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <div className="ml-6 sm:ml-8 mr-4 sm:mr-8 sm:w-32 flex-shrink-0">
                <p className="font-medium text-sm text-gray-600">
                  {exp.duration}
                </p>
                <p className="text-xs text-gray-500 mt-1">{exp.company}</p>
              </div>
            </div>
            <div className="ml-6 sm:ml-0 flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 mt-[-5px]">
                {exp.position}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
