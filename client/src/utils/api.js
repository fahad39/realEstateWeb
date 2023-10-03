import axios from "axios"
import dayjs from "dayjs"
import {toast} from "react-toastify"
import { URL } from "../common/Url"


// Development URL  http://localhost:8000/api
export const api=axios.create({
    baseURL:"https://realestatebackend-zum4.onrender.com"
})

export const getAllProperties=async()=>{
    try {
        const response=await api.get(URL.getAllProperties,{
            timeout:10*1000
        })

        if(response.status===400 || response.status===500){
            throw response.data
        }

        return response.data
        
    } catch (error) {
        toast.error("Someting went wrong")
        throw error
        
    }
}

export const getProperty=async(id)=>{
    try {
        const response=await api.get(`${URL.getProperty}/${id}`,{
            timeout:10*1000
        })

        if(response.status===400 || response.status===500){
            throw response.data
        }

        return response.data
        
    } catch (error) {
        toast.error("Someting went wrong")
        throw error
        
    }
}

export const createUser=async(email,token)=>{
    try {
        const response=await api.post(URL.registerUser,{email},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        
    } catch (error) {
        toast.error("Something went wrong. Please try again")
        throw new Error(error)
        
    }
}

export const bookVisit=async(date,propertyId,email,token)=>{
    try {
        await api.post(`${URL.bookVisits}/${propertyId}`,{
            email,
            id:propertyId,
            date:dayjs(date).format("DD/MM/YYYY")
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        
    } catch (error) {
         toast.error("Something went wrong. Please try again")
        throw new Error(error)
    }

}

export const removeBooking=async(id,email,token)=>{

    try {


        await api.post(`${URL.cancelBooking}/${id}`,{
            email
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        
    } catch (error) {
        toast.error("Something went wrong, Please try again")
        throw error
        
    }
}

export const toFav=async(id,email,token)=>{
    try {
        await api.post(`${URL.AddfavAPI}/${id}`,{
            email
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    } catch (error) {
        throw error
        
    }
}

export const getAllFav=async(email,token)=>{
    try {
        const res=await api.post(URL.allFav,{
            email
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return res.data["favResidencesId"]
    } catch (error) {
        toast.error("Something went wrong while fetching favourite properties")
        throw error
        
    }
}

export const getAllBookings=async(email,token)=>{
    if(!token) return
    try {
        const res=await api.post(URL.allBookings,{
            email
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        return res.data["bookedVistis"]
        
    } catch (error) {
        toast.error("Something went wrong while fetching bookings")
        throw error
        
    }
}

export const createResidency=async(data,token)=>{
    try {
        const res=await api.post(URL.createResidency,{
            data
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        
    } catch (error) {
        throw error
        
    }
}