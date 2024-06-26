import Chat from "@/components/chat/Chat";
import Input from "@/components/input/Input";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import React from "react";

const Hello = () => {
   return (
      <>
         <div className="fixed top-0 left-0 right-0">
            <NavBar />
         </div>
         <div>
            <Input />
         </div>
      </>
   );
};

export default Hello;
