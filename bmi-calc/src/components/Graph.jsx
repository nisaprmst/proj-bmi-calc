import React, { Component } from 'react';
import CanvasJSReact from '../lib/canvasjs/canvasjs.react';
import { Loading } from './Loading';
// const url ="https://obesite-server.herokuapp.com/api"
const url ="http://localhost:5000/api"

class Graph extends Component {
    state = { 
        isLoading: true,
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
        fetch(url + '/weight', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    this.setState({
                       ...this.state,
                        dataPoints: data.values
                    });
                    chart.render();
                }else {
                    this.setState({
                        ...this.state,
                        dataPoints: null
                    })
                }
                
                console.log(data);
            })

        this.setState({
            ...this.state,
            isLoading:false
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
            {this.state.isLoading ? <Loading/> : this.state.dataPoints ?
			<CanvasJSReact.CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/> : 
         
            <div style={{
                color : 'red',
                backgroundColor:'white'
            }}>
                Ada yang salah! Coba lagi dalam beberapa saat!
                </div>}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        );
    }
}
 
export default Graph;