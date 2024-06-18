import Welcome from "@/components/contents/Welcome";
import Input from "@/components/input/Input";
import NavBar from "@/components/navbar/NavBar";

const Page = () => {
   return (
      <>
         <section>
            <NavBar />
         </section>
         <section>
            <Welcome />
         </section>
         <Input />
      </>
   );
};
export default Page;
