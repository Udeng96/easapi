import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {EventStateStat} from "../../../../../config/interface/event/eventInterface";

const StatDonut = (props:{statData:EventStateStat}) => {

    // let width = window.innerWidth;
    // let _percent = width / 1920;

    const options = {
        chart: {
            spacing: 0,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
        },
        title: {
            text: (props.statData.alert+props.statData.serious+props.statData.caution).toString(),
            floating: true,
            y: 105,
            style: {
                fontFamily: 'SCDreamEB',
                color: '#fff',
                fontSize: 26
            },
        },
        subtitle: {
            text: '30일 기준',
            floating: true,
            y: 120,
            style: {
                fontFamily: 'SCDreamL',
                color: '#bac4d4',
                fontSize: 10
            },
        },
        tooltip: {
            pointFormat: '{point.y}',
            style: {
                fontFamily: 'SCDreamM',
                color: '#fff',
                fontSize: 16
            },
            backgroundColor: '#1a1b21',
            borderColor: '#b55a14',
            borderRadius: 8,
        },
        plotOptions: {
            pie: {
                borderColor: 'transparent',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                size: 150,
                innerSize: 105,
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '집계',
            colorByPoint: true,
            data: [{
                name: '주의',
                y: props.statData.caution,
            }, {
                name: '경계',
                y: props.statData.alert,
            }, {
                name: '위험',
                y: props.statData.serious,
            }]
        }],
        colors: ['#f0d74a', '#fa822d', '#f75c5c'],
        credits: {
            enabled: false
        },
    }
    return(
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ style: { height: "200px" } }}

        />
    )

}

export default StatDonut;