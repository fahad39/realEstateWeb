import express  from "express";
import {createUser} from "../controllers/userControl"
const router=express.Router()

router.post("/register",createUser)