import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (keywords) {
  console.log(process.env.REACT_APP_OPENAI_API_KEY)
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
  return `Brainstorm some coding project ideas that combine the following keywords: ${keywords}`
}