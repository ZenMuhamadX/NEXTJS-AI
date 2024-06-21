"use client";
import React, { useRef } from "react";
import ButtonSend, { handleInput } from "@/components/button/ButtonSend";
const Input = () => {
   const inputUser = useRef(null);

   const handleChange = (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         handleInput(inputUser);
         inputUser.current.value = "";
      }
   };

   return (
      <>
         <div className="fixed bottom-0 w-full p-4">
            <div className="max-w-screen-sm mx-auto flex items-center">
               <div className="flex-1">
                  <textarea
                     ref={inputUser}
                     placeholder="Berikan pertanyaan Anda..."
                     className="border border-colors-accent bg-transparent text-colors-primary rounded-l-lg p-3 w-full focus:outline-none resize-none min-h-10 overflow-hidden"
                     onKeyDown={handleChange}
                     rows={1}
                  ></textarea>
               </div>
               <ButtonSend inputText={inputUser} />
            </div>
            <div className="absolute bottom-0.5 left-0 right-0 text-center">
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
