import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';
import { Form, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';



class CMS extends Component {
    state = {   
        editorState: EditorState.createEmpty(),
        post : {
            title: '',
            content: ''
        }
      }
    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            post :{
                ...this.state.post,
            title : value
            }
        });
    }
    onEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        this.setState({
            editorState,
            post : {...this.statetitle, 
                content : stateToHTML(contentState)
            }
          });

      };
    componentDidMount() {
        document.body.style.color = "black";
        
    }

    postNewData = () => {
        console.log("posted");
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
                showLoaderOnConfirm: true,
                preConfirm: this.postNewData() 

            })
            
        }
    
    
    }
    
    render() { 
        const { editorState } = this.state;
        return ( 
        <>
        
        <div style={{minWidth:"400px",width:"60%", margin:"5% auto"}}>
            <Form onSubmit={this.handleSubmit}>
            <div style={{width:"100%"}}>
                <Row>
                    <Col style={{textAlign:"left"}}>
                        <h3>
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
                  <Form.Control type="text" name="title" value={this.state.post.title} placeholder="Title" className="form-cms" style={{marginBottom:"13px"}} onChange={(e) => this.handleUserInput(e)} onBlur={(e)=> this.handleUserInput(e)}  required/>
                </Form.Group>
            </Form>
        <Editor
            editorState={editorState}
            editorStyle={{border:"1px solid black", fontSize:"12px", padding:"0 1%", minHeight:"200px"}}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                inline: {
                    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                },
                list :{
                    options: ['unordered', 'ordered']
                }
            }}
            
            />   
        </div>
        
         <h4>Editor content as HTML</h4>
         <div  dangerouslySetInnerHTML={{__html: this.state.post.content}} />

        </> 
        );
    }
}
 
export default CMS;