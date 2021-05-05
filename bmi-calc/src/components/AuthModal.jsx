import { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
const signup = {
    username: '',
    password: '',
    namalengkap: '',
    tanggallahir: '',
    tinggi: undefined,
    berat: undefined
}

const login = {
  username: '',
  password: ''
}
export default function AuthModal(props) {
  

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    namalengkap: '',
    tanggallahir: '',
    tinggi: undefined,
    berat: undefined
  })

  const [oldUser, setOldUser] = useState({
    username: '',
    password: ''
  })

  const resetState = () => {
    setNewUser(signup);
    setOldUser(login);
  }

  const handleNewUserInput = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
        [name]: value
    });
  }
  
  const handleOldUserInput = (event) => {
    const { name, value } = event.target;
    setOldUser({
      ...oldUser,
        [name]: value
    });
  }

  const postData = () =>{

    
  }
  const handleSubmit = (e) => {
    
    e.preventDefault();

    console.log(`Form submitted`);    

}
  const button = 
     (
      <div style={{padding:"2% 0 5% 0", textAlign:"center"}}>
      <button className="login-button" onClick={postData}>{props.buttonText1}</button> <br/>
      <div style={{opacity:"0.6", padding:"1% 0"}}>or</div>
      <button className="google-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" height={18}/>
        &nbsp;&nbsp;	Continue with Google
        </button>
     </div>
    );
  
    return (
      
      <Modal
        {...props}
        contentClassName="modal"
        aria-labelledby="contained-modal-title-vcenter"
        onEntering={resetState}
        centered

      >
        <Modal.Header  closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           <div style={{fontSize:"25px", color:"#15533E",fontWeight:"bold", padding:"1% 0"}}>
              {props.title}
           </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{padding:"2% 0 0 0"}}>
            {props.login && 
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control type="text" name="username" value={oldUser.username} placeholder="Username" className="form-box" style={{marginBottom:"13px"}} onChange={(e) => handleOldUserInput(e)} onBlur={(e)=> handleOldUserInput(e)}  required/>
                  <Form.Control type="password" name="password" value={oldUser.password} placeholder="Password" className="form-box" onChange={(e) => handleOldUserInput(e)} onBlur={(e)=> handleOldUserInput(e)}  required/>
                </Form.Group>
                {button}
              </Form>
            }
            {!props.login && 
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="Username" name="username" value={newUser.username} className="form-box" style={{marginBottom:"13px"}} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)} required/>
                <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} className="form-box" style={{marginBottom:"13px"}} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)} required/>
                <Form.Control type="text" placeholder="Nama lengkap" className="form-box" name="namalengkap" value={newUser.namalengkap} style={{marginBottom:"13px"}} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)} required/>
                <Form.Control type="date" placeholder="Tanggal lahir" className="form-box" name="tanggallahir" value={newUser.tanggallahir} style={{marginBottom:"13px"}} onChange={(e) => handleNewUserInput(e)}  onBlur={(e) => handleNewUserInput(e)} required/>
                <Row>
                  <Col>
                    <Form.Control  className="form-box2" name="tinggi" value={newUser.tinggi} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)}  placeholder="Tinggi badan (cm)" required/>
                  </Col>
                  <Col>
                    <Form.Control  className="form-box2" name="berat" value={newUser.berat} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)} placeholder="Berat badan (kg)" required/>
                  </Col>
                </Row>
              </Form.Group>
              {button}
            </Form>
            }
          </div>
            
           
        </Modal.Body>
      
      </Modal>
    );
  }
  