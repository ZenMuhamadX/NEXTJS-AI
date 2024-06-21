import Link from "next/link";
import React from "react";

const Welcome = () => {
   return (
      <>
         <div className="justify-center items-center flex">
            <div className="bg-colors-dark shadow-sm outline outline-1 outline-colors-accent rounded-t-md p-7 mt-16 w-full h-auto md:w-1/2 md:h-auto">
               <div className="text-colors-primary text-start font-bold text-xl py-2 ">
                  <p>Selamat Datang..</p>
                  <br />
               </div>
               <div className="text-gray-400 text-start font-sans">
                  <p>
                     Ini adalah Web chatbot AI yang dibangun dengan
                     Next.js,OpenAI dan React.
                     <br />
                     <br />
                     Menggunakan React Server Components untuk menggabungkan
                     teks dengan antarmuka pengguna generatif sebagai output
                     dari LLM. Status UI disinkronkan melalui SDK sehingga model
                     sadar terhadap interaksi Anda saat terjadi.
                  </p>
                  <br />
                  <p className="mt-2 font-bold text-colors-primary text-center ">
                     PEMBUAT: Muhamad Nur Fauzan
                  </p>
               </div>
            </div>
         </div>
         <div className="justify-items-start items-start flex mt-0.5 ml-[341px]">
            <Link
               className="bg-colors-accent text-colors-primary font-sans py-2 px-8 hover:bg-gray-500 rounded-b-md active:scale-95 transition-all"
               href={"/getStarted"}
            >
               Start
            </Link>
         </div>
      </>
   );
};

export default Welcome;
