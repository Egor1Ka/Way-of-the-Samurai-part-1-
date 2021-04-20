import { updateObjectInArray } from '../utils/obj-helpers';
import {usersAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING  = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress : []
}

const usersReduser = (state = initialState,action)=>{
    console.log(state.currentPage)
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users : updateObjectInArray(state.users,action.id,'id',{followed : true})
                /*state.users.map(u=> {
                    if(u.id === action.id){
                       return {...u, followed : true}
                    }
                    return u; 
                }),*/
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users :updateObjectInArray(state.users,action.id,'id',{followed : false})
                /* state.users.map(u=>{
                    if(u.id === action.id){
                        return {...u, followed : false}
                    }
                    return u; 
                 })*/
            }
           
        }
        case SET_USERS:{
            return{
                ...state,
                users:[/*...state.users ,*/ ...action.users]
            }
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_COUNT:{
            return {
                ...state , totalUsersCount : action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING :{
            return{
                ...state,isFetching:action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return{
                ...state, 
                followingInProgress : action.isFetching? 
                [...state.followingInProgress,action.userId]:
                state.followingInProgress.filter(id => id!=action.userId)
            }
        }
        default:
            return state;   
    }
}

export const followSuccess= (userId)=>{
    return{
        type :FOLLOW ,
        id:userId
    }
}
export const unfollowSuccess= (userId)=>{
    return{
        type:UNFOLLOW,
        id:userId
    }
}

export const setUsers=(users)=>{
    return{
        type: SET_USERS,
        users
    }
}

export const setCurrentPage=(currentPage)=>{
    return{
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount=(totalUsersCount)=>{
    return{
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
}

export const setIsFetching =(isFetching)=>{
    return{
        type:TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const  toggleIsfollowing = (isFetching,userId)=>{
    return{
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId  
    }
}

export const getUsers = (page,pageSize)=> async (dispatch)=>{
            dispatch(setIsFetching(true));
            let data = await usersAPI.getUsersAPI(page,pageSize);
            dispatch(setCurrentPage(page));
            dispatch(setIsFetching(false));    
            dispatch(setUsers(data.items)) ;
            dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async(dispatch,id) =>{
    dispatch(toggleIsfollowing(true,id));
        let response = await usersAPI.follow(id);
        if (response.data.resultCode == 0){
            dispatch(followSuccess(id));
        }
        dispatch(toggleIsfollowing(false,id)); 
}

export const follow = (id)=> async (dispatch)=>{
        dispatch(toggleIsfollowing(true,id));
        let response = await usersAPI.follow(id);

        if (response.data.resultCode == 0){
            dispatch(followSuccess(id));
        }
        dispatch(toggleIsfollowing(false,id)); 
}

export const unfollow = (id)=>async (dispatch)=>{

        dispatch(toggleIsfollowing(true,id))
        let response = await usersAPI.unfollow(id)

        if (response.data.resultCode == 0){
            dispatch(unfollowSuccess(id));
        }
        dispatch(toggleIsfollowing(false,id));
}



export default usersReduser;