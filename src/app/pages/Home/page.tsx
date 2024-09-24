import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[90vh]">
      <div className="flex flex-col w-auto">
        <span className="text-greenHighlight">Hello there,</span>
        <span className="text-textHighlight w-auto text-4xl font-bold">
          I'm Joel Jensen Ericson
        </span>
        <div className="w-[29rem] border-[1px] border-greenHighlight"> </div>
        <span className="text-[1.6rem] font-bold">
          And I’m an aspiring{" "}
          <span className="text-greenHighlight">Frontend dev</span>
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
        <button className="border-2 border-greenHighlight px-2 py-1 w-[8.5rem] rounded-md mt-4">
          <a href="#contact">Get in touch!</a>
        </button>{" "}
        <div className="relative top-[24rem] m-auto flex justify-center items-center w-[1.2rem] h-[2rem] rounded-md border-2 border-textColor">
          <div className="relative -top-[6px] w-[4px] h-[4px] rounded-full bg-textColor"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
