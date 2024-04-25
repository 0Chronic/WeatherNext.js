import Image from "next/image";

export default function Home() {

   const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  return (
    <main>
      <div >
      <h1>hello</h1>
      </div>
    </main>
  );
}
