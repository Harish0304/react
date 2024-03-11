'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';

export default function About() {
  
  const router = useRouter();

  return (
    <>
      <div className="">Hi Hello</div>
      <div className="p-3">
        <div className="w-96 h-12 flex justify-center items-center">
          <Button variant="contained" onClick={() => router.push("/form")}>Previous</Button> 
        </div>
      </div>
    </>
  );
}
