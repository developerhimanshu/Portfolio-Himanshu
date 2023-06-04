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
      <div className="w-[70vw] h-[80vh] mt-[7.5rem] ml-[27%] bg-[#1E1E1F] rounded-xl border-[1px] border-gray-500 py-7 px-6 relative ">
        <h1 className="font-bold text-[2rem] ">Contact Me</h1>
        <div className="w-[130px] border-b-[5px] border-b-yellow-500 ]"></div>
        <p className="text-center font-extrabold text-[4rem] uppercase">
          Himanshu Singh
        </p>
        <div className="w-[30rem] ml-[25%] grid grid-cols-2 gird-rows-2 gap-4 place-items-center mt-[3rem]">
          {social.map((s) => (
            <a
              href={s.url}
              target="_blank"
              className="flex flex-col items-center gap-4 hover:bg-white/30 hover:rounded-lg transition-all ease-in"
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
