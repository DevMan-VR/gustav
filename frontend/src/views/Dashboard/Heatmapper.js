import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import HeatMap from "react-heatmap-grid";

const xLabels = ['Group 1','Group 2','Group 3','Group 4'];
const yLabels =['B-T1', 'B-T2', 'B-T3','B-T4','B-S1','B-S2','B-S3'];
const data = [[38.41,2.9,0.07,2.5], 
        [0, 0, 7.45, 0.38],
      [0, 13.2,6.9, 1.83],
      [0, 0, 0, 23.75],
      [10.2, 0.6, 9.9, 0.01],
      [0, 0.03, 6,6, 0.63],
      [0.12,0.59,1.37,0.68]];


class Heatmapper extends Component{
    constructor(){
        super();
        this.state={
            name: "Heatmap"}
        
    };
    render(){
        return <div>
        <HeatMap
        xLabels={xLabels}
         yLabels={yLabels}
         xLabelsLocation={"bottom"}
         xLabelWidth={60}
         data={data}

         cellStyle={(background, value, min, max, data, x, y) => ({
           background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
           fontSize: "11.5px",
           color: "#000"
          })}
          cellRender={value => value && `${value}`}

     />
</div>
    }
}
export default Heatmapper