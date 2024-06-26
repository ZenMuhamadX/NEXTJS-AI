"use client";

import Image from "next/image";
import Link from "next/link";
import { House } from "phosphor-react";

const NavBar = () => {
   return (
      <>
         <div className="flex justify-between flex-row items-center p-2 bg-colors-body text-colors-primary">
            <div className="flex items-center gap-4">
               <Link href="https://github.com/ZenMuhamadX/">
                  <Image
                     className="active:scale-110 transition-all"
                     src="/github-mark-white.png"
                     alt=""
                     width={25}
                     height={20}
                  />
               </Link>
               <span className="font-thin text-xl">||</span>
               <div>
                  <Link
                     href="https://zenxyz.online"
                     className="text-colors-primary active:scale-95 hover:text-blue-500 text-xl font-bold transition-all"
                  >
                     ZenMuhamad
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
export default NavBar;
