import asyncHandler from "express-async-handler"

import {prisma} from "../config/prismaConfig.js"

export const createUser=asyncHandler(async(req,res)=>{
    console.log("creating a user")
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