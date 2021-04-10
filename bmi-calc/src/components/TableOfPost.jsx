import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import {IoAddOutline} from 'react-icons/io5';

class TableOfPost extends Component {
    state = {  }


    render() { 
        return ( 
            <>
            <div style={{width:"80%", minWidth:"200px", margin:"5% auto", color:"black"}}>
                <Row>
                    <Col>
                        <h3>All posts</h3>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <a href="/addpost">
                            <button className="post-button">
                                <IoAddOutline style={{color:"white"}} /> Add post</button>
                        </a>
                    </Col>
                </Row>
                <hr/>
                <div>
                    tabel

                </div>
            </div>
            
            </>
         );
    }
}
 
export default TableOfPost;