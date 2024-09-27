"use client";
import React, { useState } from "react";

const ContactPage = () => {
  /* Troligtvis onödiga.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  */

  const handleEmailClick = () => {
    const subject = "From website: Fill in subject please";
    const body = "Hi, \n\n Please fill in the body of your message";
    const mailtoLink = `mailto:JoelSRJE@hotmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-row gap-2 items-center font-semibold w-[30rem] text-2xl text-textHighlight">
          <span className="text-greenHighlight font-semibold text-3xl drop-shadow-2xl ">
            #
          </span>
          Contact Page{" "}
          <div className="h-1 w-[18rem] bg-greenHighlight rounded-lg" />
        </div>

        <div className=" w-[30rem] p-4 ">
          <span className="text-greenHighlight">Currently:</span>
          <br />
          I'm looking for an opportunity to acquire a "
          <span className="text-greenHighlight">LIA</span>"-position in{" "}
          <span className="text-greenHighlight">Växjö</span>, Sweden to further
          my <span className="text-greenHighlight">frontend</span> knowledge and
          skills and perhaps work there afterwards.
          <br />
          <br />
          Start date: <br />
          <span className="text-textHighlight">28 Oct 2024 - 24 Jan 2025 </span>
        </div>
        <div className="h-1 w-[30rem] bg-greenHighlight mb-4 rounded-lg" />

        {/* Input fields */}
        {/* */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-row gap-4">
            {/*<div className="flex flex-col">
              <span>Name</span>
              <input
                className="h-12 w-auto rounded-md p-2 border-2 border-greenHighlight bg-background"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
             <div className="flex flex-col">
              <span>Email</span>
              <input
                className="h-12 w-auto rounded-md p-2 border-2 border-greenHighlight bg-background"
                placeholder="JaneDoe@gmail.com"
                name={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>*/}
          </div>

          {/* <div className="flex flex-col">
            <span>Message</span>
            <textarea
              cols={4}
              rows={6}
              className=" w-auto rounded-md p-2 resize-none border-2 border-greenHighlight bg-background"
              placeholder="Hello..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>*/}

          <button
            className="relative m-auto text-greenHighlight w-[8rem] h-[2.5rem] rounded-md border-2 border-transparent hover:border-2 hover:border-greenHighlight"
            onClick={handleEmailClick}
          >
            Open Email
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
