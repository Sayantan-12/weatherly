
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({info}){
    const INIT_IMG = "https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_IMG = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SNOW_IMG = "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_IMG = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2025/04/befunky-collage-29-1745126884.jpg";
    const DEFAULT_IMG = "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024";
    return(
        <div className='InfoBox'>
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={
                        info.city === "" ? DEFAULT_IMG : info.humidity>75 ? RAIN_IMG : info.temp>33 ? HOT_IMG : info.temp>15 ? INIT_IMG :  SNOW_IMG
                    }
                    alt="green iguana"
                    />
                    <CardContent>
                        {info.city === "" ? (
                        <>
                            <Typography gutterBottom variant="h5" component="div">
                            Welcome to Weatherly
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Search for any city to see real-time weather information.
                            You’ll get temperature, humidity, weather condition and some helpful tips based on climate!
                            </Typography>
                        </>
                        ):(
                            <>
                            <Typography gutterBottom variant="h5" component="div">
                                <div className="cl">
                                    {info.city}
                                    {
                                        info.humidity>75 ? <ThunderstormIcon /> : info.temp>15 ? <SunnyIcon /> : <AcUnitIcon />
                                    }
                                </div>
                                
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                                <div>Temperature : {info.temp}&deg;C</div>
                                <div>Humidity : {info.humidity}</div>
                                <div>Feels Like : {info.feelsLike}&deg;C</div>
                                <div>Maximum Temperature : {info.tempMax}&deg;C</div>
                                <div>Minimum Temperature : {info.tempMin}&deg;C</div>
                                {/* <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</p> */}
                                {info.humidity>75 ?  <p>Tips : Don't forget your Umbrella</p>: info.temp>33 ? <p>Tips : Don't go Outside. Excessive Heat</p> : info.temp>15 ? <p>Tips : Enjoy your bright sunny day</p> : <p>Tips : Let's have some coffee beside the fireplace</p>}
                            </Typography>
                            </>
                        )}
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    )
};
export default InfoBox;