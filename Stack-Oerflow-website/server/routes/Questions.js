import express from "express";
import { AskQuestion } from "../controllers/Questions.js";

const router = express.Router();

router.post("/Ask", AskQuestion);

export default router;
