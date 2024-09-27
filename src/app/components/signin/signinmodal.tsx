"use client";
import React, { useState } from "react";
import { signIn } from "../../lib/auth/authService";

interface SignInModalProps {
  openModal: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ openModal, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  if (!openModal) return null;

  return (
    <div className="absolute top-[100%] left-3/4 mt-2 w-auto z-30 bg-background border-[1px] border-slate-200 rounded-lg flex flex-col p-2">
      <button className="relative w-4 text-textHighlight" onClick={onClose}>
        X
      </button>
      <span>{message}</span>
      <div className=" flex flex-col items-center justify-center p-4 w-[14em] rounded-lg shadow-lg z-30">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-greenHighlight  border-2 bg-transparent p-2 mb-2 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-greenHighlight  border-2 bg-transparent p-2 mb-2 w-full rounded-lg"
        />
        <button
          type="submit"
          className="flex justify-center items-center w-[6rem] h-[2rem] bg-transparent text-textHighlight p-2 rounded-lg border-2 border-transparent hover:text-greenHighlight"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
