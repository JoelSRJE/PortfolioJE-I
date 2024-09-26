import React from "react";
import {
  FaLock,
  FaLockOpen,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiFirebase,
} from "react-icons/si";

const Footer = () => {
  const redirectIcons = [
    { name: "Github", icon: <FaGithub />, link: "https://github.com/JoelSRJE" },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/joel-jensen-ericson-a77aa2295/",
    },
  ];

  const builtWith = [
    { icon: <SiTypescript />, name: "TypeScript", color: "#007ACC" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <SiHtml5 />, name: "HTML", color: "#E44D26" },
    { icon: <SiReact />, name: "React", color: "#00D8FF" },
    { icon: <SiFirebase />, name: "Firebase", color: "#F58220" },
  ];

  return (
    <div className="flex justify-between items-center w-screen shadow-xl h-[3rem] bg-[#171717] p-5">
      <div className="scale-[0.75]">
        <div style={{ transform: "rotate(45deg)" }}>
          <div className="flex justify-center items-center w-10 h-10 border-2 border-greenHighlight">
            <div className="w-8 h-8 border-2 border-textHighlight">
              <div
                className="relative "
                style={{ transform: "rotate(-45deg)" }}
              >
                <span className="relative right-[0.1rem] text-greenHighlight font-semibold">
                  J
                </span>
                <span className="text-textHighlight font-semibold">/</span>
                <span className="relative left-[0.1rem] text-greenHighlight font-semibold">
                  E
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        {redirectIcons.map((item) => (
          <a
            className="scale-[1.5] hover:text-greenHighlight"
            href={item.link}
            key={item.name}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center flex-row gap-2">
        Built w/{" "}
        {builtWith.map((item, idx) => (
          <span key={idx} style={{ color: item.color }}>
            {item.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
