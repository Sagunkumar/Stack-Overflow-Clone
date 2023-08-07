import express from "express";
import dotenv from "dotenv"
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log({key: process.env.OPENAI_API_KEY})
const openai = new OpenAIApi(configuration);



export const jsconverterController = async (req, res) => {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `/* convert these instruction into javascript code \n${text}`,
        max_tokens: 400,
        temperature: 0.25,
      });
      if (data) {
        if (data.choices[0].text) {
          return res.status(200).json(data.choices[0].text);
        }
      }
    } catch (err) {
      console.log(err);
      console.log("chutiya");
      return res.status(404).json({
        message: err.message,
      });
    }
  };