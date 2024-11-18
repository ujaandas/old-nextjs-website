import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SiCplusplus,
  SiPython,
  SiCsharp,
  SiApachemaven,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReact, TbBrandNodejs } from "react-icons/tb";
import { FaLinux, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { DiDotnet, DiJava, DiMysql } from "react-icons/di";
import {
  SiFastapi,
  SiMicrosoftazure,
  SiAmazonaws,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export default function IconCarousel() {
  return (
    <Carousel
      className="w-full max-w-3xl"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {iconGroups.map((group, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <h3 className="text-lg font-semibold mb-4">{group.name}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.icons.map(({ Icon, name }, iconIndex) => (
                    <div key={iconIndex} className="flex flex-col items-center">
                      <Icon className="w-8 h-8 text-primary" />
                      {/* <span className="text-xs mt-1">{name}</span> */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const iconGroups = [
  {
    name: "💻 Programming Languages",
    icons: [
      { Icon: SiCplusplus, name: "C/C++" },
      { Icon: SiPython, name: "Python" },
      { Icon: DiJava, name: "Java" },
      { Icon: SiCsharp, name: "C#" },
      { Icon: SiTypescript, name: "JS/TS" },
      { Icon: SiHtml5, name: "HTML/CSS" },
    ],
  },
  {
    name: "⚙️ Frameworks",
    icons: [
      { Icon: DiDotnet, name: "ASP.NET Core" },
      { Icon: SiApachemaven, name: "Maven" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: TbBrandNextjs, name: "Next.js" },
      { Icon: TbBrandReact, name: "React.js" },
      { Icon: TbBrandNodejs, name: "Node.js" },
    ],
  },
  {
    name: "📊 Technologies",
    icons: [
      { Icon: FaLinux, name: "Linux" },
      { Icon: FaGitAlt, name: "Git" },
      { Icon: FaGithub, name: "Github" },
      { Icon: SiMicrosoftazure, name: "Azure" },
      { Icon: SiAmazonaws, name: "AWS" },
      { Icon: FaDocker, name: "Docker" },
    ],
  },
  {
    name: "🗃️ Databases",
    icons: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: DiMysql, name: "MySQL" },
    ],
  },
];
