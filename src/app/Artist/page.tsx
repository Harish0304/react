'use client'
import { artist } from "@/model/artist";
import { useEffect, useState } from "react";

export default function Artist() {

    const [data, setData] = useState<Array<artist>>([]);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
            const response = await fetch('https://rest.sporfy.com/eventServices/artist/getall/artists');
            const json = await response.json();
            setData(json.data);
        
    }

    const sortedData = [...data].sort((a:any, b:any) => a.name.localeCompare(b.name));

    if (sortedData.length > 0) {
        return (
            <table className="table-auto">
                <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Description</th>
                </tr>
            <tbody>
                {sortedData.map((product, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{product.name}</td>
                        <td className="border px-4 py-2">{product.id}</td>
                        <td className="border px-4 py-2"> <img src={product.image?.desktop!}/> </td>
                        <td className="border px-4 py-2">{product.description}</td>

                    </tr>
                ))}
            </tbody>
        </table>
        );
    } else {
        return <div className="">Loading...</div>;
    }
}