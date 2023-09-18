import express  from "express";
import { bookVisit, cancelBooking, createUser, getAllBookedVisits } from "../controllers/userControl.js";
const router=express.Router()

router.post("/register",createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookedVisits)
router.post("/removeBooking/:id",cancelBooking)


export {router as userRoute}