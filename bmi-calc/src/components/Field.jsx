import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Field extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{
                color:"black",
                fontSize:"1.5vmax"
            }}>
                {this.props.value}
            </div>
         );
    }
}
 
export default Field;