import React, { Component } from 'react';

class Answer extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={{textAlign:"left"}}>
            <div className="faq-answer">
            {this.props.answer}
            </div>

        </div>
         );
    }
}
 
export default Answer;