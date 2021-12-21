import React, { useState, useEffect } from 'react'
import "../App.css";

function WheatherHome() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Faridabad ');

    useEffect(() => {

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e65dd299494f4bd27df2fc074ff2af45`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }

        fetchApi();
    }, [search])



    return (
        <>
            <div id="login">
                <h3 className="text-center text-white pt-5" > Check your Citie's Weather </h3>
                <div className="container">
                    <div id="login-row" className="row d-flex justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6 d-flex justify-content-center align-items-center ">
                            <div id="login-box" className="col-md-12 ">

                                <div className='justify-content-center align-items-center d-flex mt-5 pt-2'>
                                    <input className=" input-one text d-flex justify-content-center align-items-center" placeholder='Enter City Name'
                                        onChange={(event) => { setSearch(event.target.value) }} />
                                </div>


                                {
                                    !city ? (<p style={{ paddingTop: '70px' }} className='text-center'>City Not Found</p>) : (
                                        <div>
                                            <div className='main-input mt-5 text-center justify-content-center align-items-center d-flex '>
                                                <i className=' icon fas fa-street-view'></i>
                                                <h2 className='h3'>{search}</h2>
                                            </div>


                                            <div className='main-input mt-5 text-center justify-content-center align-items-center d-flex '>
                                                <h4 className='h4'>{city.temp} </h4>
                                            </div>

                                            <div className='mt-1 text-center justify-content-center align-items-center d-flex'>
                                                <p className='p'> Min Temp :{city.temp_min} </p>
                                                <p className='p'>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                                                <p className='p'> Max Temp :{city.temp_max}</p>


                                            </div>
                                        </div>
                                    )


                                }





                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WheatherHome
