import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Project = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  deployUrl?: string;
};

const prjcts: Project[] = [
  {
    id: 1,
    name: "Smart farming",
    description: "Smart farming web application",
    imgUrl: "/images/project1.png",
    deployUrl: "https://smart-farming-app.netlify.app/",
  },
  {
    id: 2,
    name: "Netflix",
    description: "Movie Streaming application",
    imgUrl: "/images/project2.png",
    deployUrl: "https://netflix-clone-298ae.web.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="h-screen border-2 border-gray-900 " id="projects">
      <div
        className="w-[70vw] h-[80vh]  mt-[7.5rem]
      ml-[27%]  bg-[#1E1E1F]  rounded-xl border-[1px] border-gray-500 py-7 px-6"
      >
        <h1 className="font-bold text-[2rem]">Projects</h1>
        <div className="w-[60px] border-b-[5px] border-b-yellow-500 "></div>
        <Carousel
          showArrows
          infiniteLoop
          transitionTime={1000}
          autoPlay
          showThumbs={false}
          animationHandler={"slide"}
        >
          {prjcts.map((project) => (
            <a
              href={project.deployUrl ? project.deployUrl : "#"}
              rel="noopener"
              target="_blank"
            >
              <img src={project.imgUrl} alt={project.name} />
              <div className="legend">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
