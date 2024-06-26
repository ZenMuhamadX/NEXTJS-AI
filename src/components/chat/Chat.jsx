"use client";
import { Atom, UserCircle } from "phosphor-react";
import React from "react";

const Chat = ({ chatHistory }) => {
   return (
      <div className="mt-4 mx-4 grid grid-cols-1 gap-4 md:w-1/2 md:mx-auto">
         {chatHistory.map((chat, index) => (
            <div key={index} className="flex flex-col">
               <div className="flex items-center -mb-2">
                  <UserCircle size={32} className="text-colors-primary mr-2" />
                  <span className="text-colors-primary font-bold text-sm">
                     Kamu
                  </span>
               </div>
               <div>
                  <p className="text-colors-primary font-normal mb-2 inline-block px-10 py-2">
                     {chat?.prompt}
                  </p>
               </div>
               <div className="flex items-center -mb-2">
                  <Atom size={32} className="text-blue-500 mr-2" />
                  <span className="text-colors-primary font-bold text-sm">
                     Ai
                  </span>
               </div>
               <div>
                  <p className="text-colors-primary font-sans mb-2 inline-block px-10 py-2 rounded-2xl">
                     {chat?.engineAI}
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Chat;
