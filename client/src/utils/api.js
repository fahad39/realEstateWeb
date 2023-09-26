import axios from "axios"
import dayjs from "dayjs"
import {toast} from "react-toastify"
import { URL } from "../common/Url"

export const api=axios.create({
    baseURL:"http://localhost:8000/api"
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