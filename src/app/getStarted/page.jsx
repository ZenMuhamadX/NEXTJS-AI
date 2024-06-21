import Input from "@/components/input/Input";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import React from "react";

const Hello = () => {
   return (
      <>
         <div className="">
            <NavBar />
         </div>
         <div className=" justify-center items-center flex mt-[150px] opacity-15">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
         </div>
         <div>
            <Input />
         </div>
      </>
   );
};

export default Hello;
