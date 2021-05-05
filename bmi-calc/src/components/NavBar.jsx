import React, { Component } from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';
import AvatarImage from './AvatarImage';
class NavBar extends Component {
    state = {  }
    
    render() { 
        return ( 
            <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="#75c095" style={{backgroundColor:"#75c095"}}>
            <Navbar.Brand href="/"><img src="https://toppng.com/uploads/thumbnail//28-collection-of-iphone-drawing-cartoon-hand-holding-iphone-cartoo-11562908528npcsjmdeq9.png" className="navbrand" /></Navbar.Brand>
                    { this.props.show && 
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" /> }
                      {this.props.show &&
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="/definisi"  style={{color:"white"}}> Definisi </Nav.Link>

                            <Nav.Link href="/deskripsiumum"  style={{color:"white"}} > Informasi Umum </Nav.Link>
                            <Nav.Link href="/calculator"  style={{color:"white"}}> Hitung BMI </Nav.Link>
                            <Nav.Link  style={{color:"white"}}> Chat dengan Apoteker </Nav.Link>
                            <Nav.Link href="/faq" style={{color:"white"}} > FAQ </Nav.Link>        
                        </Nav>
                        <Nav>
                        <Nav.Link href="/profil">
                            <div className="profile-pic">
                                <AvatarImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8saQQFdwdBVPdZVPghDvmp5r_MmSE7PbNw&usqp=CAU"} size={"50px"}/>

                            </div>
                                <p className="navbar-profile">Lihat profil</p>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    }
              
           
          </Navbar>
          </>
         );
    }
}
 
export default NavBar;