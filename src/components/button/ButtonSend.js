export const handleInput = async (prompt) => {
   if (!prompt) return;
   const token = process.env.NEXT_PUBLIC_TOKEN_JWT;
   const get = await fetch("https://api.zenxyz.online/v2/ai/gemini", {
      method: "POST",
      headers: {
         "content-type": "application/json",
         authorization: `Bearer ${token}`,
      },
      body: prompt,
   });
   const res = await get.json();
   return res.payload.user.data;
};
