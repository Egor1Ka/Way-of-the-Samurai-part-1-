import React from 'react';
import s from './ProfileInfo.module.css';
import Pereloader from './../../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHoo from './ProfileStatusWithHook';



const ProfileInfo = (props) => {
    if(!props.profile){
        return <Pereloader/>
    }else{
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <ProfileStatusWithHoo status = {props.status} updateStatus = {props.updateStatus}/>
        </div>
       
    );
    }
}



export default ProfileInfo;