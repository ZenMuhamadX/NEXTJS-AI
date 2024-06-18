import React from "react";
import ink from "next/link";
import Link from "next/link";

const Welcome = () => {
   return (
      <>
         <div className="justify-center items-center flex">
            <div className="bg-colors-dark shadow-sm shadow-colors-primary rounded-lg p-7 mt-16 w-full h-auto md:w-1/2 md:h-auto">
               <div className="text-colors-primary text-start font-bold text-xl py-2 ">
                  <p>Welcome to my website</p>
               </div>
               <div className="text-gray-400 text-start font-sans">
                  <p>
                     This is an open source AI chatbot app template built with
                     Next.js , the Vercel AI SDK , and Vercel KV . It uses React
                     <br />
                     <br />
                     Server Components to combine text with generative UI as
                     <br />
                     output of the LLM. The UI state is synced through the SDK
                     so the model is aware of your interactions as they happen.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Welcome;
