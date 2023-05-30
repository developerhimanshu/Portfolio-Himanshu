import React from "react";
import { HashLink } from "react-router-hash-link";

const Nav: React.FC = () => {
  // const [data, setData] = useState("");
  return (
    <nav className="flex justify-around h-20 w-100vw  bg-yellow-50 items-center uppercase sticky top-0">
      <div className="flex gap-5">
        <img src="" alt="Profile" />
        <a href="" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/developerhimanshu" target="_blank">
          Github
        </a>
      </div>
      <HashLink to="/#">Himanshu Singh</HashLink>
      <div className="flex gap-5">
        <HashLink to="/#">Home</HashLink>
        <HashLink to="/#projects">Projects</HashLink>
        <a href="" target="_blank">
          Resume
        </a>
        <HashLink to="/#contact">Contact</HashLink>
      </div>
    </nav>
  );
};

export default Nav;
