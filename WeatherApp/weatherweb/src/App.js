import { useState } from 'react';
import './App.css';
import { Bars } from 'react-loader-spinner';

function App() {
  let [city, setCity] = useState('')
  let [wdetails, setWDetails] = useState()
  let [isloading, setisLoading] = useState(false)
  let getData = (event) => {
    // event.preventDefault()
    setisLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalres) => {
        if (finalres.cod == "404") {
          setWDetails(undefined)
        }
        else {
          setWDetails(finalres)
        }
        setisLoading(false)
      })

    setCity('')
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-[#4aacb1]">
      <div className='max-w-[70vw] mx-auto'>
        <h1 className='text-[40px] font-bold py-[50px] text-white'>Simple weather App</h1>
        <form action="" onSubmit={getData}>
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} className='w-[300px] h-[40px] pl-3' placeholder='City Name' /><button className='border-[3px] border-[white] text-[whitesmoke] font-bold p-[6px] '>Submit</button>
        </form>


        <div className='w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]'>
          {/* <img src="https://cdn.dribbble.com/users/344531/screenshots/3859545/progress-bar.gif"  className={`w-[100vw] left-[50px] ${isloading?'':'hidden'}`} alt="" /> */}
          {/* react spinners */}
          {
            isloading ?
              <Bars></Bars>
              :

              wdetails !== undefined
                ?
                <>
                  <h3 className='font-bold text-[30px]'>{wdetails.name}<span className='bg-[yellow]'>{wdetails.sys.country}</span></h3>
                  <h2 className='font-bold text-[40px]'>
                    {wdetails.main.temp}
                  </h2>
                  <img src={`http://openWeathermap.org/img/w/${wdetails.weather[0].icon}.png`} alt="" />
                  <p>{wdetails.weather[0].description}</p>

                </>
                :
                "No City Found"


          }

          {/* /////// */}
          {/* {
           wdetails !== undefined
           ?
           <>
             <h3 className='font-bold text-[30px]'>{wdetails.name}<span className='bg-[yellow]'>{wdetails.sys.country}</span></h3>
             <h2 className='font-bold text-[40px]'>
               {wdetails.main.temp}
             </h2>
             <img src={`http://openWeathermap.org/img/w/${wdetails.weather[0].icon}.png`} alt="" />
             <p>{wdetails.weather[0].description}</p>

           </>
           :
           "No City Found"

        } */}

        </div>

      </div>

    </div>
  );
}

export default App;
