import React, { Component } from 'react';
import Login from './components/Login';
import {Navbar, Button, Nav} from 'react-bootstrap';
export default class Homepage extends Component {
    state= {
      show:false
    }

    setShow = () =>{
      this.setState({show:!this.state.show});
    }
    render(){
      return(
        <div>
            <Navbar style={{backgroundColor:"#bfe7d4"}}>
              <Navbar.Brand href="#home"><img src="https://www.seekpng.com/png/full/773-7734572_download-breakfast-food-wallpaper-hd.png" height="40"/></Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Button className="button" variant="light"> 
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" height="20"></img>
                &#160;Sign in With Google</Button>
              </Navbar.Collapse>
            </Navbar>
        </div>
      )
    }


}
