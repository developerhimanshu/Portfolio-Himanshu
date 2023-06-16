import React from "react";
import Profile from "./profile";
import Projects from "./projects";
import Contact from "./contact";
const Home: React.FC = () => {
  return (
    <div className="pr-4 pl-4 lg:pl-0 xl:pr-0 ">
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
