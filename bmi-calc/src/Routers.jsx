import {
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
import React, { Component } from 'react';
import Homepage from "./pages/Homepage";
import Authentication from "./pages/Authentication";
import Faq from "./pages/Faq";
import NavBar from "./components/NavBar";
import Calc from "./pages/Calc";
import Posts from "./pages/Posts";
import CMS from "./components/CMS";
import WebDefinition from "./pages/WebDefinition";
import EditProfile from "./pages/EditProfile";
import BMIResult from "./pages/BMIResult";
import ErrorPage from "./pages/404Error";



class Routers extends Component {
    state = { 
        hasLogin: true,
        isAdmin: true
     }
    
    componentDidMount = () => {
        if (!this.state.hasLogin) {
            this.props.history.push("/login");
        }
    }
    render() { 
        return ( 
            <div>
                <NavBar show={this.state.hasLogin}/>
                <Switch>
                    {this.state.isAdmin &&
                        <Route path="/addpost" component={CMS}/>

                    }
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/result" component={BMIResult}/>
                    <Route path="/deskripsiumum" children={<Posts isAdmin={this.state.isAdmin}/>} />
                    <Route path="/login" component={Authentication} />
                    <Route path="/faq" component={Faq}/>
                    <Route path="/calculator" component={Calc} />
                    <Route path="/definisi" component={WebDefinition} />
                    <Route path="/profil" component={EditProfile}/>
                    <Route  component={ErrorPage}/>
                    
                </Switch>
            </div>
         );
    }
}
 
export default withRouter(Routers);