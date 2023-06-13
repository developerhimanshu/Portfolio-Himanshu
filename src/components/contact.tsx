import React from "react";

import { IconBaseProps } from "react-icons";
import { FaLinkedin, FaPhone, FaGithub, FaTwitter } from "react-icons/fa";
type contactType = {
  name: string;
  mobleNo?: string;
  url?: string;
  bgColor: string;
  icon: React.ElementType<IconBaseProps>;
};

const social: contactType[] = [
  {
    name: "Mobile",
    url: "#",
    mobleNo: "8171460265",
    bgColor: "#ffffff",
    icon: FaPhone,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/himanshu-singh-graphicera/",
    bgColor: "#0A66C2",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/developerhimanshu",
    bgColor: "#FFFFFF",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/HimanshuChamyal",
    bgColor: "#1A8CD8",
    icon: FaTwitter,
  },
];
const Contact: React.FC = () => {
  return (
    <div className="h-screen border-2 border-[#121212]" id="contact">
      <div className="md:h-[80vh] md:w-[70vw] sm:w-[100vw] lg:w-[60vw] mt-10 xl:ml-[27%] lg:ml-[37%] relative md:left-[12%]  bg-[#1E1E1F]  rounded-xl border-[1px] border-gray-500 py-7 px-6 lg:block md:flex md:flex-col">
        <h1 className="font-bold text-[2rem] ">Contact Me</h1>
        <div className="w-[130px] border-b-[5px] border-b-yellow-500 ]"></div>
        <p className="text-center font-extrabold text-[4rem] uppercase">
          Himanshu Singh
        </p>
        <div className="md:w-[30rem] ml-[25%] grid md:grid-cols-2 md:gird-rows-2 gap-4 place-items-center mt-[3rem]">
          {social.map((s) => (
            <a
              href={s.url}
              target="_blank"
              className="flex flex-col rounded-lg items-center bg-[#9999995a] gap-4 hover:bg-white/30 hover:rounded-lg transition-all ease-in backdrop-filter backdrop-blur-lg"
            >
              <div className="w-[12rem] h-[8rem] border-gray-500 border-[1px] rounded-lg p-3 flex flex-col gap-4 items-center justify-center">
                {<s.icon style={{ color: s.bgColor }} size={40} />}
                {s.name != "Mobile" ? s.name : ""}
                {s.name == "Mobile" ? <div>{s.mobleNo}</div> : ""}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
