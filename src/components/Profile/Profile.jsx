import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPosts from './MyPosts/MyPost';
import MyPostsContainer from './MyPosts/MyPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}
            status = {props.status}
            updateStatus = {props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}



export default Profile;