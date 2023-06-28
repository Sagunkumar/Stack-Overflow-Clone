import express from "express";

import { postAnswer,deleteAnswer } from "../controllers/Answers.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch("/post/:id",auth,  postAnswer); /// patch is use to update the record in the database
router.patch("/delete/:id",auth,  deleteAnswer);

export default router;