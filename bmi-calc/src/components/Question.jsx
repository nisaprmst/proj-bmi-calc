import React, { Component } from 'react';

class Question extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={{float:"right"}} className="q-bubble">
            <div className="container">
                <img src="https://i.ibb.co/7CvXtzx/Group-4-1.png" className="faq-q"/>
                <div className="top-left"> {this.props.question} </div> 
            </div>
        </div>
         );
    }
}
 
export default Question;