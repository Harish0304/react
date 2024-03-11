'use client'
import { useState } from "react";



export default function OutlinedButtons(){
   

    function handleSubmit(event){
        event.preventDefault();
        alert("successfully submitted");
    }

    return (
       <form onSubmit={handleSubmit}>
        <label>First Name : <input type="text" name="fname"  /> </label>
        <label>Last Name : <input type="text" name="lname"   /> </label>
        <label>Email : <input type="email" name="email"  /> </label>
        <button type="submit">Submit</button>
       </form>


    );
}


