import React, { Component } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import AvatarImage from '../components/AvatarImage';
import EditProfileModal from '../components/EditProfileModal';
import Graph from '../components/Graph';
import Field from '../components/Field';
// const url ="https://obesite-server.herokuapp.com/api"
const url ="http://localhost:5000/api"

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            show: false,
            berat: 0,
            tinggi: 0,
            name: "Name",
            isUser: true
        }
    }
    componentDidMount() {
        document.title = "Profil"
        document.body.style.backgroundColor = "#bfe7d4";
        this.fetchProfile();
    }
    fetchProfile() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        } 
        fetch(url + '/user/info', requestOptions)
            .then(response => response.json())
            .then(item => {
                if (item.status === 200) {
                    this.setState({
                        ...this.state,
                        show: false,
                        tinggi : item.values.height,
                        berat : item.values.weight,
                        name : item.values.name,
                        isUser : item.values.role === "USER",
                        isLoading : false
                    });
                }
            })
            .catch(err => {
                console.log(err)
            });

        this.setState({
            ...this.state,
            isLoading:false
        })
    }
    handleInput = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]:value
        })
    }
    handleLogout = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          } 
          fetch(url + '/auth/logout', requestOptions)
                  .then(response => response.json())
                  .then(res => {
                    localStorage.setItem('token', res.values.token);
                    window.location.reload();
                  })
                  .then();
    }
    render() { 
        return ( 
           <div style={{ margin:"auto", width:"70%"}}>
                <Row style={{padding:"10% 5%"}}>
                    <Col xs="auto" >
                    <div >
                        <AvatarImage src={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} size={"10vmax"}/>
                    </div>
                    </Col>
                    <Col style={{ position:"relative"}}>
                        <div style={{position:"absolute", top:"50%", left:"5%", transform:"translateY(-50%)", msTransform:"translateY(-50%)", width:"90%"}}>
                        {this.state.isLoading && <Spinner variant="dark" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>}
          
                        
                        {!this.state.isLoading && 
                        <>
                        <div style={{
                                color:"black",
                                fontSize:"1.5vmax"
                            }}>
                                {this.state.name}
                            </div>
                        <div
                            style={{
                                color:"black",
                                fontSize:"1vmax"
                            }}>
                                {this.state.tinggi} cm, {this.state.berat} kg
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
                            <Button 
                            variant="light"
                            style={{
                                marginTop:"10px",
                                marginLeft: "5px",
                                fontSize:"0.8vmax",
                                padding:"0.5vmax 0.7vmax",
                                backgroundColor: "red",
                                color: "white"
                            }}
                            onClick={()=>this.handleLogout()}>
                                Logout
                            </Button>
                            </>
                        }
                        </div>

                    </Col>

                </Row>

                <div style={{color:"black", fontSize:"2vmax"}}>

                    Here's your progress!
                </div>
                   {/* <input
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
                   variant="success">Simpan</Button> */}
                {this.state.isUser &&
                    <Graph />
                }
                <EditProfileModal show={this.state.show}  onHide={()=>this.setState({show:!this.state.show})} />
           </div>
         );
    }
}
 
export default Profile;