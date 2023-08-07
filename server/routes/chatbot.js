import express from "express";
const router = express.Router();

 import {jsconverterController} from "../controllers/Openai.js";
// // import {updateNoOfQuestions} from '../controllers/Answers'
// //const { chatbotController } = require('../controllers/openaiController');


router.post("/js-converter", jsconverterController);
// export default router;


// import { postAnswer,deleteAnswer } from "../controllers/Answers.js";
// import auth from "../middlewares/auth.js";




// router.patch("/post/:id",auth,  postAnswer); /// patch is use to update the record in the database
// router.patch("/delete/:id",auth,  deleteAnswer);

export default router;