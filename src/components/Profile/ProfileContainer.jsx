import React from 'react';
import Profile from './Profile';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from'./../../redux/profile-reduser'
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


 class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId); 
         
    }

    render(){ 
        return(
            <Profile {...this.props} 
            profile = {this.props.profile}
            status = {this.props.status}
            updateStatus = {this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(
        mapStateToProps,{getUserProfile,getStatus,updateStatus}),
        withRouter,
        withAuthRedirect)
(ProfileContainer)
