import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import moment from "moment/moment";

const TimeStatChart = () => {

    const rawDataList = useSelector((state:RootState)=> state.server.main.rawDataList);
    const standard = useSelector((state:RootState)=>state.server.main.sensorStandard);

    const [categoryList, setCategoryList] = useState<string[]>([]);
    const [series, setSeries] = useState<number[]>([]);

    const [serious, setSerious] = useState<number[]>([]);
    const [alert, setAlert] = useState<number[]>([]);
    const [caution, setCaution] = useState<number[]>([]);

    useEffect(()=>{


        let newCategory : string[] = [];
        let newSeries : number[] = [];
        let seriousList : number[] = [];
        let alertList : number[] = [];
        let caution1List : number[] = [];

        if (standard){

            rawDataList.map((rawdata)=> {

                 // console.log("rawdate:",rawdata);


                if (rawdata.date!=='-'){
                    let newDate = rawdata.date.split(' ')[0].split('-');
                    let newTime = rawdata.date.split(' ')[1].split(':');
                    if (moment().format("YYYYMMDD").toString() === newDate[0]+newDate[1]+newDate[2]){



                        if (!newCategory.includes(`${newTime[0]}:00`)) {
                            if(newTime[1] === "00"|| newTime[1] === "10" || newTime[1] === "20"
                                || newTime[1] === "30" || newTime[1] === "40" || newTime[1] === "50"){
                                newCategory.push(newTime[0]+":"+"00");
                                newSeries.push(rawdata.count);
                                seriousList.push(standard.serious);
                                alertList.push(standard.alert);
                                caution1List.push(standard.caution);
                            }
                        }

                    }
                }

            })

        }

        setCategoryList(newCategory);
        setSeries(newSeries);
        setSerious(seriousList);
        setAlert(alertList);
        setCaution(caution1List);



    },[rawDataList])





    const options = {
        chart: {
            type: "area",
            backgroundColor: "transparent",
            spacingTop: 25,
            spacingLeft: 0,
            spacingRight: 0,
            height:210,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "",
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            headerFormat: "<p style='color: #b9babd;'>{point.x}</p><br/>",
            pointFormat: "<span style='color: #fc8c03;'>{point.y} </span>m",
            style: {
                fontFamily: "SCDreamM",
                color: "#fff",
                fontSize: 14,
            },
            backgroundColor: "#1a1b21",
            borderColor: "#b55a14",
            borderRadius: 8,
        },
        xAxis: {
            tickColor: "rgba(207, 226, 229,0.25)",
            lineColor: "rgba(207, 226, 229,0.25)",
            lineWidth: 1,
            labels: {
                style: {
                    fontFamily: "SCDreamL",
                    color: "#c8cfdb",
                    fontSize: 10,
                },
            },
            categories: categoryList,
            //categories: ['11:50', '10-20 12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '', '', '', '', '', '']
        },
        yAxis: {
            title: {
                text: "",
            },
            gridLineColor: "rgba(207, 226, 229,0.25)",
            gridLineWidth: 1,
            labels: {
                style: {
                    fontFamily: "SCDreamL",
                    color: "#c8cfdb",
                    fontSize: 10,
                },
            },
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                data: series,
                lineColor: "#ffa703",
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, "rgba(255, 167, 3, .5)"],
                        [1, "rgba(41, 25, 2, .25)"],
                    ],
                },
                lineWidth: 1.5,
                marker: {
                    radius: 4.5,
                },
            },
            {
                data: serious,
                lineColor: "#eb5757",
                color: "#eb5757",
            },
            {
                data: alert,
                lineColor: "#ff8f40",
                color: "#ff8f40",
            },
            {
                data: caution,
                lineColor: "#e8d254",
                color: "#e8d254",
            },

        ],
        plotOptions: {
            series: {
                fillColor: "transparent",
                lineWidth: 1,
                marker: {
                    symbol: "circle",
                    radius: 5,
                    lineWidth: 1,
                    lineColor: '#ffa41c',
                    fillColor: '#fff',
                    enabled: false,
                },
                label: {
                    connectorAllowed: false,
                },
            },
        },
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );

}

export default TimeStatChart