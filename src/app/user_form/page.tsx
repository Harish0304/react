'use client'

import { setUserName, setUserPhone,resetForm } from "@/store/action/userForm.action";
import { UserFormState } from "@/store/state/user_form.state"
import { FormdataValid } from "@/store/type/userForm.types";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux";

export default function UserFormPage() {
    // const [name,setName] =useState<string | null>(null);
    // console.log(name,"name");
    // setName(ele.target.value)
    const name = useSelector((state: UserFormState) => state.name);
    const phone = useSelector((state: UserFormState) => state.phone);
    const dispatch = useDispatch<Dispatch<FormdataValid>>();
    console.log(name,"name",phone);
    
    return (
        <div className="container mx-auto pt-4">
            
            <div className="flex items-center">
                <div className="">Name</div>
                <input type="text" value={name ?? ""} onChange={(ele) => {
                    dispatch(setUserName(ele.target.value))
                }} className="border w-40 h-8 " />
            </div>
            <div className="flex items-center pt-4">
                <div className="">Phone</div>
                <input type="number" value={phone ?? ""} onChange={(ele) => {
                    dispatch(setUserPhone(ele.target.value))
                }} className="border w-40 h-8 " />
            </div>
            <div className="pt-4 flex">
                <div
                onClick={()=>{
                    dispatch(resetForm(true))
                }}
                className="rounded bg-red-400 text-white px-4 py-2">
                    Reset
                </div>
            </div>
        </div>
    )
}