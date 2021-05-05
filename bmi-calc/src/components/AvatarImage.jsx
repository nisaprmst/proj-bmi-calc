import React, { Component } from 'react';

class AvatarImage extends Component {
    state = {  }
    render() { 
        const style ={
            width: this.props.size,
            height: this.props.size,
            border: "2px solid #FFFFFF",
            boxSizing: "border-box",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            borderRadius: "50%"
        }
        return ( 
                <img src={this.props.src} alt="" style={style} />
                
         );
    }
}
 
export default AvatarImage;