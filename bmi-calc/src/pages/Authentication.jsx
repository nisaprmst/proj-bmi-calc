import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';

class Authentication extends Component {
    state = { 

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
                                <Button className="user-button" >Log In</Button>
                            </Col>
                            <Col>
                                <Button className="user-button">Sign Up</Button>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
         );
    }
}
 
export default Authentication;