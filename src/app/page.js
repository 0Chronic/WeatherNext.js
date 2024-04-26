"use client"
import axios from "axios";
import { useState } from "react";
import {BsSearch} from "react-icons/bs"
import Image from 'next/image';

export default function Home() {

  const [city , setCity] =useState('')
  const [weather , setWeather] =useState ({})
  const [loading , setLoading] = useState(false)

   const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid${process.env.NEXT_PUBLIC_WEATHER_KEY}`

   const fetchWeather = (e) => {
    e.preventDefault()
    setLoading (true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('')
    setLoading(false)
   }
  return (
    <main>
      <div  >
      {/*Overlay*/}
      <div className="absolute top-0 left-0 rigth-0 bottom-0 bg-black/50"></div>
      {/*Background */}
   <Image src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' layout='fill' className="object-cover"/>





   {/*Search*/}
   <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
    <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl ">
      <div>
        <input className="bg-transparent border-none text-white focus:outline-none text-2xl  " type="text" placeholder="search city" />
        
      </div>
      <button onClick={fetchWeather}>
          <BsSearch />
        </button>
    </form>
   </div>


      </div>
    </main>
  );
}
 