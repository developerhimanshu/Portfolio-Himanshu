import React from "react";
import { HashLink } from "react-router-hash-link";

const Nav: React.FC = () => {
  // const [data, setData] = useState("");
  return (
    <nav className="flex justify-around h-20 w-100vw  bg-[#282829b7] items-center uppercase sticky top-0 backdrop-filter backdrop-blur-lg border-b border-gray-700 ">
      <div className="flex gap-5">
        <img src="" alt="Profile" />
        <a
          href="https://www.linkedin.com/in/himanshu-singh-graphicera/"
          rel="noopener"
          target="_blank"
          className="hover:text-yellow-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/developerhimanshu"
          rel="noopener"
          target="_blank"
          className="hover:text-yellow-500"
        >
          Github
        </a>
      </div>
      <HashLink to="/#" className="hover:text-yellow-500">
        Himanshu Singh
      </HashLink>
      <div className="flex gap-5">
        <HashLink to="/#" className="hover:text-yellow-500">
          Home
        </HashLink>
        <HashLink to="/#projects" className="hover:text-yellow-500">
          Projects
        </HashLink>
        <a
          href="https://drive.google.com/file/d/1pRCfuziHMI55WgAmMplhFmm448v8lC6y/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className="hover:text-yellow-500"
        >
          Resume
        </a>
        <HashLink to="/#contact" className="hover:text-yellow-500">
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Nav;
