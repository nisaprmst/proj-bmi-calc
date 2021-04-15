import React, { Component } from 'react';

import {Form, Button, Row, Col} from 'react-bootstrap';
class Calc extends Component {
    state = { 
        tinggi : null,
        berat : null,
        result : 0,
        class: null
     }
    handleBerat = (e) =>{
        this.setState({berat:e.target.value});
    }
    handleTinggi = (e) => {
        this.setState({tinggi:e.target.value});
    }
   
    handleSubmit = () =>{
        var bmi =  (this.state.berat/ Math.pow(this.state.tinggi/100,2)).toFixed(2);
        let bmiClass;
        if (bmi < 18.5){
            bmiClass = "Underweight";
        } else if (bmi <= 22.9) {
            bmiClass = "Normal";
        } else if (bmi <= 24.9) {
            bmiClass = "Overweight";
        } else if (bmi <= 29.9){
            bmiClass = "Obesitas I";
        } else{
            bmiClass = "Obesitas II";
        }
        console.log(bmi);
        console.log(this.props);
        this.props.history.push({
            pathname: '/result',
            state: { bmi: bmi, bmiClass: bmiClass}
          })
    }

    
    render() { 
        return ( 
        <div className="calculator" >
            <p className="calc-title">Kalkulator BMI</p>
            <Form style={{padding:"5% 10%"}}>
                <Form.Row >
                    <Col xs lg={3}>
                        <Form.Label>Tinggi (cm)</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="number" value={this.state.tinggi} onChange={this.handleTinggi} placeholder="Tinggi" required/>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col xs lg={3}>
                        <Form.Label>Berat (kg)</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="number" value={this.state.berat} onChange={this.handleBerat} placeholder="Berat" required/>
                    </Col>
                </Form.Row>
                <br/><br/>
                <div style={{textAlign:"center"}}> 
                    <Button className="hitung-button"  onClick={this.handleSubmit} disabled={this.state.berat == null || this.state.tinggi == null}>
                        Hitung
                    </Button>
                </div>
                <img src="https://t3.ftcdn.net/jpg/02/33/24/58/360_F_233245868_j82YuiqdCQLWrDBvc3wO08nQ06bUFS2p.jpg" width="100%" style={{padding:"6% 0"}}/>
                
            </Form>
        </div> );
    }
}
 
export default Calc;