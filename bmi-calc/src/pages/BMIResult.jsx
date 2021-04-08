import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class BMIResult extends Component {
    state = { 
        bmi: 20,
        bmiClass: "Normal"
     }
     componentDidMount()  {
        if(this.props.location.state){
            const bmi = this.props.location.state.bmi;
            const bmiClass = this.props.location.state.class;
            console.log(bmi);
            this.setState({bmi, bmiClass});

        } else {
            this.props.history.push('/');
        }
     }
    render() { 
       
        return ( 
            <>
            <Container style={{width:"100%"}}>
                <Row>
                    <Col style={{marginTop:'20%'}}>
                        <div className="bmi-circle">
                            BMI Anda <br/>
                        <p className="bmi-num"> {this.state.bmi}
                            </p>
                        </div>
                    </Col>
                    <Col>
                    hi
                    </Col>
                </Row>

            </Container>
            </>
         );
    }
}
 
export default BMIResult;