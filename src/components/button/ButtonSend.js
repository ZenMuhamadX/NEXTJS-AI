export const handleInput = async (prompt) => {
   if (!prompt) return;
   const get = await fetch("https://api.zenxyz.online/v2/ai/gemini", {
      method: "POST",
      headers: {
         "content-type": "application/json",
         authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6Im11aGFtYWQgbnVyIGZhdXphbiIsImVtYWlsIjoibXVoYW1hZHplbjY2OUBnbWFpbC5jb20iLCJpYXQiOjE3MTkxNTQ0NDd9.IS0-H4PJY_5IxyDFfQ6_KeYJh1FGtvUkly-XnWfsCwM`,
      },
      body: prompt,
   });
   const res = await get.json();
   return res.payload.user.data;
};
