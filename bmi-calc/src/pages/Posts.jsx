import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {IoAddOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
class Posts extends Component {
    state = {  
        posts: {
            title:"Obesitas itu apa sih?",
            image:"https://d324bm9stwnv8c.cloudfront.net/5-tips-mengatur-pola-makan-untuk-anak-obesitas-halodoc.jpg",
            content:""
        }
    }

    async fetchInfo() {
        return fetch('http://localhost:8000/api/informations', {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
          .then(data => data.json())
    }

    componentDidMount() {
        this.fetchInfo()
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    posts: res.values
                });
                console.log(this.state);
            }
        });
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
               {!this.props.isAdmin &&
                <div>
                    <Post/>

                </div>
               }
            </div>
            </>
         );
    }
}
 
export default Posts;