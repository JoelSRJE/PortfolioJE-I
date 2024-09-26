"use client";
import React, { useState } from "react";
import {
  FaLock,
  FaLockOpen,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const PortNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navButtons = [
    { tag: "#", name: "Home", link: "#home" },
    { tag: "#", name: "About", link: "#about" },
    { tag: "#", name: "Projects", link: "#projects" },
    { tag: "#", name: "Contact", link: "#contact" },
  ];

  const socialButtons = [
    {
      tag: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/JoelSRJE",
    },
    {
      tag: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joel-jensen-ericson-a77aa2295/",
    },
  ];

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex justify-between text-center w-screen h-auto p-4  mb-12 shadow-md">
      <div className="ml-2">
        <div style={{ transform: "rotate(45deg)" }}>
          <div className="flex justify-center items-center w-12 h-12 border-2 border-greenHighlight">
            <div className="w-10 h-10 border-2 border-textHighlight">
              <div
                className="relative top-[0.4rem]"
                style={{ transform: "rotate(-45deg)" }}
              >
                <span className="relative right-[0.2rem] text-greenHighlight font-semibold">
                  J
                </span>
                <span className="text-textHighlight font-semibold">/</span>
                <span className="relative left-[0.2rem] text-greenHighlight font-semibold">
                  E
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-24 top-8 [ flex gap-4 ]">
          {socialButtons.map((button, idx) => (
            <a
              href={button.link}
              className="text-textColor scale-[1.4] hover:text-greenHighlight"
            >
              {button.tag}
            </a>
          ))}
        </div>
      </div>

      <div className="relative flex gap-4 right-[10rem]">
        {navButtons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="text-md  hover:text-greenHighlight"
          >
            <span className="relative right-0.5 text-greenHighlight">
              {item.tag}
            </span>
            {item.name}
          </a>
        ))}

        <button onClick={() => handleLogin()} className="relative left-[8rem]">
          {isLoggedIn ? (
            <FaLockOpen className="text-textColor" />
          ) : (
            <FaLock className="text-greenHighlight" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PortNavbar;
