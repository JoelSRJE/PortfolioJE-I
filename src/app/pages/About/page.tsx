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

interface MousePosition {
  x: number;
  y: number;
}

const AboutPage = ({ mousePosition }: { mousePosition: MousePosition }) => {
  const numberofDividers = 4;

  const technologies = [
    { icon: <SiJavascript />, name: "JavaScript", color: "#F0DB4F" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#007ACC" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <SiHtml5 />, name: "HTML", color: "#E44D26" },
    { icon: <SiCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <SiMui />, name: "MUI", color: "#1C7FB6" },
    { icon: <SiCsharp />, name: "C#", color: "#68217A" },
  ];

  const tools = [
    { icon: <SiFirebase />, name: "Firebase", color: "#F58220" },
    { icon: <SiGithub />, name: "GitHub", color: "#8892b0" },
    { icon: <SiFigma />, name: "Figma", color: "#FFF" },
    { icon: <SiReact />, name: "React", color: "#00D8FF" },
    { icon: <SiGit />, name: "Git", color: "#F34F29" },
  ];

  const prevExperience = [
    {
      company: "Abli AB",
      type: "Internship",

      companyDesc:
        "ABLI AB is a consulting company that supports vocational colleges with services aimed at improving educational operations. Their offerings include educational management, application support, oversight assistance, and the development of IT solutions to meet the digital needs of the education sector.",
      date: "Apr 2024 - Jun 2024",
      position: "Frontend Developer / Teamleader",
      workDesc: (
        <>
          <span>
            Took on the role as teamleader for Frontend 1, Our primary goal was
            to build the application.
          </span>
          <p>
            We used <span style={{ color: "#00D8FF" }}>NextJS</span>,{" "}
            <span style={{ color: "#007ACC" }}>TypeScript</span> and{" "}
            <span style={{ color: "#1C7FB6" }}>Material Ui</span>.
          </p>
          <p>
            I did code reviews, worked on components. Took part in meetings with
            Team leads and the owner.
          </p>
          <p>We worked in a agile development setting.</p>
        </>
      ),

      tools: [
        { name: "NextJS", icon: <SiReact />, color: "#00D8FF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "MUI", icon: <SiMui />, color: "#1C7FB6" },
      ],
    },
    {
      company: "WoltUse",
      type: "Free/Experience",

      companyDesc:
        "Woltuse aim to make an impact on the Ev´s market and to be a part of accelerating the electrification as well as develop new areas and business models tied to it. We will make charging more enjoyable and meaningful and create a venue around them.",
      date: "Oct 2023 - Mar 2024",
      position: "Team Member",
      workDesc: (
        <>
          <p>
            Worked together with my study group to write the MVP for WoltUse.
          </p>
          <p>
            Wrote components in{" "}
            <span style={{ color: "#00D8FF" }}>React + Vite</span>,{" "}
            <span style={{ color: "#F0DB4F" }}>JavaScript</span> and{" "}
            <span style={{ color: "#38B2AC" }}>Tailwind</span>, created some of
            the UI.
          </p>
          <p>I Assisted wherever I was needed.</p>
        </>
      ),
      tools: [
        { name: "React + Vite", icon: <SiReact />, color: "#00D8FF" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
        { name: "TailwindCss", icon: <SiTailwindcss />, color: "#38B2AC" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-row gap-2 items-center font-semibold w-[40rem] text-2xl text-textHighlight mb-4 drop-shadow-2xl">
          <span className="text-greenHighlight font-semibold text-3xl  ">
            #
          </span>
          About page{" "}
          <div className="h-1 w-[20rem] bg-greenHighlight rounded-lg"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[20rem]">
            Hello! My name is{" "}
            <span className="text-greenHighlight font-semibold italic">
              Joel Jensen Ericson
            </span>{" "}
            and I began my journey in the art of messing around with the web
            about one year ago. <br />
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
            <span className="text-greenHighlight">Växjö</span>, with my partner{" "}
            <span className="text-greenHighlight">Ebba</span> and our
            rambunctious Welsh Corgi Pembroke,{" "}
            <span className="text-greenHighlight">Budgie</span>.<br />
            <br /> Fluent in{" "}
            <span className="text-greenHighlight">Swedish</span> and{" "}
            <span className="text-greenHighlight">English</span>, both in
            writing and speaking. <br />
          </div>

          <div className="max-w-[20rem]">
            <img
              src="Us.jpg"
              alt="family"
              className="border-2 border-t-greenHighlight border-l-greenHighlight border-r-greenHighlight rounded-t-lg max-h-[24rem]"
            />
            <div className="flex justify-center p-2 bg-[#282828]/50 border-2 border-greenHighlight mt-[-0.1rem] rounded-b-lg">
              <span className="text-textHighlight">Me, Budgie And Ebba</span>
            </div>
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="flex flex-row justify-between w-[40rem] h-[13rem] mt-4 rounded-lg">
          <div className=" flex-wrap w-[20rem]">
            <span className="w-[20rem]">Technologies:</span>
            <div className="flex flex-row justify-start flex-wrap  w-19.5rem] gap-2">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 items-center bg-[#282828]/50 shadow-2xl w-[8rem] h-[2rem] rounded-md p-2"
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  <span className="text-textHighlight">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1 h-auto bg-greenHighlight rounded-md m-6"></div>
          <div className=" flex-wrap w-[20rem]">
            <span className="w-[20rem]">Tools:</span>
            <div className="flex flex-row justify-start flex-wrap w-[19.5rem] gap-2">
              {tools.map((tools, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 items-center bg-[#282828]/50 shadow-2xl w-[8rem] h-[2rem] rounded-md p-2"
                >
                  <span style={{ color: tools.color }}>{tools.icon}</span>
                  <span className="text-textHighlight">{tools.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl text-textHighlight mt-4">
          Previous Experience
        </h2>
        <div className="flex justify-between min-w-[50rem] ">
          {/* prev experience */}
          {/*card*/}
          <div className="flex flex-col flex-wrap mt-4 justify-center min-w-[50rem] h-[auto] gap-4 rounded-lg p-2">
            {prevExperience.map((exp, idx) => (
              <div key={idx} className="flex flex-row max-h-[20rem]">
                <div className="relative w-[20rem] h-auto bg-[#282828]/10 rounded-lg shadow-2xl p-2">
                  <div className="card absolute inset-0 bg-[#18bf7e]/80 rounded-lg "></div>

                  <div className="flex justify-between">
                    <span className="border-b-4 border-greenHighlight font-bold text-xl text-textHighlight mb-2">
                      {exp.company}
                    </span>
                    <span className="text-textHighlight font-thin italic">
                      {exp.type}
                    </span>
                  </div>
                  <div>{exp.companyDesc}</div>
                  <div className="absolute">
                    <div className=" flex justify-center -rotate-90 text-textHighlight transform -translate-y-28 -translate-x-28">
                      {exp.date}
                    </div>
                  </div>
                </div>

                {/* divider */}
                <div className="flex  items-center p-4 w-auto ">
                  {Array.from({ length: numberofDividers }, (_, idx) => (
                    <div
                      key={idx}
                      className="h-1 w-5 bg-greenHighlight rounded-lg mr-2 shadow-2xl"
                    ></div>
                  ))}
                </div>

                {/* My position */}
                <div className="flex flex-col w-[20rem] h-auto p-2 bg-[#282828]/10 shadow-2xl rounded-lg gap-2 relative">
                  <div className="card absolute inset-0 bg-[#18bf7e]/80 rounded-lg "></div>
                  <div className="text-center text-textHighlight">
                    {exp.position}
                  </div>
                  <div className="h-1 w-auto bg-greenHighlight rounded-lg"></div>
                  <div className="">{exp.workDesc}</div>
                  <div className="flex flex-col gap-4 ">
                    {exp.tools.map((worktool, idx) => (
                      <span
                        key={idx}
                        className="flex justify-center scale-150 text-textHighlight transform -translate-y-28 translate-x-44"
                        style={{ position: "relative" }}
                      >
                        <span style={{ color: worktool.color }}>
                          {worktool.icon}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
