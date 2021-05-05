import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AvatarImage from '../components/AvatarImage';
import EditProfileModal from '../components/EditProfileModal';
import Field from '../components/Field';

class Profile extends Component {
    state = { 
        show: false,
        berat: null
     }
    componentDidMount() {
        document.body.style.backgroundColor = "#bfe7d4";
    }
    handleInput = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]:value
        })
    }
    render() { 
        return ( 
           <div style={{ margin:"auto", width:"70%"}}>
                <Row style={{padding:"10% 5%"}}>
                    <Col xs="auto" >
                    <div >
                        <AvatarImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8saQQFdwdBVPdZVPghDvmp5r_MmSE7PbNw&usqp=CAU"} size={"10vmax"}/>
                    </div>
                    </Col>
                    <Col style={{ position:"relative"}}>
                        <div style={{position:"absolute", top:"50%", left:"5%", transform:"translateY(-50%)", msTransform:"translateY(-50%)", width:"90%"}}>
                        <div style={{
                                color:"black",
                                fontSize:"1.5vmax"
                            }}>
                                Annisa Ayu Pramesti
                            </div>
                        <div
                            style={{
                                color:"black",
                                fontSize:"1vmax"
                            }}>
                                160 cm
                        </div>
                            <Button 
                            variant="light"
                            style={{
                                marginTop:"10px",
                                fontSize:"0.8vmax",
                                padding:"0.5vmax 0.7vmax"
                            }}
                            onClick={()=>this.setState({show:true})}>
                                Edit Profile
                            </Button>
                        </div>

                    </Col>

                </Row>

                <div style={{color:"black", fontSize:"2vmax"}}>

                    Here's your progress!
                </div>
                   <input
                   type="number"
                   name="berat"
                   onChange={(e)=>this.handleInput(e)}
                   value={this.state.berat}
                   style={{
                       backgroundColor:"transparent",
                       border:"1px solid gray",
                       borderRadius:"10px",
                       padding:"5px 10px",
                       margin:"12px 0",
                       fontSize:"1.2vmax"
                   }}
                   placeholder="Berapa beratmu hari ini?"/>
                   <Button 
                   style={{
                       fontSize:"0.8vmax",
                       padding:"0.4vmax 0.8vmax",
                       marginLeft:"12px"   
                }}
                   variant="success">Simpan</Button>

                <EditProfileModal show={this.state.show}  onHide={()=>this.setState({show:!this.state.show})} />
           </div>
         );
    }
}
 
export default Profile;