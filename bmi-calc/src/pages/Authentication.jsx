import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import Login from './Login';
import SignUp from './Signup';

class Authentication extends Component {
    state = { 
        modalShow: false,
        modalShow2: false
     }

    setModalShow = () => {
        this.setState({modalShow:!this.state.modalShow});
    }
    setModalShow2 = () => {
        this.setState({modalShow2:!this.state.modalShow2});
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#15533E"
    }
    render() { 
        return ( 
            <div className="center-screen">
                <div style={{fontSize:"4vmax", color:"white"}}>
                    <div >
                        Selamat Datang di 
                    </div>
                    <div style={{fontFamily:"NoVirus", fontWeight:"lighter"}}>O B E S I T E !</div>
                </div>
            
                <div >
                    <Button
                    style={{
                        fontSize:"1.5vmax",
                        margin:"0 5px"
                    }} className="user-button" onClick={() => this.setModalShow()} >Log In</Button>
                

                    <Button
                        style={{
                        fontSize:"1.5vmax",
                        margin:"0 5px"
                    }}  className="user-button" onClick={() => this.setModalShow2()}>Sign Up</Button>
                

                </div>
                <SignUp show={this.state.modalShow2}  onHide={()=>this.setModalShow2()} />
                <Login show={this.state.modalShow} onHide={()=> this.setModalShow()}/>
            </div>
         );
    }
}
 
export default Authentication;