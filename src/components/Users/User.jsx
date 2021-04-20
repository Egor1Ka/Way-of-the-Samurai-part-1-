import React from 'react';
import userPhoto from './../../assets/images/avatarLol.jpg';
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';
import UsersPaginator from './UsersPaginator';

let User=(props)=>{
     


        return( <div>
            {
                props.users.map(u => <div key = {u.id} >
                        <NavLink to = {`/profile/${u.id}`}>

                            <div>
                                <img className = {style.usersPhoto} src={u.photos.small != null ? u.photos.small: u.photos.small =userPhoto}/>
                            </div>
                        </NavLink>
                            <div>
                                {u.followed ? <button disabled = 
                                    {props.followingInProgress.some(id => id ===u.id)} 
                                    onClick = {()=>{
                                    props.unfollow(u.id)
                                }}>UnFollow</button>:
                                <button disabled = 
                                {
                                    props.followingInProgress.some(id => id ===u.id)}
                                onClick = {()=>{
                                    props.follow(u.id);
                                }}>follow</button> }
                            </div>
                        
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}


export default User;