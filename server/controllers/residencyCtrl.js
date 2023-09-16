import asyncHandler from "express-async-handler"

import {prisma} from "../config/prismaConfig.js"

export const createResidency=asyncHandler(async(req,res)=>{
    const {
        title,
        description,
        price,
        address,
        country,
        city,
        facility,
        image,
        userEmail
    }=req.body.data
    console.log(req.body.data)
    try {
        const residency=await prisma.residency.create({
            data:{
                title,
                description,
                price,
                address,
                country,
                city,
                facility,
                image,
                userowner:{connect:{email:userEmail}}
            }
        })
        
        console.log("Residency End Point created")
    } catch (error) {
        if(error.code=== "P2002"){
            throw new Error("A Residency with address already there")
        }
        throw new Error(error.message)
    }
    
})