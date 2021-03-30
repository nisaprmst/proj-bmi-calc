import React, { Component } from 'react';
import Answer from './Answer';
import Question from './Question';

class QnA extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <Question question={this.props.question}/>
               <br/>
               <Answer answer={this.props.answer}/>
               

            </div>
         );
    }
}
 
export default QnA;