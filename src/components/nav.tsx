import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Nav: React.FC = () => {
  // const [data, setData] = useState("");
  return (
    <nav className="flex justify-between px-12 pl-14 h-20 w-100vw  bg-[#9999995a] items-center uppercase sticky top-0 backdrop-filter backdrop-blur-lg border-b border-gray-500 z-10">
      <div className="flex gap-5 items-center">
        <div
          className="h-[40px] w-[40px] bg-no-repeat bg-cover rounded-full profile "
          style={{
            backgroundImage: "url(/images/profile.jpg)",
          }}
        ></div>
        <a
          href="https://www.linkedin.com/in/himanshu-singh-graphicera/"
          rel="noopener"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/developerhimanshu"
          rel="noopener"
          target="_blank"
          className="hover:text-gray-200"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <HashLink
        to="/#"
        smooth={true}
        className="hover:text-yellow-500 md:block hidden"
      >
        Himanshu Singh
      </HashLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 cursor-pointer md:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className="gap-5 md:flex hidden">
        <HashLink smooth={true} to="/#" className="hover:text-yellow-500">
          Home
        </HashLink>
        <HashLink
          smooth={true}
          to="/#projects"
          className="hover:text-yellow-500"
        >
          Projects
        </HashLink>
        <HashLink
          smooth={true}
          to="/#contact"
          className="hover:text-yellow-500"
        >
          Contact
        </HashLink>
        <a
          href="https://drive.google.com/file/d/1pRCfuziHMI55WgAmMplhFmm448v8lC6y/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className="hover:text-yellow-500"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Nav;
