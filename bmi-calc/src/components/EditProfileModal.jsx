import { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import AvatarImage from "./AvatarImage";

import swal from 'sweetalert2';

export default function EditProfileModal(props) {
    
    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8saQQFdwdBVPdZVPghDvmp5r_MmSE7PbNw&usqp=CAU');
    const [pass, showPassWord] = useState(false);
    const [profile, setProfile] = useState({
      avatar: "",
      tinggi: 160,
      password: '',
      confirmPassword: '',

    })
  
   
  
    
    
    
    
    const handleInput = (e) =>{
        const {name, value} = e.target;
        console.log(name)
        setProfile({...profile,
        [name] : value})
  
      
    }
    const handleSubmit = (e) => {
      
      e.preventDefault();
      
  
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
                    </div>
                    <div>
                       
                        {pass &&
                        
                        <div style={{paddingTop:"20px", width:"90%"}}>
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
                        
                        <Button disabled={profile.password != profile.confirmPassword || profile.tinggi >=290} style={{width:"100%", fontSize:"1vmax", marginTop:"30px", borderRadius:"10px"}}>
                            Simpan
                        </Button>
                    </div>

                </div>

              
           
          </Modal.Body>
        
        </Modal>
        </>
      );
    }