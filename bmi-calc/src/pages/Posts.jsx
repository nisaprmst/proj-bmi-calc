import React, { Component } from 'react';
import Definition from '../components/Definition';
import TableOfPost from '../components/TableOfPost';

class Posts extends Component {
    state = {  
    }
    render() { 
        return ( 
            <>
             <img src="https://i.ibb.co/p1Zsp4T/Group-7.png" className="pictitle" />
            {this.props.isAdmin  && <TableOfPost/>}
            </>
         );
    }
}
 
export default Posts;