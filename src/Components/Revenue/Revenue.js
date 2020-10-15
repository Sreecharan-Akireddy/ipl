import React, { PureComponent } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import './Revenue.css';

export default class Revenue extends PureComponent{
    constructor(props){
        super(props)
    }

    render() {
        const options = {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light1",
            colorSet: "colorSet2",
            zoomEnabled: true,
            title:{
                fontFamily: "Calibri"
            },
            axisX: {
                reversed: true,
                fontFamily: "Calibri"
            },
            axisY: {
                title: "Amount",
                includeZero: true,
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                indexLabel: "₹{y}", 
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y:  560, label: "Charan"},
                    { y:  520, label: "Prasad" },
                    { y:  600, label: "Dileep" },
                    { y:  440, label: "Sumana" },
                    { y:  400, label: "Uma" },
                    { y:  360, label: "Sahithi" },
                    { y:  660, label: "Sairam" },
                    { y:  400, label: "Sudheer" },
                    { y:  440, label: "Mouli" }
                ]
            }]
        }
        return (
        <div>
            <CanvasJSChart className = "chart" options = {options} />
        </div>
        );
    }
}
