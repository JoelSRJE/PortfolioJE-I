"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-row gap-2 items-center font-semibold w-[30rem] text-2xl text-textHighlight mb-4">
          <span className="text-greenHighlight font-semibold text-3xl ">#</span>
          Contact Page <div className="h-1 w-[18rem] bg-greenHighlight"></div>
        </div>

        {/* Input fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <span>Name</span>
              <input
                className="h-8 w-auto rounded-md p-2 border-2 border-greenHighlight bg-background"
                placeholder="John Smith"
              />
            </div>
            <div className="flex flex-col">
              <span>Email</span>
              <input
                className="h-8 w-auto rounded-md p-2 border-2 border-greenHighlight bg-background"
                placeholder="John@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span>Message</span>
            <textarea
              cols={4}
              rows={5}
              className=" w-auto rounded-md p-2 resize-none border-2 border-greenHighlight bg-background"
              placeholder="Hello..."
            />
          </div>

          <button className="text-greenHighlight w-[8rem] rounded-md border-2 border-transparent hover:border-2 hover:border-greenHighlight">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
