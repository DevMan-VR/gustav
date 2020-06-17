import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import HeatMap from "react-heatmap-grid";


const xLabels =['Id8', 'Id12','Id16','Id20','Id2','Id3','Id4','Id5','Id14','Id6', 'Id7','Id9', 'Id13', 'Id1','Id15','Id21']
const yLabels =['B-S1','B-S2','B-S3'];
const data =[[1, 0, 3, 0, 0, 0,0,0,0,0,0,0,2,3,1,0],
      [0, 0, 19, 0, 0, 0,0,2,2,0,5,0, 15, 1,5,2],
      [1, 0, 1, 0, 0, 0,0,0,1,1,0,1,7 , 5,13,0]];


class Heatmapiter extends Component{
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
         square
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
export default Heatmapiter