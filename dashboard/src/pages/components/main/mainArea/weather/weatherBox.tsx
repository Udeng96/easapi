import {useEffect, useState} from "react";
import Moment from "react-moment";
import moment from "moment";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";

const WeatherBox = () => {


    const weatherInfo = useSelector((state:RootState)=> state.server.main.weatherInfo);
    const warnInfo = useSelector((state:RootState) => state.server.main.warnInfo);

    const [nowTime, setNowTime] = useState(moment().format('YYYY.MM.DD HH:mm:ss'));
    const [tmp, setTemp] = useState<string>("-");
    const [wcf, setWcf] = useState<string>("-");
    const [sky, setSky] = useState<string>("-");
    const [icon, setIcon] = useState<string>("weather_01");

    const [title, setTitle] = useState<string>("특보 없음");
    const [announce, setAnnounce] = useState<string>('-'); //발표 시각
    const [effective, setEffective] = useState<string>("-"); //발효 시각



    useEffect(()=>{

        setNowTime(moment().format('YYYY.MM.DD HH:mm:ss'));

        if(weatherInfo.length > 0){
            weatherInfo[0].tmp ? setTemp(String(weatherInfo[0].tmp)) : setTemp("-")
            weatherInfo[0].wcf ? setWcf(String(weatherInfo[0].wcf)) : setWcf("-")

            if(weatherInfo[0].pty!==0){
                weatherInfo[0].ptyName ? setSky(weatherInfo[0].ptyName) : setSky("-");
            }else{
                weatherInfo[0].sky ? setSky(weatherInfo[0].skyName) :setSky("-");
            }
        }

        setWeatherIcon();

    },[weatherInfo])



    useEffect(()=>{

        if(warnInfo.length>0){

            let warn = warnInfo[0].title.split("/")[0].split(":");
            let effectiveTime = (warn[1]+":"+warn[2]).split(".");

            let warnTitle = warnInfo[0].title.split("/")[1].split(" ")[1].replaceAll(" ","");

            let tmFc = String(warnInfo[0].fromDate);
            let announceTime = `${tmFc.substring(0,4)}년 ${tmFc.substring(4,6)}월 ${tmFc.substring(6,8)}일 ${tmFc.substring(8,10)}:${tmFc.substring(10,12)}`;


            setEffective(`${effectiveTime[0]}년 ${effectiveTime[1]}월 ${effectiveTime[2]}일 ${effectiveTime[3]} 이후`);
            setAnnounce(announceTime);
            setTitle(warnTitle);
        }



    },[warnInfo])



    const setWeatherIcon = () => {

        let nowHour= moment().format('HH');

        let timeSet = "";
        Number(nowHour) > 18 ?  timeSet = "PM" : timeSet = "AM";

        if(weatherInfo.length > 0){
            weatherInfo[0].pty !== 0 ?
                weatherInfo[0].pty === 1? setIcon("weather_05") :
                    weatherInfo[0].pty === 2? setIcon("weather_07") :
                        weatherInfo[0].pty === 3? setIcon("weather_06") :
                            weatherInfo[0].pty === 4? setIcon("weather_05") :
                                weatherInfo[0].pty === 5? setIcon("weather_16") :
                                    weatherInfo[0].pty === 6? setIcon("weather_18") :
                                        setIcon("weather_17")
                : weatherInfo[0].sky === 1 ? timeSet === "AM" ? setIcon("weather_01") : setIcon("weather_12") :
                weatherInfo[0].sky === 3? timeSet === "AM" ? setIcon("weather_03") : setIcon("weather_14") :
                    setIcon("weather_04")
        }

    }



    useEffect(()=>{



    },[warnInfo])



    return(

        <div className="dash_frame weather_frame">
            <header className="dash_header">
                <p className="dash_title weather_title">화성시 기상</p>
                <p className="time_text">{nowTime} 기준</p>
            </header>
            <div className="dash_body">
                <div className="weather_info_area">
                    <div className="dash_row">
                        <p className="weather_title type_news">기상특보</p>
                        <p className="weather_text">{title}</p>
                    </div>
                    <div className="time_box">
                        <p className="time_title">발표시각</p>
                        {/*<p className="time_text">2023년 01월 17일(화) 23:42</p>*/}
                        <p className="time_text">{announce}</p>
                    </div>
                    <div className="time_box">
                        <p className="time_title">발효시각</p>
                        {/*<p className="time_text">2023년 01월 18일(수) 06:00 이후</p>*/}
                        <p className="time_text">{effective}</p>
                    </div>
                </div>
                <div className="weather_info_area">
                    <div className="dash_row">
                        <p className="weather_title type_status">기상현황</p>
                    </div>
                    <div className="dash_row status_row">
                        <div className="">
                            <p className="temp_value">{tmp}<span>&#176;</span></p>
                            <p className="sensible_temp_value">{wcf}<span>&#176;</span></p>
                        </div>
                        <div className="weather_info_box">
                            <p className="weather_info_text">{sky}</p>
                            <div className={`weather_icon ${icon}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WeatherBox