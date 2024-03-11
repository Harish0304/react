'use client'
import {useEffect,useState}from "react";


export default function Product()
{

    const [data,setData]=useState<Array<any>>([])
    useEffect(()=>
    {
          fetchData()
    },[])

    async function fetchData() {
        let data= await fetch('https://fakestoreapi.com/products?limit=5')
        console.log(data,"data")
        let json=await data.json()
         setData(json)
        console.log(json,"json");
        console.log(json,"price");
        
    }
    if (data && data.length > 0)
    return (
     <>
             { data.map((ele) => (
                 <div  className="card">
                     <div className="grid grid-rows-1 gap-2 auto-rows-auto">
                         <div className="grid justify-items-center">
                             <img className="h-48 w-48" src={ele.image} alt={ele.title} />
                         </div>
                         <div>Title: {ele.title}</div>
                         <div>Id No: {ele.id}</div>
                         <div>Category: {ele.category}</div>
                         <div>Price: {ele.price}</div>
                         <div>Rating: {ele.rating.rate}</div>
                         <div>Count: {ele.rating.count}</div>
                         <div>: {ele.rating.count}</div>
                     </div>
                 </div>
               
             ))}
         
     </>
 );
 else {
     return  <div className="">failed</div>
 }
          {/* <div className="card">
             <div className="grid grid-rows-2 gap-4">
                   <div className="grid justify-items-center p-2">
                        <img src={data.picture.large} alt=""/>
                   </div>   
                   <div className="grid justify-items-center place-items-start ...">
                        <div className="inline-block align-middle">Name :{data.name?.title} {data.name?.first} {data.name?.last}</div>
                        <div className="">Gender :{data.gender}</div>
                        <div className="">Age: {data.dob?.age}</div>
                        <div className="">Mobile No:{data.cell}</div>
                        <div className="">E-mail :{data.email}</div>
                   </div> 
                   
              </div>
            </div> */}
            

}