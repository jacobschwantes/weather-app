import DarkModeSwitch from "./Switch";
import { useEffect, useState } from 'react';
import getWeather from "./Weather";

export default function Card() {
  const [city, setCity] = useState('Los Angeles');
  const [text, setText] = useState('Los Angeles');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [condition, setCondition] = useState('');
  const handleSubmit = (e) => {
    setCity(text);
    e.preventDefault();
  }
  const updateWeather = async (city) => {
    let tempResponse = await getWeather(city)
    setTemp(Math.floor(tempResponse.main.temp) + '\xB0f');
    setHumidity(tempResponse.main.humidity + '%');
    setWind(Math.floor(tempResponse.wind.speed) + 'mph')
    setCondition(tempResponse.weather[0].main)
  }
  useEffect(() => updateWeather(city), [city])
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-2 m-10 md:w-1/2 2xl:w-1/4 h-1/2 overflow-hidden shadow-lg rounded-lg divide-y divide-gray-200 dark:divide-gray-600 ">
      <div className="px-4 py-5 sm:px-6">
        <span className="float-right"><DarkModeSwitch /></span>
        <h1 className="text-gray-700 dark:text-white font-mono">today's weather</h1>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-gray-700 dark:text-white font-mono">weather in {city}:</h1>
        <h1 className="text-gray-700 dark:text-white font-mono">temperature: {temp}</h1>
        <h2 className="text-gray-700 dark:text-white font-mono">condition: {condition}</h2>
        <h2 className="text-gray-700 dark:text-white font-mono">humidity: {humidity} </h2>
        <h2 className="text-gray-700 dark:text-white font-mono">wind: {wind} </h2>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <form onSubmit={handleSubmit} className="inline-block">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
            city
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            name="city"
            id="city"
            className="shadow-sm w-auto dark:bg-gray-700 dark:text-white  text-gray-700 focus:ring-gray-500 dark:focus:ring-gray-600 focus:border-gray-500 dark:focus:border-gray-200 inline-flex sm:text-sm border-gray-300 dark:border-gray-900 rounded-md"
            placeholder="Los Angeles"
          />
          <input
            value="update"
            type="submit"
            className="inline-flex items-center sm:text-sm px-2 py-2 border mx-1 border-gray-300 shadow-sm rounded-md text-gray-700 bg-white dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 dark:focus:ring-gray-600 focus:ring-gray-500 focus:border-gray-500 dark:focus:border-gray-200 dark:border-gray-900"
          />
        </form>
      </div>
    </div>
  )
}