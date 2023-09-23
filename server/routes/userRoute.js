import express  from "express";
import { bookVisit, cancelBooking, createUser, favResidency, getAllBookedVisits, getAllFavorites } from "../controllers/userControl.js";
import jwtCheck from "../config/auth0Config.js";
const router=express.Router()

router.post("/register",jwtCheck,createUser)
router.post("/bookVisit/:id",jwtCheck,bookVisit)
router.post("/allBookings",getAllBookedVisits)
router.post("/removeBooking/:id",jwtCheck,cancelBooking)
router.post("/toFav/:rid",jwtCheck,favResidency)
router.post("/allFav",jwtCheck,getAllFavorites)


export {router as userRoute}