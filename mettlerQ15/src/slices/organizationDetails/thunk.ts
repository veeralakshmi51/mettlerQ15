import axios from "axios";
import { getOrganizationDetailsSuccess,isLoading,setIsLoadingFalse,setErrorMessage } from "./reducer";

const baseURL = 'http://47.32.254.89:7000/api'
const successCode = 'MHC - 0200'

export const getAllOrganizationDetails =()=>async(dispatch:any)=>{
    dispatch(isLoading())
    try{
        const response=await axios.get(`${baseURL}/org/getAll`)
        console.log("API Response:",response.data)
        if(response.data.message.code===successCode){
            dispatch(getOrganizationDetailsSuccess(response.data.data))
        } else{
            dispatch(setErrorMessage(response.data.message.description))
        } 
    }
    catch(error){
        dispatch(setIsLoadingFalse())
        console.log("API error:",error)
    }
}