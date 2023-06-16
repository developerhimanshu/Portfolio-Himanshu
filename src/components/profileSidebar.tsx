import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
const ProfileSidebar: React.FC = () => {
  return (
    <div className="h-[80vh] xl:w-[23vw] lg:w-[30vw] lg:pb-0 md:h-[80vh] sm:w-[92vw] sm:pb-7  mt-12 xl:ml-[5rem] lg:ml-8 flex flex-col bg-[#1E1E1F]  items-center rounded-xl border-[1px] border-gray-500 lg:fixed top-[4rem]">
      <div className="mt-[2rem] flex gap-3 flex-col items-center">
        <div
          className="h-[180px] w-[180px] bg-no-repeat bg-cover rounded-full "
          style={{
            backgroundImage: "url(/images/profile.jpg)",
          }}
        ></div>
        <h1 className="text-4xl font-semibold ">Himanshu Singh</h1>
        <p className="bg-[#2B2B2C] font-thin px-3 py-1 rounded-xl text-gray-300">
          Frontend Developer
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.github.com/developerhimanshu"
            rel="noopener"
            target="_blank"
          >
            <p className="hidden">G</p>
            <AiFillGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-singh-graphicera/"
            rel="noopener"
            target="_blank"
          >
            <p className="hidden">LI</p>
            <AiFillLinkedin size={20} />
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#56565678] p-3 rounded-lg border-[1px] border-gray-600">
            <AiOutlineMail style={{ color: "#FDCA65" }} />
          </div>
          <div>
            <p className="font-thin uppercase text-gray-400 text-[14px]">
              Email
            </p>
            <a href="mailto:himanshusinghwork01@gmail.com" target="_blank">
              himanshusinghwork01@g...
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#56565678] p-3 rounded-lg border-[1px] border-gray-600">
            <FaMapPin style={{ color: "red" }} />
          </div>
          <div>
            <p className="font-thin uppercase text-gray-400 text-[14px]">
              Location
            </p>
            <p>Clement Town, Dehradun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
