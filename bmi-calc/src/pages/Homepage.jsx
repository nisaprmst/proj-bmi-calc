import React, { Component } from 'react';
export default class Homepage extends Component {
    state= {
      show:false
    }

    componentDidMount = () => {
      window.location = "/definisi"
    }
    render(){
      return(
        <div>
           
        </div>
      )
    }


}
