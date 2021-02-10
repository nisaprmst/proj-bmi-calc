import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
class Calculator extends Component {
    state = { 
        tinggi : null,
        berat : null
     }
    handleBerat = (e) =>{
        this.setState({berat:e.target.value});
    }
    handleTinggi = (e) => {
        this.setState({tinggi:e.target.value});
    }
    handleSubmit = () =>{
        console.log("ss");
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
                    <Button className="submit"  onClick={this.handleSubmit} disabled={this.state.berat == 0 || this.state.tinggi == 0}>
                        Hitung
                    </Button>
                </div>
                
            </Form>
            
        </div> );
    }
}
 
export default Calculator;