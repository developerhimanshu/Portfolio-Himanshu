import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Project = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  deployUrl?: string;
  srcCode?: string;
};

const prjcts: Project[] = [
  {
    id: 1,
    name: "Smart farming",
    description: "Smart farming web application",
    imgUrl: "/images/project1.png",
    deployUrl: "https://smart-farming-developerhimanshu1.vercel.app/",
    srcCode: "https://github.com/developerhimanshu/smart-farming",
  },
  {
    id: 2,
    name: "Netflix Clone",
    description: "Movie Streaming application",
    imgUrl: "/images/project2.png",
    deployUrl: "https://netflix-clone-298ae.web.app/",
    srcCode:
      "https://github.com/developerhimanshu/MetFlix-StreamMoviesAndWebSeries",
  },
];

const Projects: React.FC = () => {
  return (
    <div className=" md:border-2 lg:pt-[4.5rem] border-[#121212]" id="projects">
      <div className="lg:h-[80vh] max-h-[80vh] md:w-[92vw] sm:w-[92vw] lg:w-[60vw] mt-10 xl:ml-[20%] lg:ml-[25%] relative lg:left-[12%]  bg-[#1E1E1F]  rounded-xl border-[1px] border-gray-500 py-7 px-6 lg:block md:flex md:flex-col">
        <h1 className="font-bold text-[2rem]">Projects</h1>
        <div className="w-[60px] border-b-[5px] border-b-yellow-500 "></div>
        <div className="flex flex-col items-center mt-6">
          <Carousel
            showArrows
            infiniteLoop
            transitionTime={1000}
            interval={10000}
            autoPlay
            showThumbs={false}
            animationHandler="slide"
            showIndicators={false}
            className="rounded-[1rem] hidden md:block"
            centerMode={true}
          >
            {prjcts.map((project) => (
              <div key={project.id} className="relative">
                <a
                  href={project.deployUrl ? project.deployUrl : "#"}
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    src={project.imgUrl}
                    alt={project.name}
                    className="rounded-[1rem]"
                  />
                </a>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <a href={project.srcCode} rel="noopener" target="_blank">
                    <button className="mr-2 px-4 py-2  w-[100px] bg-[#000000b4] rounded-lg cursor-pointer hover:bg-black/90">
                      Code
                    </button>
                  </a>
                  <a
                    href={project.deployUrl ? project.deployUrl : "#"}
                    rel="noopener"
                    target="_blank"
                  >
                    <button className="px-4 py-2 w-[100px] bg-[#000000c3] rounded-lg cursor-pointer hover:bg-black/90 ">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="h-[50vh] flex flex-col items-center overflow-y-scroll md:hidden">
            {prjcts.map((project) => (
              <div key={project.id} className="mb-6">
                <a
                  href={project.deployUrl ? project.deployUrl : "#"}
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    src={project.imgUrl}
                    alt={project.name}
                    className="rounded-[1rem]"
                  />
                </a>
                <div className="text-center">{project.name}</div>
                <div className="flex  justify-center">
                  <a href={project.srcCode} rel="noopener" target="_blank">
                    <button className="mr-2 px-4 py-[5px]  w-[80px] bg-[#000000b4] rounded-lg cursor-pointer hover:bg-black/90">
                      Code
                    </button>
                  </a>
                  <a
                    href={project.deployUrl ? project.deployUrl : "#"}
                    rel="noopener"
                    target="_blank"
                  >
                    <button className="px-4 py-[5px] w-[80px] bg-[#000000c3] rounded-lg cursor-pointer hover:bg-black/90 ">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
