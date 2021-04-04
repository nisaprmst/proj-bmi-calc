import {
    Route,
    withRouter
  } from "react-router-dom";
import React, { Component } from 'react';
import Homepage from "./pages/Homepage";
import Authentication from "./pages/Authentication";
import Faq from "./pages/Faq";
import NavBar from "./components/NavBar";
import Calc from "./pages/Calc";



class Routers extends Component {
    state = { 
        hasLogin: true
     }
    
    componentDidMount = () => {
        if (!this.state.hasLogin) {
            this.props.history.push("/login");
        }
    }
    render() { 
        return ( 
            <div>
                <NavBar show={this.hasLogin}/>
                <Route exact path="/" component={Homepage}/>
                <Route path="/login" component={Authentication} />
                <Route path="/faq" component={Faq}/>
                <Route path="/calculator" component={Calc} />
            </div>
         );
    }
}
 
export default withRouter(Routers);