import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/formsControl/formsControl.js';
import {maxLengthCreator, requiredField } from '../../../utils/validators/validatorsForm.js';
import s from './MyPost.module.css';
import Posts from './Post/Post';

const maxLengthCreator10 = maxLengthCreator(10);
const  MyPosts =React.memo( props=>{

    console.log(props)
    console.log('RENDER')
    let  postsElement = [...props.posts].reverse()
    .map(p =>  <Posts message = {p.message} like = {p.like}/>) 

    let newPostElement = React.createRef();

    let onAddPost = (value)=>{
        debugger;
        props.addPost(value.newPostText);
    }

    return (
        <div className = {s.postsBlock}>
            <h3>My Post</h3>
            <ReduxAddPostForm onSubmit = {onAddPost}/>
            <div>   
                New post
            </div>
            <div className = {s.posts}> 
                {postsElement}
            </div>
            
        </div>
       
    );
    
})

const AddPostForm = (props) =>{
    return (
        <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field name = 'newPostText' 
                    placeholder = 'post message'
                    component = {Textarea}
                    validate = {[requiredField,maxLengthCreator10]}/>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </form>
    )
}

const ReduxAddPostForm = reduxForm({form:'AddPostForm'})(AddPostForm);




export default MyPosts;