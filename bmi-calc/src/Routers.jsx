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
import Profile from "./pages/Profile";
import BMIResult from "./pages/BMIResult";
import ErrorPage from "./pages/404Error";
import Post from "./components/Post";
import Whatsapp from "./components/Whatsapp";
import UserLog from "./pages/UserLog";
import Swal from "sweetalert2";
import { Loading } from "./components/Loading";

// const url ="https://obesite-server.herokuapp.com/api"
const url ="http://localhost:5000/api"


class Routers extends Component {
    state = { 
        hasLogin: null,
        isAdmin: null
    }
    
    
    checkLogin = () => {
        const token = localStorage.getItem('token');
        if (token != null) {    
            const requestOptions = {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
              } 
              fetch(url + '/auth/verify', requestOptions)
                      .then(response => response.json())
                      .then(res => {
                        if (res.values.auth) {
                            if (res.values.role == "ADMIN"){
                                this.setState({
                                    ...this.state,
                                    isAdmin:true
                                })
                            }
                            this.setState({
                                ...this.state,
                                isAdmin:false,
                                hasLogin: true
                                
                            });
                            if(window.location.pathname=="/login"){
                                this.props.history.push("/definisi")

                            }
                        } else {
                            this.props.history.push("/login");
                        }
                        
                      })
                      .catch(err => {
                         if(err.message.includes('auth')){
                             localStorage.setItem('token', null);
                             this.setState({
                                 ...this.state,
                                 hasLogin: false,
                                 isAdmin: false
                             });
                             this.props.history.push("/login");

                         }else {
                             this.setState({
                                 ...this.state,
                                 hasLogin: false
                             })
                             Swal.fire({
                                 text:"There's something wrong, please try again later"
                             })
                             this.props.history.push("/error");
                             
                         }
                          
                      });
        } else {
            this.props.history.push("/login");
        }
    }
    componentDidMount = () => {
        this.checkLogin();
   
    }
    render() { 
        return ( 
            <>  
            {this.state.hasLogin == null ? <Loading/> :
            <div style={{position:"relative"}}>
                <NavBar show={this.state.hasLogin} isAdmin={this.state.isAdmin}/>
                <Switch>
                
                    <Route path="/addpost" component={(this.state.isAdmin ? CMS : ErrorPage)} />
                    <Route path="/userlog" component={(this.state.isAdmin== null ? Loading : this.state.isAdmin == true ? UserLog : ErrorPage)} />
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/result" component={BMIResult}/>
                    <Route exact path="/deskripsiumum" children={<Posts isAdmin={this.state.isAdmin}/>} />
                    <Route path="/deskripsiumum/:id" component={Post} />
                    <Route path="/login" component={Authentication} />
                    <Route path="/faq" component={Faq}/>
                    <Route path="/calculator" component={Calc} />
                    <Route path="/definisi" component={ WebDefinition} />
                    <Route path="/profil" component={Profile}/>
                    <Route path="/error"  component={ErrorPage}/>
                    <Route  component={ErrorPage}/>
                    
                </Switch>
                {this.state.hasLogin &&
                <div style={{position:"fixed", bottom:"2vmax", right:"2vmax"}}>
                    <Whatsapp/>
                </div>}
            </div>}
            </>
         );
    }
}
 
export default withRouter(Routers);