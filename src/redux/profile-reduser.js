import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts : [
    {id:1,message:'Hi , how are you' , like :12},
    {id:2,message:'Its my first post', like:11}
    ],
    profile: null,
    status:''
}

const proileReduser = (state = initialState,action)=>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id:2,
                message: action.newPostText,
                like:0
            };
            return  {
                ...state,
                posts :[...state.posts ,
                newPost
                ],
            };
        }
        case SET_USER_PROFILE :{
            return{
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS :{
            return{
                ...state,
                status : action.status
            }
        }
        case DELETE_POST:{
            return{
                ...state,
                posts: state.posts.filter(p=> p != action.idDeletePost)
            }
        }
        default :
            return state;
    }
}

export const addPostActionCreator = (newPostText)=>{
    return{
        type :ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile)=>{
    return{
        type:SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status)=>{
    return{
        type: SET_STATUS,
        status
    }
}

export const deletePost = idDeletePost => ({type:DELETE_POST,idDeletePost});

export const getUserProfile = (userId)=>{
    return async (dispatch)=>{
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId)=> async (dispatch)=>{
    let response =  await profileAPI.getStatus(userId);
        
    dispatch (setStatus(response.data));
   
}

export const updateStatus = (status)=> async (dispatch)=>{
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0){
        dispatch(setStatus(status));
        }
}




export default proileReduser;