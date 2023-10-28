import React from "react";

const ProfileMain: React.FC = () => {
  return (
    <div className="md:h-[80vh] md:w-[92vw] sm:w-[92vw] lg:w-[60vw] mt-10 xl:ml-[20%] lg:ml-[25%] relative lg:left-[12%] bg-[#1E1E1F]  rounded-xl border-[1px] border-gray-500 py-7 px-6 lg:block md:flex md:flex-col">
      <h1 className="font-bold text-[2rem]">About Me</h1>
      <div className="w-[80px] border-b-[5px] border-b-yellow-500 "></div>
      <div className="mt-7 text-gray-300 text-[1.3rem] flex flex-col gap-4">
        <p>
          I'm a <span className="text-yellow-500">Full-Stack developer</span>{" "}
          from India, I build apps using{" "}
          <span className="text-yellow-500">React.js</span>
        </p>
        <p>
          I always try to build{" "}
          <span className="text-yellow-500">high quality</span> and{" "}
          <span className="text-yellow-500">responsive apps </span>
          with <span className="text-yellow-500">good and unique design.</span>
        </p>
        <p>
          I consistently practice on{" "}
          <span className="text-yellow-500">Leetcode</span> to sharpen my
          problem solving skills.
        </p>

        <div className="flex flex-col gap-4">
          <p>
            <span className="text-yellow-500">Front End:</span> HTML-5, CSS-3,
            JavaScript, React.js, Redux and TypeScript
          </p>
          <p>
            <span className="text-yellow-500">CSS Frameworks:</span>
            Tailwind-CSS, SASS
          </p>
          <p>
            <span className="text-yellow-500">Tools:</span> Postman, Git and
            Github.
          </p>
          <p>
            <span className="text-yellow-500">Currently Exploring: </span>
            MongoDB, Node.js, ,Express.js and various backend technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
