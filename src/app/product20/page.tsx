'use client'
import { useEffect, useState } from "react";
import { Product20 } from "../../model/product20";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function NewProduct20() {

    const [data, setData] = useState<Array<Product20>>([]);
    const [option, setOption] = useState<string>('');

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let data = await fetch('https://fakestoreapi.com/products?limit=5');
        let json = await data.json();
        setData(json);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };

    let sortedData = data;
    if (option === 'Id') {
        sortedData.sort((a:any, b:any) => a.id - b.id);
    } else if (option === 'price') {
        sortedData.sort((a:any, b:any) => a.price - b.price);
    } else if (option === 'rate') {
        sortedData.sort((a:any, b:any) => b.rating.rate - a.rating.rate);
    }

    return (
        <>
           <div className="grid grid-row-2 gap-10 justify-center">
           <div className="grid  justify-center font-black">WELCOME TO XYZ PRODUCTS</div>
           <div className="">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select value={option} label="Sort by" onChange={handleChange} >
                        <MenuItem value="Id">Id</MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="rate">Rating</MenuItem>
                    </Select>
                </FormControl>
            <table className="table-auto">
                <tr>
                    <th className="border h-16 w-32">Image</th>
                    <th className="border px-2 py-2">Id</th>
                    <th className="border px-2 py-2">price</th>
                    <th className="border px-2 py-2">Rating</th>
                    <th className="border px-8 py-2">Count</th>
                    <th className="border px-8 py-2">Title</th>   
                </tr>
    
                {sortedData.map((product, index) => (
                    <tr key={index}>
                        <td className="border px-4 px-2"> <img className ="h-20 w-20 "src={product.image!} /> </td>
                        <td className="border px-4 py-2">{product.id}</td>
                        <td className="border px-4 py-2">{product.price}</td>
                        <td className="border px-4 py-2">{product.rating?.rate}</td>
                        <td className="border px-4 py-2">{product.rating?.count}</td>
                        <td className="border px-4 py-2">{product.title}</td>
                       
                    </tr>
                ))}
        </table>
        </div>
        </div>

        </>

    );
}
