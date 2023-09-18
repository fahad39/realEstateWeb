import express  from "express";
import { bookVisit, createUser } from "../controllers/userControl.js";
const router=express.Router()

router.post("/register",createUser)
router.post("/bookVisit/:id",bookVisit)


export {router as userRoute}