import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Result from '../components/Result';
class BMIResult extends Component {
    state = { 
        bmi: 20,
        bmiClass: "Normal"
     }
     componentDidMount()  {
        document.title = "Hasil BMI"
        if(this.props.location.state){
            const bmi = this.props.location.state.bmi;
            const bmiClass = this.props.location.state.bmiClass;
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
                    <Col sm={4} style={{marginTop:'20%',position:"relative", paddingBottom:"5vmax"}}>
                        <div className="bmi-circle">
                            BMI Anda <br/>
                        <p className="bmi-num"> {this.state.bmi}
                            </p>
                        </div>
                    </Col>
                    <Col sm style={{padding:"3vmax"}}>
                   <div style={{color:"black",textAlign:"left", fontSize:"2vmax"}}> 
                   {this.state.bmiClass == "Normal" && <> BMI Anda Normal !</>}
                   {this.state.bmiClass == "Overweight" && <> Wah, BMI kamu sudah di rentang Overweight ! </>}
                    {this.state.bmiClass == "Obesitas" && <>Bahaya, BMI kamu sudah memasuki Obesitas!</>} 
                       </div>
                    <Result status={this.state.bmiClass} />
                    
                    </Col>
                </Row>

            </Container>
            </>
         );
    }
}
 
export default BMIResult;