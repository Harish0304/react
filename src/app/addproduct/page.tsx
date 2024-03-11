'use client'
import { setProductDetils } from "@/store/action/addproduct.action";
import { AddProductState } from "@/store/state/addproduct.state";
import { AddProductValid } from "@/store/type/addproduct.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import PersistentDrawerRight from '../drawer/page'; 





export default function AddProduct() {

    useEffect(() => {
            fetchData();  
    }, []);

    const product=useSelector((state:AddProductState)=>state.myproduct)
    const dispatch=useDispatch<Dispatch<AddProductValid>>();
    console.log(product,"product")

    async function fetchData() {
       if(product==null)
        {
            console.log("fetching data")
            let data = await fetch('https://fakestoreapi.com/products?limit=5')
            let json= await data.json();
            dispatch(setProductDetils(json))
       }
       
    }
    return (
        <>
        <div className="grid grid-row-2 gap-10 justify-center">
           <div className="grid  justify-center font-black mt-12">WELCOME TO XYZ PRODUCTS</div>
           <div className="absolute top-0 right-0 mt-12"><PersistentDrawerRight /></div>
           
                 <table className="table-auto">
                <tr>
                    <th className="border h-16 w-32">Image</th>
                    <th className="border px-2 py-2">Id</th>
                    <th className="border px-2 py-2">price</th>
                    <th className="border px-2 py-2">Rating</th>
                    <th className="border px-8 py-2">Count</th>
                    <th className="border px-8 py-2">Title</th>   
                </tr>
    
                {Array.isArray(product)&&product.map((items, index) => (
                    <tr key={index}>
                        <td className="border px-4 px-2"> <img className ="h-20 w-20 "src={items.image!} /> </td>
                        <td className="border px-4 py-2">{items.id}</td>
                        <td className="border px-4 py-2">{items.price}</td>
                        <td className="border px-4 py-2">{items.rating?.rate}</td>
                        <td className="border px-4 py-2">{items.rating?.count}</td>
                        <td className="border px-4 py-2">{items.title}</td>
                       
                    </tr>
                ))}
                
        </table>
        </div>
        </>
    )

}

