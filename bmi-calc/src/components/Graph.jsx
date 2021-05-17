import React, { Component } from 'react';
import CanvasJSReact from '../lib/canvasjs/canvasjs.react';
class Graph extends Component {
    state = { 
        dataPoints : []
     }

    componentDidMount(){
        let chart = this.chart;
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        } 
        fetch('https://obesite-server.herokuapp.com/api/weight', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    this.setState({
                        dataPoints: data.values
                    });
                }
                console.log(data);
                chart.render();
            })
    }
    render() { 
        const options = {
            animationEnabled: true,
			// title:{
            //     text: "Your Weight Progress"
            // },
            theme: "dark1",
            axisY : {
                title: "Weight"
            },
            toolTip: {
                shared: true
            },
			data: [{
				type: "spline",
                name: "Weekly weights",
                showInLegend: true,
				dataPoints: this.state.dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSReact.CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        );
    }
}
 
export default Graph;