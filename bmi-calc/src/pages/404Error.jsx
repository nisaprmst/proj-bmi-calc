import React, { Component } from 'react';

class ErrorPage extends Component {
    state = {  }
    componentDidMount() {
        document.body.style.color = "black";
    }
    render() { 
        return ( 
            <div className="center-screen">
                <img src="https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/07/Is-Your-ADHD-Brain-Hard-Wired-for-Weight-Gain_cartoon-scale-Olivardia_ts-658247994-cropped.jpeg?resize=1280%2C720px&ssl=1" width="40%" style={{minWidth:"200px",borderRadius:"30px"}} />
               <br/>
               <h1>
                   404
               </h1>
               ERROR NOT FOUND
            </div>
         );
    }
}
 
export default ErrorPage;