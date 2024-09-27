import React from "react";
import { FaFolder } from "react-icons/fa6";
const ProjectPage = () => {
  const projects = [
    {
      name: "Project 1",
      desc: "Project 1 desc",
      icon: <FaFolder />,
    },
  ];

  return (
    <div className="flex justify-center items-center w-screen h-screen drop-shadow-2xl mt-24">
      ProjectPage
      <div className=""></div>
    </div>
  );
};

export default ProjectPage;
