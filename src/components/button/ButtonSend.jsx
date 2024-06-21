const { PaperPlaneRight } = require("phosphor-react");
export const handleInput = async (inputText) => {
   const inputValue = inputText.current.value.trim();
   if (!inputValue) return;
   const promptUser = JSON.stringify({ prompt: inputValue });
   const get = await fetch("/api/v1/ai", {
      method: "POST",
      body: promptUser,
   });
   const res = await get.json();
   console.log(res);
   inputText.current.value = "";
};
const ButtonSend = ({ inputText }) => {
   return (
      <>
         <div className="ml-1.5 bg-colors-accent hover:bg-blue-400 transition-all rounded-r-lg p-2.5 mb-1.5 items-center flex">
            <button
               onClick={(e) => {
                  e.preventDefault();
                  handleInput(inputText);
               }}
            >
               <PaperPlaneRight size={30} />
            </button>
         </div>
      </>
   );
};

export default ButtonSend;
