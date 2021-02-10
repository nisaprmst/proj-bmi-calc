import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
class Result extends Component {
  
    render() { 
        return ( 
            <Modal
            centered
            show={this.props.show}
          >
           
            <Modal.Body closeButton>
              <h6>BMI Anda {this.props.result} </h6>
            <h6>Anda masuk ke dalam kelas {this.props.class}</h6>
            </Modal.Body>
            <div style={{padding:"0% 5% 4% 0%",textAlign:"right"}}>
                <Button className="submit" onClick={this.props.handleShow} >
                    Tutup
                </Button>
            </div>
            
          </Modal>
         );
    }
}
 
export default Result;