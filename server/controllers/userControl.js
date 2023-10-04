import asyncHandler from "express-async-handler"

import {prisma} from "../config/prismaConfig.js"

export const createUser=asyncHandler(async(req,res)=>{
    let {email}=req.body
    const userExist=await prisma.user.findUnique({where:{email:email}})
    if(!userExist){
        const user=await prisma.user.create({data:req.body})
        res.send({
            message:"User registered sucessfully",
            user:user
        })
    }else{
        return res.status(201).send({message:"User already registered"})
    }
})

// Function to book a visit to a residency

export const bookVisit=asyncHandler(async(req,res)=>{
    const {email,date}=req.body
    const {id}=req.params
    try {
        const alreadyBooked=await prisma.user.findUnique({
            where:{email},
            select:{bookedVistis:true}
        })
        if(alreadyBooked.bookedVistis.some((visit)=>visit.id===id)){
            res.status(400).json({message:"This residency is already booked by you"})
        }else{
            await prisma.user.update({
                where:{email},
                data:{
                    bookedVistis:{push:{id,date}}
                }
            })
            res.send("Your visit is booked successfully")
        }
    } catch (error) {
        throw new Error(error.message)
        
    }
})

// Function to get all Bookings of a user

export const getAllBookedVisits=asyncHandler(async(req,res)=>{
    const {email}=req.body
    try {
        const bookings=await prisma.user.findUnique({
            where:{email},
            select:{bookedVistis:true}
        })

        res.status(200).send(bookings)
    } catch (error) {
        throw new Error(error.message)
        
    }
})

// Function to cancel the booking

export const cancelBooking=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    const {id}=req.params;
    try {
        const user=await prisma.user.findUnique({
            where:{email},
            select:{bookedVistis:true}
        })

        const index=user.bookedVistis.findIndex((visit)=>visit.id===id)
        if(index===-1){
            res.send(404).json({message:"booking Not Found"})
        }else{
            user.bookedVistis.splice(index,1)
            await prisma.user.update({
                where:{email},
                data:{
                    bookedVistis:user.bookedVistis
                }
            })
            res.send("Booking Cancelled Successfully")
        }
    } catch (error) {
        throw new Error(error.message)
        
    }
})

// Function to add Fav Residency

export const favResidency=asyncHandler(async(req,res)=>{
    const {email}=req.body
    const {rid}=req.params
    try {
        const user=await prisma.user.findUnique({
            where:{email}
        })

        if(user.favResidencesID.includes(rid)){
            const updateUser=await prisma.user.update({
                where:{email},
                data:{
                    favResidencesID:{
                        set:user.favResidencesID.filter((id)=>id!==rid)
                    }
                }
            })
            res.send({message:"Removed from Favorites",user:updateUser})
        }else{
            const updateUser=await prisma.user.update({
                where:{email},
                data:{
                    favResidencesID:{
                        push:rid
                    }
                }
            })
            res.send({message:"Updated Favorites",user:updateUser})
        }
        
    } catch (error) {
        throw new Error(error.message)
        
    }
})

// Function to list all Fav Residency

export const getAllFavorites=asyncHandler(async(req,res)=>{
    const {email}=req.body
    try {
        const favResidency=await prisma.user.findUnique({
            where:{email},
            select:{favResidencesID:true}
        })
        res.status(200).send(favResidency)
    } catch (error) {
        throw new Error(error.message)
        
    }
})