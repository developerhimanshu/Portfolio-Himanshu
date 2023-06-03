import React from "react";
import Profile from "./profile";
import Projects from "./projects";
import Contact from "./contact";
const Home: React.FC = () => {
  return (
    <div>
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
