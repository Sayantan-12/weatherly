
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
        city : "",
        feelslike : "",
        temp : "",
        tempmin : "",
        tempmax : "",
        humidity : "",
        weather : "",
    });

    let updateInfo = (newInfo) =>{
        setweatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather-App By Sayantan</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}
export default WeatherApp