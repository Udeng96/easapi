import Highcharts from 'highcharts';
import Highstock from 'highcharts/highstock';

import {useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import HighchartsReact from "highcharts-react-official";


// const Charts = HighchartsReact.withHighcharts(Highstock);
const GraphTimeChart = () => {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let _percent = width / 2560;
    let vh = height / 1376;

    const formatDateString = (dateString: string | any[]) => {

        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        const hour = dateString.slice(8, 10);
        const minute = "00"

        const formattedDate = `${month}/${day}`;

        if (hour) {
            return `${formattedDate} ${hour}:${minute}`;
        } else {
            return formattedDate;
        }
    };

    const iotStatData = useSelector((state: RootState) => state.server.stat.iotStatData);
    let xCategories: string[] = [];
    let yCategories: number[] = [];

    if (iotStatData) {
        xCategories = iotStatData.map(data => data ? formatDateString(data.date) : '');
        yCategories = iotStatData.map(data => data ? Math.round(data.count * 10) / 10: 0.0);
    } else {
        xCategories = [];
        yCategories = [];
    }

    const options = {
        chart: {
            type: "area",
            backgroundColor: "transparent",
            spacingTop: 15 * _percent,
            spacingBottom: 69 * _percent,
            spacingLeft: 1 * _percent,
            spacingRight: 1 * _percent,
            height: 700 * vh,
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
                fontSize: 14 * _percent,
            },
            backgroundColor: "#1a1b21",
            borderColor: "#b55a14",
            borderRadius: 8 * _percent,
        },
        xAxis: {
            tickColor: "transparent",
            lineColor: "rgba(229, 249, 255,0.2)",
            lineWidth: 1 * _percent,
            tickLength: 0,
            labels: {
                style: {
                    fontFamily: "SCDreamR",
                    color: "#d7dce0",
                    fontSize: 14 * _percent,
                },
                y: 40 * _percent,
            },

            categories:
            //     [
            //     "03:00",
            //     "04:00",
            //     "05:00",
            //     "06:00",
            //     "07:00",
            //     "08:00",
            //     "09:00",
            //     "10:00",
            //     "11:00",
            //     "12:00",
            //     "13:00",
            //     "14:00",
            //     "15:00",
            //     "16:00",
            //     "17:00",
            //     "18:00",
            // ],
                xCategories
            ,
            // min:0,
            // max:10,
            scrollbar: {
                enabled: true
            }
        },
        yAxis: [
            {
                title: {
                    text: "(수위계측 - 단위: m)",
                    style: {
                        fontFamily: "SCDreamR",
                        color: "#b9babd",
                        fontSize: 15 * _percent,
                    },
                },
                gridLineColor: "rgba(207, 226, 229,0.2)",
                gridLineWidth: 1 * _percent,
                labels: {
                    style: {
                        fontFamily: "SCDreamR",
                        color: "#d7dce0",
                        fontSize: 14 * _percent,
                    },
                },
                // tickPositions: [0, 50, 100, 150, 200, 250],
                // tickPositions: [0, 0.1, 1],
            }
        ],
        legend: {
            enabled: false,
        },
        series: [
            {
                name: "",
                // data: [150, 200, 170, 210, 150, 170, 110, 180, 200, 120, 180, 120, 110, 120, 110, 120],
                data: yCategories,
                lineColor: '#f5841b',
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, "rgba(245, 132, 27, .5)"],
                        [1, "rgba(41, 25, 2, .25)"],
                    ],
                },
            },
        ],
        plotOptions: {
            series: {
                pointWidth: 34 * _percent,
                lineWidth: 3 * _percent,
                marker: {
                    symbol: "circle",
                    radius: 5 * _percent,
                    lineWidth: 3 * _percent,
                    lineColor: '#ffa41c',
                    fillColor: '#fff',
                    enabled: false,
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
            {/*<Charts isPureConfig={true} config={config} />*/}
        </div>
    );
}

export default GraphTimeChart