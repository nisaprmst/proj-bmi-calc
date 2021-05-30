import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';
import { Form, Col, Row, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

// const url ="https://obesite-server.herokuapp.com/api"
const url ="http://localhost:5000/api"


class CMS extends Component {
    state = {   
        isLoading: false,
        editorState: EditorState.createEmpty(),
        post : {
            title: '',
            img_url: '',
            content: ''
        }
      }
    handleInput = (e) => {
        const {name, value } = e.target;
        this.setState({
            ...this.state,
            post :{
                ...this.state.post,
            [name] : value
            }
        });
    }

    onEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        this.setState({
            ...this.state,
            editorState,
            post : {...this.state.post, 
                content : stateToHTML(contentState)
            }
          });
      };
    componentDidMount() {
        document.body.style.color = "black";   
    }

    async postData(){
        const token = localStorage.getItem('token');
        return fetch(url + '/information/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body : JSON.stringify(this.state.post)
        })
    }
    postNewData = () => {
        this.setState({
            ...this.state,
            isLoading: true
        })
        this.postData()
        .then(response => {
            this.setState({
                ...this.state,
                isLoading: false
            })
            if (response.status === 200){
                Swal.fire({
                    text:'Post berhasil ditambah!',
                    icon:'success'
                })
                this.props.history.push('/deskripsiumum')
            } else {
                Swal.fire({
                    text:'Ada error!',
                    icon:'error'
                })
            }
        })
        

        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.post.content == ''){
            Swal.fire({
                text: `Please fill the post's content first!`,
                icon: 'error',
                showCancelButton: false,
                showConfirmButton: false
            });

        } else {
            Swal.fire({
                text: "Are you sure you want to post this?",
                showCancelButton: true,
                confirmButtonText:"Yes",
                confirmButtonColor:"#15533E",
                showConfirmButton: true,
                cancelButtonColor:"#800000",
                preConfirm: ()=>this.postNewData(),
                showLoaderOnConfirm: true

            })
            
        }
    
    
    }
    
    render() { 
        const { editorState } = this.state;
        return ( 
        <>
         {this.state.isLoading &&
        <div style={{position:"fixed", top:"50%", left:"47%", zIndex:100}}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>

        </div>}
        
        
        <div style={{minWidth:"300px",width:"60%", margin:"5% auto"}}>
            <Form onSubmit={this.handleSubmit}>
            <div style={{width:"100%"}}>
                <Row>
                    <Col style={{textAlign:"left"}}>
                        <h3 className="cms-title">
                            Add New Post
                            </h3>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <button className="post-button">Post</button>
                    </Col>
                </Row>
            </div>
            <hr/>
                <Form.Group>
                  <Form.Control type="text" name="title" value={this.state.post.title} placeholder="Title" className="form-cms" style={{marginBottom:"13px"}} onChange={(e) => this.handleInput(e)} onBlur={(e)=> this.handleInput(e)}  required/>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column xs="4" className="image-cms">Add Image Cover URL</Form.Label>
                  <Col xs={8}>
                    <Form.Control type="text" name="img_url" value={this.state.post.img_url} placeholder="Cover Image URL" className="form-cms" style={{marginBottom:"13px", paddingLeft:"10px"}} onChange={(e) => this.handleInput(e)} onBlur={(e)=> this.handleInput(e)}  required/>

                  </Col>

                </Form.Group>
            </Form>
        <Editor
            editorState={editorState}
            wrapperStyle={{width:"100%"}}
            editorStyle={{border:"1px solid black", fontSize:"12px", padding:"0 1%", minHeight:"200px"}}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'],
                inline: {
                    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                },
                list :{
                    options: ['unordered', 'ordered']
                }
            }}
            
            />   
        
        </div>
        

        </> 
        );
    }
}
 
export default CMS;