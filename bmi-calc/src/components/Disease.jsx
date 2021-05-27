import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Exercise from './Exercise';
import Food from './Food';
import Normal from './Normal';

class Disease extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div style={{color:"black", textAlign:"left", margin:"10px 0"}}>
                Apakah Kamu memiliki riwayat penyakit jantung/kardiovaskuler, diabetes, hipertensi atau dislipidemia? (Salah satu atau lebih)
                <div style={{margin:"15px 0"}}>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Ya
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div style={{fontWeight:"normal"}}>
                                Segera konsultasikan ke dokter terkait kondisimu
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Tidak
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {this.props.status == "Overweight" && <Normal/>}
                                {this.props.status == "Obesitas" && <Food status="Obesitas"/>}    
                                <Exercise/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </div>
            </div>
            </>
         );
    }
}
 
export default Disease;