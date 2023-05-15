import React from "react";
import './ChartCSS/chart.css';
import ChartBar from "./chartBar";

const Chart= (props)=>{

    const barsData=[
        {label: "Jan", value:0},
        {label: "Feb", value:0},
        {label: "Mar", value:0},
        {label: "Apr", value:0},
        {label: "May", value:0},
        {label: "Jun", value:0},
        {label: "Jul", value:0},
        {label: "Aug", value:0},
        {label: "Sep", value:0},
        {label: "Oct", value:0},
        {label: "Nov", value:0},
        {label: "Dec", value:0}
    ];

//props.dataArray means filterdata mil gya hme;
        for(let dataElement in props.dataArray){
            const barsDataMonth= props.dataArray[dataElement].date.getMonth();  
            barsData[barsDataMonth].value+=props.dataArray[dataElement].price;               // if it jan then month give 0 and also index 0 for jan in barsData
        }
    

const barsDataValue=barsData.map(data=>data.value);
const maxValue= Math.max(...barsDataValue);  // We first make array of value to use Math.max; 

    return(
        <div className="chart" >
           {barsData.map(data => <ChartBar key={Math.random().toString()} value={data.value} max={maxValue} label={data.label} />) }
        </div>
    )
}


export default Chart;