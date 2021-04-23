import React, { Component } from 'react';

class Answer extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={{textAlign:"left"}}>
            <div dangerouslySetInnerHTML={{__html: this.props.answer}} className="faq-answer">
            </div>

        </div>
         );
    }
}
 
export default Answer;