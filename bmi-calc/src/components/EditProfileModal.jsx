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
      password: null,
      confirmPassword: null,

    })
  
    
    const selectImage = async (e) => {
        let image = e.target.files[0];
        let imageSize = image.size;
        let isImgExtension = image.name.match(/\.(jpg|jpeg|png)$/gi);
    
        if (isImgExtension) {
          if (imageSize <= 10485760) {
            setProfile({ ...profile, avatar: image });
            setImage(URL.createObjectURL(image));
          } else {
            swal('Image must be less than 10 MB', {
              button: null,
              icon: 'error',
            });
          }
        } else {
          swal('Unsupported image extension', {
            button: null,
            icon: 'error',
          });
        }
      };
  
    
    
    
    
    const handleInput = (e) =>{
        const {name, value} = e.target;

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
          <Modal.Body style={{ textAlign:"center", position:"relative"}}>
                <AvatarImage src={image} size={"12vmax"} />
                <Button variant="outline-secondary"
                        onClick={()=>showPassWord(!pass)}
                        style={{
                            fontSize:"0.7vmax",
                            padding:"0.3vmax 0.6vmax",
                            marginTop:"20px",
                            position:"absolute",
                            top:"5px",
                            right:"10px"
                            
                        }}>Ganti Password</Button>
                <div >
                   
                    <Button 
                    style={{
                        fontSize:"1vmax",
                        padding:"0.5vmax 0.8vmax",
                        marginTop:"20px",
                        position:"relative"
                    }}
                    variant="outline-success">
                         <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            id="avatar"
                            onChange={(e) => selectImage(e)}
                            style={{ opacity:"0", position:"absolute", width:"100%" }}
                            />
                            Edit foto profil
                    </Button>
                    <div style={{ width:"80%", margin:"auto", paddingTop:"30px"}}>
                        <Row>
                            <Col style={{
                                fontSize:"1.2vmax",
                                fontWeight:"lighter",
                                textAlign:"right"}}>
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
                            </Col>
                        </Row>
                    </div>
                    <div>
                       
                        {pass &&
                        
                        <div style={{paddingTop:"20px", width:"80%", margin:"auto"}}>
                            <Row>
                                <Col style={{
                                    fontWeight:"lighter",
                                    textAlign:"right"}}>
                                    Password Baru
                                </Col>
                                <Col>
                                    <input
                                    value={profile.tinggi}
                                    type="password"
                                    className="heightInput"
                                    name="password"
                                    onChange={(e)=>handleInput(e)}
                                    >
                                    </input>
                                </Col>
                             </Row>
                             <Row style={{paddingTop:"20px"}}>
                                <Col style={{
                                    fontWeight:"lighter",
                                    textAlign:"right"}}>
                                    Konfirmasi Password
                                </Col>
                                <Col>
                                    <input
                                    value={profile.tinggi}
                                    type="password"
                                    className="heightInput"
                                    name="password"
                                    onChange={(e)=>handleInput(e)}
                                    >
                                    </input>
                                </Col>
                             </Row>
                            
                        </div>}
                        
                        <Button style={{width:"100%", fontSize:"1vmax", marginTop:"30px", borderRadius:"10px"}}>
                            Simpan
                        </Button>
                    </div>

                </div>

              
           
          </Modal.Body>
        
        </Modal>
        </>
      );
    }