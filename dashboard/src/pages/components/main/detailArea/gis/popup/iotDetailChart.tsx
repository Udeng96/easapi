import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const IotDetailChart = () => {

    let width = window.innerWidth;
    let _percent = width/2560;


    const options = {
        chart: {
            type: "area",
            backgroundColor: "transparent",
            spacingTop: 50 * _percent,
            spacingBottom: 30 * _percent,
            spacingLeft: 0 * _percent,
            spacingRight: 0 * _percent,
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
                fontSize: 10 * _percent,
            },
            backgroundColor: "#1a1b21",
            borderColor: "#b55a14",
            borderRadius: 8 * _percent,
        },
        xAxis: {
            tickColor: "rgba(207, 226, 229,0.25)",
            lineColor: "rgba(207, 226, 229,0.25)",
            lineWidth: 1 * _percent,
            labels: {
                style: {
                    fontFamily: "SCDreamL",
                    color: "#c8cfdb",
                    fontSize: 10 * _percent,
                },
            },
            categories: ["15:10", "15:20", "15:20", "15:20", "15:20", "15:20"],
            //categories: ['11:50', '10-20 12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '', '', '', '', '', '']
        },
        yAxis: {
            title: {
                text: "",
            },
            gridLineColor: "rgba(207, 226, 229,0.25)",
            gridLineWidth: 1 * _percent,
            labels: {
                style: {
                    fontFamily: "SCDreamL",
                    color: "#c8cfdb",
                    fontSize: 10 * _percent,
                },
            },
            tickPositions: [0, 2, 4, 6, 8, 10],
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                data: [
                    { color: "transparent", y: 4},
                    { color: "#424ead", y: 3},
                    { color: "#f51b43", y: 6 },
                    { color: "#15b9c3", y: 2 },
                    { color: "transparent", y: 3 },
                    { color: "transparent", y: 3 },
                ],
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
                lineWidth: 1.5 * _percent,
                marker: {
                    radius: 4.5 * _percent,
                },
            },
            {
                data: [9, 9, 9, 9, 9, 9],
                lineColor: "#eb5757",
                color: "#eb5757",
            },
            {
                data: [7, 7, 7, 7, 7, 7],
                lineColor: "#ff8f40",
                color: "#ff8f40",
            },
            {
                data: [6, 6, 6, 6, 6, 6],
                lineColor: "#e8d254",
                color: "#e8d254",
            },
            {
                data: [8, 8, 8, 8, 8, 8],
                lineColor: "#527cf0",
                color: "#527cf0",
            },
        ],
        plotOptions: {
            series: {
                fillColor: "transparent",
                lineWidth: 1 * _percent,
                marker: {
                    symbol: "circle",
                    radius: 5 * _percent,
                    lineWidth: 1 * _percent,
                    lineColor: '#ffa41c',
                    fillColor: '#fff',
                    enabled: false,
                },
                label: {
                    connectorAllowed: false,
                },
            },
        },
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );

}

export default IotDetailChart;