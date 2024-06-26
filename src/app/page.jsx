import Welcome from "@/components/contents/Welcome";
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
      </>
   );
};
export default Page;
