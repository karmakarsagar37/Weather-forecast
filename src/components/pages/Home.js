import React,{useState,useEffect} from 'react';
// import '../css/style.css';

const Home=()=>{
    const [city,setCity]=useState(null);
    const [search,searchCity]=useState('Mumbai');
    useEffect(()=>{
        const fetchApi=async () =>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=45303f07a523491aa0fa0248d1375d93`
            const res=await fetch(url);
            const resJson=await res.json();
            console.log(res);
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);
    return(
        <>
                  <div className="center">
                  <h1>Weather Forecast</h1>
                    <form>
                    <div className="inputbox">
                        <input type="text" required="required" onChange={(e)=>{searchCity(e.target.value)}}/>
                        <span>City</span>
                    </div>
                    {
                        !city?( <p>Invalid City</p>):
                        (
                            <div>
                                <div className="inputbox">
                                        <h2>{search}</h2>
                                        <div className='col-2 inputbox'>{`Temperature : ${city.temp}`}</div>
                                </div>
                                <div className="inputbox">
                                    
                                    <div className='col-4 inputbox'>{`Feels like ${city.feels_like}`}</div>
                                </div>
                            </div>
                            
                        )
                    }
                    </form>
                    
                    
                </div>
        </>
    )
}
export default Home;