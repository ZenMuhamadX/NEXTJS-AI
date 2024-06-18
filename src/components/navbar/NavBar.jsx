"use client";

import Image from "next/image";
import Link from "next/link";
import { House } from "phosphor-react";

const NavBar = () => {
   return (
      <>
         <div className="shadow-sm shadow-colors-accent flex justify-between flex-row items-center p-4 bg-colors-dark text-colors-primary">
            <div className="flex items-center gap-4">
               <Image src="/logo.png" alt="Logo" width={25} height={25} />{" "}
               <span className="font-thin text-xl italic">/</span>
               <div className="hover:text-gray-400 transition-all">
                  <Link href="/" className="font-medium">
                     <div className="flex gap-1">
                        <House size={18} weight="bold" />
                        <span className="text-colors-primary text-sm hover:text-gray-400 transition-all">
                           HOME
                        </span>
                     </div>
                  </Link>
               </div>
            </div>
            <div className="md:flex flex-row gap-2 ">
               <Link href="https://github.com/ZenMuhamadX/">
                  <div className="hover:bg-gray-800 hover:scale-95 hover:text-colors-primary transition-all bg-black text-colors-primary font-medium border-b border-colors-primary rounded-md  w-auto h-auto py-1 px-4 justify-between flex gap-2">
                     <Image
                        src="/github-mark-white.png"
                        alt=""
                        width={25}
                        height={20}
                     />
                     <span className="hidden md:block">Github</span>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
};
export default NavBar;
