import React, { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
const url ="https://obesite-server.herokuapp.com/api"
// const url ="http://localhost:5000/api"

class UserLog extends Component {
    state = { 
        data: []
     }
    componentDidMount = () => {
        document.title = "User Log"
        this.fetchData()
    }
    fetchData() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        } 
        fetch(url + '/user/all', requestOptions)
            .then(response => response.json())
            .then(item => {
                if (item.status === 200) {
                    this.setState({
                        ...this.state,
                        data: item.values
                    });
                    console.log(item.values);
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
    render() { 
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
                        {this.state.data.map((item,i) => (
                            <tr>
                                <td> {i+1} </td>
                                <td> {(item.username ? item.username : '-' )}</td>
                                <td> {(item.email ? item.email : '-' )}</td>
                                <td> {item.log_count} </td>

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