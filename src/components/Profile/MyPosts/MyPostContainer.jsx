import React from 'react';
import s from './MyPost.module.css';
import Posts from './Post/Post';
import {updateNewPostTextActionCreator,addPostActionCreator } from '../../../redux/profile-reduser'
import MyPosts from './MyPost';
import { connect } from 'react-redux';


let mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToPropse=(dispatch)=>{
    return{
        addPost:(newPostText)=>{ 
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps,mapDispatchToPropse)(MyPosts);



export default MyPostsContainer;