import React, { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
class UserLog extends Component {
    state = {  }
    componentDidMount = () => {
        document.title = "User Log"
    }
    render() { 
        const data = [
            {
                username : "feliciagojali",
                count : 12
            },
            {
                username : "annisaayu",
                count : 20
            },
            {
                username : "floren",
                count : 12
            },
            {
                email : "gojalif@gmail.com",
                count : 10
            },
            {
                email : "yaya@email.com",
                count : 22
            }
        ]
        return ( 
            <>
            <div style={{color:"black", padding:"50px"}}>
                Today : 24th January 2021
            </div>
            <div style={{width:"80%", margin:"auto",fontSize:"1.5vmax", fontWeight:"normal"}}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Username </th>
                            <th> Email </th>
                            <th> Login count </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i) => (
                            <tr>
                                <td> {i+1} </td>
                                <td> {(item.username ? item.username : '-' )}</td>
                                <td> {(item.email ? item.email : '-' )}</td>
                                <td> {item.count} </td>

                            </tr>
                        ))}
                        
                        </tbody>

                </Table>

            </div>
            </>
         );
    }
}
 
export default UserLog;