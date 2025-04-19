import axios from 'axios'
import React, { useEffect, useState } from 'react'
import background from '../../assets/weather-1.png'
export default function Home() {
    let [text, setText] = useState([])
    let [photo, setPhoto] = useState([])
    let [temp, setTemp] = useState([])
    let [humidity, setHumidity] = useState([])
    let [WindDir, setWindDir] = useState([])
    let [Wind, setWind] = useState([])
    let [day, setday] = useState([])
    let [numOfDay, setNumOfDay] = useState([])
    let [month, setMonth] = useState([])
    let [forecastDay1, setForecastDay1] = useState([])
    let [forecastIcon1, setForecastIcon1] = useState([])
    let [forecastText1, setForecastText1] = useState([])
    let [forecastMaxTemp1, setForecastMaxTemp1] = useState([])
    let [forecastMinTemp1, setForecastMinTemp1] = useState([])
    let [forecastDay2, setForecastDay2] = useState([])
    let [forecastIcon2, setForecastIcon2] = useState([])
    let [forecastText2, setForecastText2] = useState([])
    let [forecastMaxTemp2, setForecastMaxTemp2] = useState([])
    let [forecastMinTemp2, setForecastMinTemp2] = useState([])
    let [searchItem22, setSearchItem22] = useState('cairo')

    function weather() {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=bfee6e438ecc4ff5a76164900241112&q=${searchItem22}&days=3&aqi=yes&alerts=no`)
            .then((res) => {
                setText(res.data.current.condition.text)
                setPhoto(`https://${res.data.current.condition.icon}`)
                setTemp(res.data.current.temp_c)
                setHumidity(res.data.current.humidity)
                setWind(res.data.current.wind_kph)
                setWindDir(res.data.current.wind_dir)
                let todayDate = new Date()
                setday(todayDate.toLocaleDateString('en-us', { weekday: "long" }))
                setMonth(todayDate.toLocaleDateString('en-us', { month: "long" }))
                setNumOfDay(todayDate.getDate())
                setForecastIcon1(`https://${res.data.forecast.forecastday[1].day.condition.icon}`)
                setForecastText1(res.data.forecast.forecastday[1].day.condition.text)
                setForecastMaxTemp1(res.data.forecast.forecastday[1].day.maxtemp_c)
                setForecastMinTemp1(res.data.forecast.forecastday[1].day.mintemp_c)
                let forecastDate = new Date(res.data.forecast.forecastday[1].date)
                setForecastDay1(forecastDate.toLocaleDateString('en-us', { weekday: "long" }))
                setForecastIcon2(`https://${res.data.forecast.forecastday[2].day.condition.icon}`)
                setForecastText2(res.data.forecast.forecastday[2].day.condition.text)
                setForecastMaxTemp2(res.data.forecast.forecastday[2].day.maxtemp_c)
                setForecastMinTemp2(res.data.forecast.forecastday[2].day.mintemp_c)
                let forecastDate2 = new Date(res.data.forecast.forecastday[2].date)
                setForecastDay2(forecastDate2.toLocaleDateString('en-us', { weekday: "long" }))
                console.log(res.data.forecast.forecastday[0]);
            }
            )
    }
    useEffect(() => weather(), [searchItem22])
    return (

        <>
            <main style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: 400
            }} className=' grid pt-0 z-50'>
                <div className="w-full max-w-3xl min-w-[200px] self-center justify-self-center mb-[70px]">
                    <div className="relative ">
                        <input onChange={(e) => setSearchItem22(e.target.value)} type='search'
                            className="w-full relative bg-[#1e202b] placeholder:text-slate-200 text-white text-sm  rounded-[30px] py-5 pr-[50px] pl-5 focus:outline-0"
                            placeholder="Find your Location..."
                        />
                        <button
                            className="absolute top-[5px] right-[5px] bottom-[5px] flex items-center rounded-[30px] bg-[#009ad8] py-0 px-10  text-center text-sm text-white transition-all shadow-sm"
                            type="button"
                        > Find
                        </button>
                    </div>
                </div>
            </main>
            <div className="flex flex-wrap items-center justify-center mt-[-150px] gap-1 md:gap-0 mb-5 z-[9999]">
                <div className="flex flex-col bg-[#323544] md:rounded-s-3xl rounded  p-4 w-full max-w-xs">
                    {!searchItem22 ? <div className="font-medium text-2xl text-white">{setSearchItem22('cairo')}</div> : <div className="font-medium text-2xl text-white">{searchItem22}</div>}

                    <div className="flex justify-between">
                        <div className=" text-sm text-[#BFC1C8]">{day}</div>
                        <div className="text-sm text-[#BFC1C8]">{numOfDay} {month}</div>
                    </div>
                    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                        <img src={photo} alt="icon" className='w-full' />
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                        <div className="font-medium text-6xl text-white">{temp}°</div>
                        <div className="flex flex-col items-center ml-6">
                            <div className='text-white'>{text}</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-6">
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-white text-sm">Wind</div>
                            <div className="text-sm  text-[#BFC1C8]">{Wind}k/h</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-white text-sm">Humidity</div>
                            <div className="text-sm  text-[#BFC1C8]">{humidity}%</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-medium text-white text-sm">Wind dir</div>
                            <div className="text-sm  text-[#BFC1C8]">{WindDir}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-[#1e202b] rounded  p-4 w-full max-w-xs text-center  h-[355px]">
                    <div className="font-bold text-lg text-white">{forecastDay1}</div>
                    <div className="mt-12 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                        <img src={forecastIcon1} al className='w-full't="forecast icon" />
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                        <div className="flex flex-col items-center ">
                            <div className='text-white'>{forecastText1}</div>
                            <div className="mt-1">

                                <span className="text-sm font-light text-[#BFC1C8]">{forecastMaxTemp1}°C</span>
                            </div>
                            <div>

                                <span className="text-sm font-light text-[#BFC1C8]">{forecastMinTemp1}°C</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col bg-[#323544] rounded md:rounded-e-3xl  p-4 w-full max-w-xs text-center  h-[355px]">
                    <div className="font-bold text-lg text-white">{forecastDay2}</div>
                    <div className="mt-12 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                        <img src={forecastIcon2} al className='w-full't="forecast icon" />
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                        <div className="flex flex-col items-center ">
                            <div className='text-white'>{forecastText2}</div>
                            <div className="mt-1">

                                <span className="text-sm font-light text-[#BFC1C8]">{forecastMaxTemp2}°C</span>
                            </div>
                            <div>
                                <span className="text-sm font-light text-[#BFC1C8]">{forecastMinTemp2}°C</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>




        </>
    )
}
