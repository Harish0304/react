'use client'
import {useEffect,useState}from "react";
import {Newproduct} from "../../model/newproduct"

export default function NewproductComp()
{

    const [data,setData]=useState<Newproduct | null>(null);
    useEffect(()=>
    {
          fetchData()
    },[])

    async function fetchData() {
        let data= await fetch('https://randomuser.me/api/')
        // console.log(data,"data")
        let json=await data.json()
        let modelData = new Newproduct(json)
         setData(modelData)
         console.log(json,"json",modelData);
        // console.log(json,"price");
        
    }
    
    if(data && data?.results && data.results.length)
    return (
      <div className="">
       {/* <img src= {data.results[0]?.picture?.large} ></img>
       <div> {data.results}</div> */}
       {
        data.results.map((user,index)=>{
            return (
                <div key={index} className="">
                    {user.location?.street?.name}
                    {user.name?.getName()}
                    </div>
            )
        })
       }
      </div>
    );
    else{
        return (
            <div className="">failed</div>
        )
    }
}