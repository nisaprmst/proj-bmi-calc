import React, { Component } from 'react';
import CMS from '../components/CMS';

class Posts extends Component {
    state = {  
        isAdmin: true
    }
    render() { 
        return ( 
            <>
            {this.state.isAdmin  && <CMS/>}
            </>
         );
    }
}
 
export default Posts;