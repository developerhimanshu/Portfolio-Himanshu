import React from "react";

type contactType = {
  name: string;
  mobleNo?: string;
  url?: string;
  bgColor: string;
};

const social: contactType[] = [
  {
    name: "Mobile",
    mobleNo: "8171460265",
    bgColor: "#000000",
  },
  {
    name: "LinkedIn",
    url: "",
    bgColor: "#FFFFFF",
  },
  {
    name: "Github",
    url: "https://github.com/developerhimanshu",
    bgColor: "#FFFFFF",
  },
  {
    name: "Twitter",
    url: "",
    bgColor: "#FFFFFF",
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
        <div className="w-[100%] grid grid-cols-2 gird-rows-2 gap-4 place-items-center mt-[3rem]">
          {social.map((s) => (
            <div className="w-[50%] border-gray-500 border-[1px] rounded-lg p-3 flex flex-col items-center justify-center">
              <a href={s.url} target="_blank">
                {s.name}
              </a>
              {s.name == "Mobile" ? <div>{s.mobleNo}</div> : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
