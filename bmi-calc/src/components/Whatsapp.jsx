import React, { Component } from 'react';

class Whatsapp extends Component {
    state = {
        show: false
      }
    render()
    
    { 
        return ( 
            <>
            <div style={{position:"relative"}}>
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" className="waIcon" alt="" onClick={()=>this.setState({show:!this.state.show})}/>
                {this.state.show && 
                <div style={{position:"absolute", color:"black", top:"-8vmax",left:"-9vmax", width:"12vmax",  fontWeight:"normal"}} className="smallModal">
                    <div className="whatsapphover" style={{width:"100%", fontSize:"1.2vmax", padding:"1vmax",cursor:"pointer"}}>
                       <a style={{textDecoration:"none", color:"black"}} href="https://wa.me/08122010461" target="_blank">
                           Admin
                           </a>
                        </div>
                    <div className="whatsapphover"s style={{width:"100%", fontSize:"1.2vmax", padding:"1vmax",cursor:"pointer"}}>
                    <a style={{textDecoration:"none", color:"black"}} href="https://wa.me/08112231194" target="_blank">
                           Apoteker
                           </a>
                    </div>
                </div> }
            </div>
            </>
         );
    }
}
 
export default Whatsapp;