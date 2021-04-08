import React, { Component } from 'react';
export default class Homepage extends Component {
    state= {
      show:false
    }

    setShow = () =>{
      this.setState({show:!this.state.show});
    }
    render(){
      return(
        <div>
           
            <br/><br/>
        </div>
      )
    }


}
