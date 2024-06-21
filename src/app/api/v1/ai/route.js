const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.SECRET_KEY_AI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request) {
   const { prompt } = await request.json();
   const result = await model.generateContent(prompt);
   const response = result.response;
   const data = response.text();
   return Response.json({
      prompt,
      response: data,
      status: 200,
   });
}
