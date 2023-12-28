import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    loading:false,
    organizationDetails:[],
    errorMsg:'',
}
const organizationDetailsSlice=createSlice({
    name:'organizationDetails',
    initialState,
    reducers:{
        isLoading(state){
            state.loading=true
        },
        setIsLoadingFalse(state){
            state.loading=false
        },
        getOrganizationDetailsSuccess(state,action){
            state.loading=false
            state.organizationDetails=action.payload
        },
        setErrorMessage(state,action){
            state.loading=false
            state.errorMsg=action.payload
        }
    }
})

export const{isLoading,setIsLoadingFalse,getOrganizationDetailsSuccess,setErrorMessage}=organizationDetailsSlice.actions

export default organizationDetailsSlice.reducer