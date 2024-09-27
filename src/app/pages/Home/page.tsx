import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[90vh]">
      <div className="flex flex-col w-auto">
        <span className="text-greenHighlight">Hello there,</span>
        <span className="text-textHighlight w-auto text-4xl font-bold drop-shadow-2xl">
          I'm Joel Jensen Ericson
        </span>
        <div className="w-[29rem] border-[1px] border-greenHighlight rounded-lg" />
        <span className="text-[1.6rem] font-bold drop-shadow-2xl">
          And I’m an aspiring{" "}
          <span className="text-greenHighlight drop-shadow-2xl">
            Frontend dev
          </span>
        </span>
        <span className="">
          Who began his coding journey about a year ago,
          <br /> I am currently a{" "}
          <span className="text-greenHighlight">student</span> at{" "}
          <span className="text-greenHighlight">EC Utbildning</span>, in Växjö{" "}
          <br />
          studying{" "}
          <span className="text-greenHighlight">Frontend Development</span>.
        </span>
        <button className="border-2 border-greenHighlight px-2 py-1 w-[8.5rem] rounded-md mt-4 mb-[10rem]">
          <a href="#contact">Get in touch!</a>
        </button>{" "}
        <div className="flex flex-col justify-center items-center mt-24 w-[auto] h-[20rem]">
          <span className="animate-pulse text-textHighlight">Scroll</span>
          <div className=" w-[1px] min-h-[20rem] border-[1px] border-greenHighlight m-0 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
