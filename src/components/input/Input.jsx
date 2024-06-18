"use client";
import React, { useRef } from "react";
import { PaperPlaneRight } from "phosphor-react";

const Input = () => {
   const inputUser = useRef();
   const handleInput = (e) => {
      const Input = inputUser.current.value;
      if (!Input || Input.trim() == "") return;
      if (e.key == "Enter" || e.type == "click") {
         e.preventDefault();
         console.log(Input);
         inputUser.current.value = "";
      }
   };
   return (
      <>
         <div className="flex justify-center items-center">
            <div className="md:w-1/2 md:mt-16 w-full mt-64">
               <div className="bg-colors-dark shadow-sm shadow-colors-primary rounded-se-xl rounded-ss-xl p-7 h-auto md:h-44">
                  <div className="flex justify-center items-center md:p-4 text-colors-primary shadow-sm border  md:shadow-colors-primary rounded-md">
                     <input
                        className="flex-grow bg-transparent text-colors-primary placeholder-gray-500 border-none outline-none md:ml-0 ml-3"
                        type="text"
                        ref={inputUser}
                        onKeyDown={handleInput}
                        placeholder="Berikan pertanyaan Anda..."
                     />
                     <div className="bg-colors-accent rounded-lg flex justify-center items-center hover:bg-gray-600 transition-all md:w-20 md:h-10 w-10 h-10 m-1">
                        <button onClick={handleInput}>
                           <PaperPlaneRight size={30} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Input;
