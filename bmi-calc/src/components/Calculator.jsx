import React, { Component } from 'react';

import {Form, Button} from 'react-bootstrap';
import Result from './Result';
class Calculator extends Component {
    state = { 
        tinggi : null,
        berat : null,
        result : 0,
        show : false,
        class: null
     }
    handleBerat = (e) =>{
        this.setState({berat:e.target.value});
    }
    handleTinggi = (e) => {
        this.setState({tinggi:e.target.value});
    }
    handleShow = () =>{
        this.setState({show:!this.state.show});
    }
    handleSubmit = () =>{
        var bmi =  (this.state.berat/ Math.pow(this.state.tinggi/100,2)).toFixed(2);
        this.setState({result:bmi});
        if (bmi < 18.5){
            this.setState({class:"Underweight"});
        } else if (bmi <= 22.9) {
            this.setState({class:"Normal"});
        } else if (bmi <= 24.9) {
            this.setState({class:"Overweight"});
        } else if (bmi <= 29.9){
            this.setState({class:"Obesitas I"});
        } else{
            this.setState({class:"Obesitas II"});
        }
        this.handleShow();
     

    }
    render() { 
        return ( 
        <div>
            <h1 style={{textAlign:"center"}}>Kalkulator BMI</h1>
            <Form style={{padding:"2% 30%"}}>
                <Form.Label>Tinggi (cm)</Form.Label>
                <Form.Control type="number" value={this.state.tinggi} onChange={this.handleTinggi} placeholder="Tinggi" required/>
                <Form.Label>Berat (kg)</Form.Label>
                <Form.Control type="number" value={this.state.berat} onChange={this.handleBerat} placeholder="Berat" required/>
                <br/>
                <div style={{textAlign:"center"}}> 
                    <Button className="submit"  onClick={this.handleSubmit} disabled={this.state.berat == null || this.state.tinggi == null}>
                        Hitung
                    </Button>
                </div>
                
            </Form>
            <Result show={this.state.show} result={this.state.result} handleShow={this.handleShow} class={this.state.class} />
        </div> );
    }
}
 
export default Calculator;