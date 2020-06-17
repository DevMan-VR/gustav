import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import HeatMap from "react-heatmap-grid";

const xLabels = ['Id2','Id3','Id4','Id5','Id12','Id6', 'Id7','Id9', 'Id11', 'Id1','Id13','Id16','Id8', 'Id10','Id14','Id15'];
const yLabels = ['B-T1', 'B-T2', 'B-T3','B-T4','B-S1','B-S2','B-S3'];
const data =[[71,15,70,16,53,0, 0, 0,60,0, 0,0, 14, 0,0,0], 
              [0, 0, 0, 0, 0, 0, 0,0,0,27,17,0, 0, 0,2,0],
              [0, 0, 0, 0, 0, 8,25,44,0,0,0,31, 0, 0,10,0],
              [0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,43,47],
              [0,0,0,0,0, 0, 0, 0,3,7 ,11,0, 0, 0,0,0], 
              [0, 0, 0, 0, 0, 0,0,0,0,0,0,0, 0,40,3,0],
              [0, 0, 0, 1, 0, 0,0,0,2,3,4,0, 2, 0,4,0]];
class Heatmapmin extends Component{
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
export default Heatmapmin