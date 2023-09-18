import express  from "express";
import { bookVisit, createUser, getAllBookedVisits } from "../controllers/userControl.js";
const router=express.Router()

router.post("/register",createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookedVisits)


export {router as userRoute}