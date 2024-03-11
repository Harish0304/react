'use client'
import { TextField } from "@mui/material";
import router from "next/navigation";
import Button from '@mui/material/Button';
import { PracticeFormState } from "@/store/state/practice_form.state";
import { useDispatch, useSelector } from "react-redux";
import { PracticeFormValid } from "@/store/type/practice_form.types";
import { Dispatch } from "redux";
import {  setUserDetails } from "@/store/action/practice_form.action";
import { PracticeForm } from "@/model/practice_form";

export default function Practice(){
    const form=useSelector((state:PracticeFormState)=>state.myform);
   
    const dispatch = useDispatch<Dispatch<PracticeFormValid>>();
    console.log(form.email,"email",form.age);
    return(
        <>
        <div className="flex flex-col items-center">
             <div className="p-3">
                 <TextField className="w-96" label='Email' focused={true} variant='outlined' value={form.email??""} onChange={(ele) => {
                    form.email=ele.target.value
                    dispatch(setUserDetails(form))}} ></TextField>
             </div>
             <div className="p-3 ">
                <TextField className="w-96" label='age'focused={true}  variant='outlined' value={form.age??""}onChange={(ele) => {
                    form.age=Number(ele.target.value)
                    dispatch(setUserDetails(form))}}></TextField>
            </div>
            <div className="p-3">
            <div
                onClick={()=>{
                    dispatch(setUserDetails(new PracticeForm()))
                }}
                className="rounded bg-red-400 text-white px-4 py-2">
                    Reset
                </div>
            </div>
        </div>
        </>
    ) 
}