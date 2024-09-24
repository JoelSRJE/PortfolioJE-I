import React from "react";
import {
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiGithub,
  SiGit,
  SiFigma,
  SiReact,
  SiFirebase,
} from "react-icons/si";

const AboutPage = () => {
  const technologies = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "MUI", icon: <SiMui /> },
  ];

  const tools = [
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "React", icon: <SiReact /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      About page
      <div className="">
        Hello! My name is Joel Jensen Ericson and I began my journey in the art
        of messing around with the web about a year ago. My interest with code
        and Frontend development began after I took an introduction course with
        C# and Python tied into one in 2022, and I haven't looked back since.{" "}
        <br /> I'm currently studing at EC Utbildning to become a Frontend
        Developer.
        <br />
        Today I'm living in Växjö, together with my partner Ebba and our
        rambunctious Welsh Corgi Pembroke, Budgie.
      </div>
    </div>
  );
};

export default AboutPage;
