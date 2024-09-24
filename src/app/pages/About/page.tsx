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
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiMui />, name: "MUI" },
    { icon: <SiCsharp />, name: "C#" },
  ];

  const tools = [
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiGit />, name: "Git" },
  ];

  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-row gap-2 items-center font-semibold w-[40rem] text-2xl text-textHighlight mb-4">
          <span className="text-greenHighlight font-semibold text-3xl ">#</span>
          About page <div className="h-1 w-[20rem] bg-greenHighlight"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[20rem]">
            Hello! My name is{" "}
            <span className="text-greenHighlight">Joel Jensen Ericson</span> and
            I began my journey in the art of messing around with the web about
            one year ago. <br />
            My interest with code and{" "}
            <span className="text-greenHighlight">
              Frontend development
            </span>{" "}
            began after I took an introduction course with{" "}
            <span className="text-greenHighlight">C#</span> and{" "}
            <span className="text-greenHighlight">Python</span> tied into one in
            2022, and I haven't looked back since. <br /> I'm currently studying
            at <br />
            <span className="text-greenHighlight">EC Utbildning</span> to become
            a <span className="text-greenHighlight">Frontend Developer</span>
            .
            <br />
            <br />
            Today I'm living in{" "}
            <span className="text-greenHighlight">Växjö</span>, together with my
            partner <span className="text-greenHighlight">Ebba</span> and our
            rambunctious Welsh Corgi Pembroke,{" "}
            <span className="text-greenHighlight">Budgie</span>.
          </div>

          <div className="max-w-[20rem]">
            <img
              src="Us.jpg"
              alt="family"
              className="border-2 border-t-greenHighlight border-l-greenHighlight border-r-greenHighlight rounded-t-lg max-h-[24rem]"
            />
            <div className="flex justify-center p-2 bg-[#282828]/50 border-2 border-greenHighlight mt-[-0.1rem]">
              <span className="text-textHighlight">Me, Budgie And Ebba</span>
            </div>
          </div>
        </div>

        {/* Technologies & Tools */}

        <div className="flex flex-row justify-between w-[40rem] h-[20rem] mt-4 rounded-lg  gap-4">
          <div className="flex flex-row flex-wrap w-[20rem]">
            <span>Technologies:</span>
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex gap-2 items-center bg-[#282828]/50 w-[8rem] h-[2rem] rounded-md p-2"
              >
                <span className="text-greenHighlight">{tech.icon}</span>
                <span className="text-textHighlight">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="w-1 h-auto bg-greenHighlight rounded-md"></div>
          <div>
            <span>Tools:</span>
            {tools.map((tool, idx) => (
              <div key={idx}>
                <span className="text-greenHighlight">{tool.icon}</span>{" "}
                <span className="text-textHighlight">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
