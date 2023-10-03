import asyncHandler from "express-async-handler"

import {prisma} from "../config/prismaConfig.js"

// Function To create a Residency

export const createResidency=asyncHandler(async(req,res)=>{
    const {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        userEmail
    }=req.body.data
    try {
        const residency=await prisma.residency.create({
            data:{
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                image,
                owner:{connect:{email:userEmail}}
            }
        })
        res.send({
            message:"Residency created Successfully",
            residency
        })
    } catch (error) {
        if(error.code=== "P2002"){
            throw new Error("A Residency with address already there")
        }
        throw new Error(error.message)
    }
    
})

// Funcion to get the list of All Residencies

export const getAllResidencies=asyncHandler (async(req,res)=>{
    const residencies=await prisma.residency.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })

    res.send(residencies)
})

// Function to get specific Residency

export const getResidency=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params
        const residency=await prisma.residency.findUnique({
            where:{id}
        })
        res.send(residency)
    } catch (error) {
        throw new Error(error.message)
    }
})