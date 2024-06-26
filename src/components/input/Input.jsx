"use client";
import React, { useRef, useState } from "react";
import Chat from "../chat/Chat";
import Image from "next/image";
import { handleInput } from "../button/ButtonSend";
import { PaperPlaneRight } from "phosphor-react";
import { clearState } from "../button/clearState";

const Input = () => {
   const inputUser = useRef(null);
   const [chatHistory, setChatHistory] = useState([]);

   const handleButton = async (e) => {
      e.preventDefault();
      const userInput = inputUser.current.value;
      const prompt = JSON.stringify({ prompt: userInput });
      inputUser.current.value = "";
      const res = await handleInput(prompt);
      setChatHistory([...chatHistory, res]);
   };

   const handleEnter = async (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         const userInput = inputUser.current.value;
         const prompt = JSON.stringify({ prompt: userInput });
         inputUser.current.value = "";
         const res = await handleInput(prompt);
         setChatHistory([...chatHistory, res]);
      }
   };
   return (
      <>
         <div className="mt-16">
            <Chat chatHistory={chatHistory} />
         </div>
         <div className="relative min-h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               {chatHistory.length === 0 && (
                  <div className="">
                     <div className="flex flex-col items-center justify-center opacity-40">
                        <Image
                           src="/logo.png"
                           width={80}
                           height={80}
                           alt="logo"
                        />
                     </div>
                     <p className="text-colors-primary text-center font-bold mt-2 text-lg md:text-2xl">
                        Apa yang bisa saya bantu hari ini?
                     </p>
                  </div>
               )}
            </div>
         </div>
         <div className="sticky bottom-0 w-full p-4">
            <div className="max-w-screen-sm mx-auto flex items-center relative">
               {chatHistory.length > 0 && (
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        clearState(setChatHistory);
                     }}
                     className="mr-2 mb-2 bg-colors-accent rounded-md p-3 text-colors-dark font-bold active:scale-95 transition-all hover:bg-blue-400"
                  >
                     CLEAR
                  </button>
               )}
               <div className="flex-auto">
                  <textarea
                     ref={inputUser}
                     placeholder="Berikan pertanyaan Anda..."
                     className="border bg-colors-body border-colors-accent text-colors-primary rounded-l-lg p-3 w-full focus:outline-none resize-none min-h-10 overflow-hidden"
                     onKeyDown={handleEnter}
                     rows={1}
                  ></textarea>
               </div>
               <div className="active:scale-95 ml-1.5 bg-colors-accent hover:bg-blue-400 transition-all rounded-r-lg p-2.5 mb-1.5 items-center flex">
                  <button onClick={handleButton}>
                     <PaperPlaneRight size={30} />
                  </button>
               </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center">
               <p className="text-xs text-colors-primary mx-auto max-w-screen-sm">
                  Authors: Muhamad Nur Fauzan.{" "}
                  <a
                     className="underline hover:text-blue-600 transition-all font-medium italic"
                     href="https://github.com/ZenMuhamadX/NEXTJS-AI/"
                  >
                     Repositories is here
                  </a>
               </p>
            </div>
         </div>
      </>
   );
};
export default Input;
