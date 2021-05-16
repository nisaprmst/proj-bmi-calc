import { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import AvatarImage from "./AvatarImage";

import swal from 'sweetalert2';

export default function EditProfileModal(props) {
    
    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8saQQFdwdBVPdZVPghDvmp5r_MmSE7PbNw&usqp=CAU');
    const [pass, showPassWord] = useState(false);
    const [profile, setProfile] = useState({
      tinggi: 0,
      berat: 0,
      password: 0,
      confirmPassword: 0,
    });

    useEffect(() => {
      let mounted = true;
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': token
       },
      } 
      fetch('https://obesite-server.herokuapp.com/api/user/info', requestOptions)
        .then(response => response.json())
        .then(item => {
          if (mounted) {
            if (item.status === 200) {
              setProfile({
                tinggi : item.values.height,
                berat : item.values.weight,
              });
            }
          }
        })
        .catch(err => {});
      return () => mounted = false;
    }, []);

  
    const handleInput = (e) =>{
        const {name, value} = e.target;
        console.log(name)
        setProfile({...profile,
        [name] : value})
  
      
    }
    const handleSubmit = (e) => {
      console.log("SUBMIT UPDATE");
      e.preventDefault();
      const token = localStorage.getItem('token');
      if (pass) {
        const requestOptions = {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-access-token': token
           },
          body: JSON.stringify({ 
              newPassword: profile.password
          })
        } 
        fetch('https://obesite-server.herokuapp.com/api/user/change-password', requestOptions)
          .then(response => response.json())
          .then(res => {
            if (res.status == 200) {
              window.location.reload();
            }
          })
          .catch(err => {
            console.log("error");
          });
      } else {
        const requestOptions = {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-access-token': token
           },
          body: JSON.stringify({ 
              height: profile.tinggi,
              weight: profile.berat
          })
        } 
        fetch('https://obesite-server.herokuapp.com/api/user/update', requestOptions)
          .then(response => response.json())
          .then(res => {
            if (res.status == 200) {
              window.location.reload();
            }
          })
          .catch(err => {
            console.log("error");
          });
      }
      console.log(`Form submitted`);    
  
  }
    
      return (
       <> 
        
        <Modal
          {...props}
          contentClassName="modal"
          show={props.show}
          aria-labelledby="contained-modal-title-vcenter"
          centered

  
        >
          <Modal.Header  closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             <div style={{fontSize:"25px", color:"#15533E",fontWeight:"bold", padding:"1% 0"}}>
                Edit Profil
             </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{  position:"relative"}}>
                <Button variant="outline-secondary"
                        onClick={()=>{
                          if (pass){
                            setProfile({...profile,
                            password:"",
                            confirmPassword:""})
                          }
                          showPassWord(!pass)
                        }}
                        style={{
                            fontSize:"0.7vmax",
                            padding:"0.3vmax 0.6vmax",
                            marginTop:"5px",
                            position:"absolute",
                            top:"5px",
                            right:"10px"
                            
                        }}>Ganti Password</Button>
                <div >
                   
                   
                    <div style={{ width:"90%", paddingTop:"40px"}}>
                      {!pass &&
                      <div>
                        <Row>
                            <Col xs={5} style={{
                                fontSize:"12px",
                                fontWeight:"lighter",
                                textAlign:"left"}}>
                                Tinggi
                            </Col>
                            <Col>
                                <input
                                value={profile.tinggi}
                                type="number"
                                className="heightInput"
                                name="tinggi"
                                onChange={(e)=>handleInput(e)}
                                >
                                </input>
                                {(!profile.tinggi || profile.tinggi >= 280) && 
                                    <div style={{
                                      position:"absolute",
                                      color:"red",
                                      fontSize:"9px",
                                      fontWeight:"lighter"}}>
                                      Masukkan tinggi yang benar!

                                </div>}
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col xs={5} style={{
                                fontSize:"12px",
                                fontWeight:"lighter",
                                textAlign:"left"}}>
                                Berat
                            </Col>
                            <Col>
                                <input
                                value={profile.berat}
                                type="number"
                                className="heightInput"
                                name="berat"
                                onChange={(e)=>handleInput(e)}
                                >
                                </input>
                                {(!profile.berat || profile.berat >= 280) && 
                                    <div style={{
                                      position:"absolute",
                                      color:"red",
                                      fontSize:"9px",
                                      fontWeight:"lighter"}}>
                                      Masukkan berat yang benar!

                                </div>}
                            </Col>
                        </Row>
                      </div>
                      }
                    </div>
                    <div>
                       
                        {pass &&
                        
                        <div style={{width:"90%"}}>
                            <Row>
                                <Col xs={5} style={{
                                    fontSize:"12px",
                                    fontWeight:"lighter"}}>
                                    Password Baru
                                </Col>
                                <Col>
                                    <input
                                    value={profile.password}
                                    type="password"
                                    className="heightInput"
                                    name="password"
                                    onChange={(e)=>handleInput(e)}
                                    >
                                    </input>
                                </Col>
                             </Row>
                             <Row style={{paddingTop:"20px"}}>
                                <Col xs={5} style={{
                                    fontSize:"12px",
                                    fontWeight:"lighter"}}>
                                    Konfirmasi Password
                                </Col>
                                <Col style={{position:"relative"}}>
                                    <input
                                    value={profile.confirmPassword}
                                    type="password"
                                    className="heightInput"
                                    name="confirmPassword"
                                    onChange={(e)=>handleInput(e)}
                                    >
                                    </input>
                                    {profile.password && profile.confirmPassword && profile.password != profile.confirmPassword &&
                                    <div style={{
                                      position:"absolute",
                                      color:"red",
                                      fontSize:"9px",
                                      fontWeight:"lighter"}}>
                                        Password belum sama!

                                      </div>}
                                </Col>
                             </Row>
                            
                        </div>}
                        
                        <Button 
                        disabled={profile.password != profile.confirmPassword || profile.tinggi >=290} 
                        style={{width:"100%", fontSize:"1vmax", marginTop:"30px", borderRadius:"10px"}}
                        onClick={handleSubmit}>
                            Simpan
                        </Button>
                    </div>

                </div>

              
           
          </Modal.Body>
        
        </Modal>
        </>
      );
    }