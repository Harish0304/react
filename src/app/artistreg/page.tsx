'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Artistreg() {
    const [Name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [description, setDescription] = useState('');
    //const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        if (name === 'Name') {
            setName(value);
        } else if (name === 'profession') {
            setProfession(value);
        } else if (name === 'description') {
            setDescription(value);
        }

        //setIsSubmitDisabled(!(Name && profession && description));
    };
    function enableButton() {
        return ((Name && Name.length > 0) && (profession && profession.length>0) &&(description && description.length>0))
    }
    return (
        <>
            <form>
                <div className="card">
                    <div className="mb-4 p-4 box border"> <input type="file" accept="image/*" placeholder="Upload file"></input></div>
                    <div className="mb-4 p-2 box border"> <input type="text" name="Name" placeholder="Artist name" value={Name} onChange={handleInputChange}></input></div>
                    <div className="mb-4 p-2 box border"> <input type="text" name="profession" placeholder="Profession" value={profession} onChange={handleInputChange}></input></div>
                    <div className="mb-4 p-2 box border"> <input type="date" placeholder="Date of birth"></input></div>
                    <div className="mb-4 p-2 box border"> <input type="text" placeholder="spouse name"></input></div>
                    <div className="mb-4 p-2 box border"> <textarea name="description" placeholder="Description" value={description} onChange={handleInputChange}></textarea></div>
                    <div className="mb-4 p-2 box border h-12">
                        {/* <Button variant="contained" disabled={isSubmitDisabled}>Submit</Button> */}
                        <div className={`p-2 ${enableButton() ? 'bg-blue-500 ' : 'bg-gray-500'}  text-white flex justify-center rounded-md`}>
                           Submit
                        </div>
                        
                    </div>
                </div>
            </form>
        </>

    );
}
