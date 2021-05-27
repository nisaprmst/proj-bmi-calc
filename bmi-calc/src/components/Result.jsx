import React, { Component } from 'react';
import Disease from './Disease';
import Normal from './Normal';

class Result extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {this.props.status == "Normal" && 
            <Normal/>
                }
            {this.props.status == "Overweight" &&
            <div>
                <Disease status={this.props.status}/>
                
                </div>}
            {this.props.status == "Obesitas" &&
            <div>
                <Disease status={this.props.status}/>
                </div>}
            </>
         );
    }
}
 
export default Result;