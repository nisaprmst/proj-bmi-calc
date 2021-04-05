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
                <div style={{fontSize:"60px"}}>
                    <div >
                        Selamat Datang di 
                    </div>
                    <div style={{fontFamily:"NoVirus", fontWeight:"lighter"}}>O B E S I T E !</div>
                </div>
                <div style={{height:"200px",border:"solid 2px white", padding:"0 5%", margin: "2% 0 "}}>
                    
                </div>
                <div >
                    <Container>
                        <Row >
                            <Col>
                                <Button className="user-button" onClick={() => this.setModalShow()} >Log In</Button>
                            </Col>
                            <Col>
                                <Button className="user-button" onClick={() => this.setModalShow2()}>Sign Up</Button>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <SignUp show={this.state.modalShow2}  onHide={()=>this.setModalShow2()} />
                <Login show={this.state.modalShow} onHide={()=> this.setModalShow()}/>
            </div>
         );
    }
}
 
export default Authentication;