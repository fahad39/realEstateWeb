import express  from "express";
import { bookVisit, cancelBooking, createUser, favResidency, getAllBookedVisits } from "../controllers/userControl.js";
const router=express.Router()

router.post("/register",createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookedVisits)
router.post("/removeBooking/:id",cancelBooking)
router.post("/toFav/:rid",favResidency)


export {router as userRoute}