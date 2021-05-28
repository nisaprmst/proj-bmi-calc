import { useState } from "react";
import { Modal, Button, Form, Col, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleLogin } from 'react-google-login';
const url ="https://obesite-server.herokuapp.com/api";
// const url ="http://localhost:5000/api"
const signup = {
    username: '',
    password: '',
    email: '',
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
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    namalengkap: '',
    tanggallahir: '',
    tinggi: undefined,
    berat: undefined
  })

  const [oldUser, setOldUser] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

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
    try {

      setLoading(true);
      // if (loading){
        if (props.login) {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: oldUser.username,
                password: oldUser.password
            })
          } 
          fetch(url +'/auth/login', requestOptions)
                  .then(response => response.json())
                  .then(res => {
                    localStorage.setItem('token', res.values.token);
                    if (res.status == 200) {
                      window.location.reload();
                    } else{
                      Swal.fire({
                        text:res.values,
                        icon:"error"
                      })
                      setLoading(false)
                    }
                  })
                  .catch(err => {
                    Swal.fire({
                      text:"Ada error! Coba lagi dalam beberapa saat",
                      icon:"error"
                    })
                    setLoading(false)
                  })
        } else {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: newUser.username,
                password: newUser.password,
                nama: newUser.namalengkap,
                email: newUser.email,
                birth_date: newUser.tanggallahir,
                height: newUser.tinggi,
                weight: newUser.berat
            })
          } 
          // TODO: check if email has been used
          // emailnya blm ada juga
          fetch(url + '/auth/register', requestOptions)
                  .then(response => response.json())
                  .then(res => {
                    localStorage.setItem('token', res.values.token);
                    if (res.status == 200) {
                      window.location.reload();
                    } else {
                      Swal.fire({
                        text :res.values,
                        icon:"error"
                      })
                    }
                  })
                  .catch(err => {
                    Swal.fire({
                      text :"Ada error! Coba lagi dalam beberapa saat",
                      icon:"error"
                    })
                    setLoading(false)
                  });
        }
      // }
      
    } catch (error) {
      Swal.fire({
        text:'Ada error! Coba lagi dalam beberapa saat',
        icon:'error'
    })
    }
    setLoading(false);
  }

  const handleGoogleError = async (e) => {
    Swal.fire({
      text:"Google auth gagal",
      icon:"error"
    })
  }
  const handleGoogleSubmit = async (e) => {
    try {

      setLoading(true);
      // if (loading){
        if (props.login) {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              token: e.tokenId
            })
          } 
          fetch(url +'/auth/login', requestOptions)
                  .then(response => response.json())
                  .then(res => {
                    localStorage.setItem('token', res.values.token);
                    if (res.status == 200) {
                      window.location.reload();
                    } else{
                      Swal.fire({
                        text:res.values,
                        icon:"error"
                      })
                      setLoading(false)
                    }
                  })
                  .catch(err => {
                    Swal.fire({
                      text:"Ada error! Coba lagi dalam beberapa saat",
                      icon:"error"
                    })
                    setLoading(false)
                  })
        } else {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: newUser.username,
                password: newUser.password,
                nama: newUser.namalengkap,
                email: newUser.email,
                birth_date: newUser.tanggallahir,
                height: newUser.tinggi,
                weight: newUser.berat
            })
          } 
          // TODO: check if email has been used
          // emailnya blm ada juga
          fetch(url + '/auth/register', requestOptions)
                  .then(response => response.json())
                  .then(res => {
                    localStorage.setItem('token', res.values.token);
                    if (res.status == 200) {
                      window.location.reload();
                    }
                  })
                  .catch(err => {
                    Swal.fire({
                      text :"Ada error! Coba lagi dalam beberapa saat",
                      icon:"error"
                    })
                    setLoading(false)
                  });
        }
      // }
      
    } catch (error) {
      Swal.fire({
        text:'Ada error! Coba lagi dalam beberapa saat',
        icon:'error'
    })
    }
    setLoading(false);
  }

  
  const button = 
     (
      <div style={{padding:"2% 0 0 0", textAlign:"center"}}>
      <button className="login-button" onClick={postData}>{props.buttonText1}</button> <br/>
      
     
     </div>
    );

  const buttonGoogle = 
  (
    <div style={{textAlign:"center"}}>
    <div style={{opacity:"0.6", padding:"1% 0"}}>or</div>
    <GoogleLogin
    className="google-button"
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleGoogleSubmit}
    onFailure={handleGoogleError}
    cookiePolicy={'single_host_origin'}
    />
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
        
        {loading ?
        <div style={{position:"absolute", top:"50%", left:"47%", zIndex:100}}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>

        </div> : <></>}
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
                <Form.Control type="text" placeholder="Email" name="email" value={newUser.email} className="form-box" style={{marginBottom:"13px"}} onChange={(e) => handleNewUserInput(e)} onBlur={(e) => handleNewUserInput(e)} required/>
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
            {buttonGoogle}
          </div>
            
           
        </Modal.Body>
      
      </Modal>
    );
  }
  