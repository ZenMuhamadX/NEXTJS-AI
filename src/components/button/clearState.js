export const clearState = async (setChatHistory) => {
   setChatHistory([]);
   const token = process.env.NEXT_PUBLIC_TOKEN_JWT;
   await fetch("https://api.zenxyz.online/v2/ai/clear", {
      method: "POST",
      headers: {
         "content-type": "application/json",
         authorization: `Bearer ${token}`,
      },
   });
};
