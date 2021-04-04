import React, { Component } from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Navbar style={{backgroundColor:"#75c095",height:"100px"}}>
            <Navbar.Brand href="/"><img src="https://toppng.com/uploads/thumbnail//28-collection-of-iphone-drawing-cartoon-hand-holding-iphone-cartoo-11562908528npcsjmdeq9.png" className="navbrand" /></Navbar.Brand>
            {this.props.show && 
            <div>
                <Navbar.Collapse className="mr-auto" style={{width:"40%"}}>
                    <Nav.Link className="nav-text"> Informasi Umum </Nav.Link>
                    <Nav.Link href="/calculator" className="nav-text"> Hitung BMI </Nav.Link>
                    <Nav.Link className="nav-text"> Chat dengan Apoteker </Nav.Link>
                    <Nav.Link href="/faq" className="nav-text"> FAQ </Nav.Link>        
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" style={{color:"white",fontWeight:"bold"}}>
                    Welcome, {this.props.name} 
                    <br/> Name  
                    <a href="/edit">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8saQQFdwdBVPdZVPghDvmp5r_MmSE7PbNw&usqp=CAU" className="navbrand" style={{borderRadius:"50%",paddingLeft:"10px"}} />
                        
                    </a> 
                </Navbar.Collapse>
            </div>  
            }
          </Navbar>
          </>
         );
    }
}
 
export default NavBar;