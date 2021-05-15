import React, { Component } from 'react';
import {Row, Col, Table, Button, Spinner} from 'react-bootstrap';
import {IoAddOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Post from '../components/Post';
class Posts extends Component {
    state = { 
        isLoading: true, 
        posts: []
    }

    async fetchInfo() {
        const token = localStorage.getItem('token');
        return fetch('http://localhost:5000/api/information', {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        })
          .then(data => data.json())
    }

    async delete(id) {
        const token = localStorage.getItem('token');
        return fetch('http://localhost:5000/api/information/delete',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body : JSON.stringify({
                'id' : id
            })
        })
    }

    componentDidMount() {
        document.title = "Deskripsi Umum"
        this.fetchInfo()
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    posts: res.values
                });
            }
        });
    }
    deletePost = (id) =>{
        Swal.fire({
            icon:'question',
            title:'Anda yakin ingin menghapus post ini??',
            text:'Aksi ini tidak dapat dibatalkan',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor:"green",
            cancelButtonColor:"red",
            preConfirm: () => {
                this.delete(id)
                .then(res => {
                    if (res.status === 200){
                        Swal.fire({
                            text:'Post berhasil dihapus!',
                            icon:'success'
                        })
                        window.location.reload();
                    } else {
                        Swal.fire({
                            text:'Ada beberapa masalah! Coba lagi dalam beberapa saat!',
                            icon:'error'
                        })
                    }
                })
            }
        })
    }
   


    render() { 
        return ( 
            <>
           
          
             <img src="https://i.ibb.co/p1Zsp4T/Group-7.png" className="pictitle" />
            <div style={{width:"80%", minWidth:"200px", margin:"5% auto", color:"black"}}>
               {this.props.isAdmin &&
                <Row>
                    <Col>
                        <h3 className="cms-title">All posts</h3>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <Link to="/addpost">
                            <button className="post-button" >
                                <IoAddOutline style={{color:"white"}} /> Add post</button>

                        </Link>
                        
                    </Col>
                    <hr/>
                </Row>
               }
            {this.state.isLoading &&
                    <div style={{marginLeft:"50%"}}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>

                    </div>
                }
            {!this.state.isLoading && this.props.isAdmin&&
               <div style={{paddingTop:"30px"}}>
                    <Table striped bordered hover>
                        <thead>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                           {(this.state.posts.map((item) => (
                               <tr>
                                   <td>
                                       {item.id}
                                   </td>
                                    <td style={{width:"60%"}}>
                                    <Link style={{ textDecoration: 'none' }} to={{pathname:"/deskripsiumum/"+(item.id)}}>
                                            <div  className="postTitle">
                                            {item.title} 
                                            </div>    
                                    </Link>
                                    </td>
                                   <td>
                                       <Button variant="danger" onClick={()=>this.deletePost(item.id)}>Delete</Button>
                                   </td>
                               </tr>
                            )))}
                        </tbody>
                    </Table>
               </div>
            }
            
            {!this.state.isLoading && !this.props.isAdmin &&
            <>
                {(this.state.posts.reverse().map((item)=>(
                    <Post id={item.id}/>
                )))}
            </>}
            </div>
            </>
         );
    }
}
 
export default Posts;