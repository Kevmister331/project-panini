import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (keywords) {
  if (!configuration.apiKey) {
    console.log("Key invalid")
    return;
  }
  
  if (keywords.trim().length === 0) {
    console.log("Please enter a valid set of keywords")
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(keywords),
      max_tokens: 200,
      temperature: 0.6,
    });
    return completion.data
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    console.log("error:" + error);
  }
}

function generatePrompt(keywords) {
  return `Come up with a list of 5 coding project ideas (include a catchy project name and a project description for each idea) that combine the following keyword(s): ${keywords}`
}