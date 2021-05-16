import React, { Component, useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Post extends Component {
    state = { 
        data: [],
        date: null,
        time: null,
        isLoading: true,
        isDetail: null,
        showMore: false
     }
    async fetchInfo(id) {
        const token = localStorage.getItem('token');
        return fetch('https://obesite-server.herokuapp.com/api/information/'+id, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        })
          .then(data => data.json())
    }
    componentDidMount(){
        let id;
        if (this.props.id){
            id = this.props.id;
            this.setState({isDetail:false});
        } else {
            id = this.props.match.params.id;
            this.setState({isDetail:true});
        }
        this.fetchInfo(id)
        .then(res => {
            if (res.status === 200) {
                if(res.values.length === 0){
                    this.props.history.push('/notfound');
                } else {
                    var obj = new Date(res.values[0].created_date);
                    const date = obj.getDate().toString() +'/'+  obj.getMonth().toString() +'/'+ obj.getDate().toString();
                    const hours = (obj.getHours().toString().length == 1 )?'0'+ obj.getHours().toString(): obj.getHours().toString();
                    const mins = (obj.getMinutes().toString().length == 1)? '0'+ obj.getHours().toString(): obj.getHours().toString();
                    const time = hours+'.'+mins + ' WIB';                    
                    this.setState({
                        data:res.values[0],
                        date,
                        time,
                        isLoading:false
                    });

                }
            }
            if(this.props.id){
                const content = document.getElementById('content-'+this.props.id);
                if(content.scrollHeight > content.clientHeight){
                    this.setState({
                        ...this.state,
                        showMore: true
                    })
                }

            }
        });
    }
    render() { 
        return (
            
        <div style={{color:"black",padding:"10% 10% 0 10%"}}>
            {this.state.isLoading &&
                <div style={{marginLeft:"50%"}}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>

                </div>
            }
            {!this.state.isLoading && 
            <>
                <div style={{fontSize:"40px"}}>
                    {this.state.data.title}
                </div>
                <div style={{fontWeight:"lighter"}}>
                    {this.state.date}   {this.state.time}
                </div>
                <img src={this.state.data.img_url} style={{width:"100%"}} alt=""/>
                <div id={"content-"+this.props.id} style={{fontWeight:"normal", paddingTop:"5%"}} className={(!this.state.isDetail)? "overflowShow" : ""} dangerouslySetInnerHTML={{__html: this.state.data.content}} />
                {this.state.showMore &&
                    <Link style={{textDecoration:"none", fontSize:"20px", color:"green"}} to={{pathname:'/deskripsiumum/'+this.props.id}} >
                        Show more
                    </Link>
                }
            </>
            }   
        </div>  
        );
    }
}
 
export default Post;