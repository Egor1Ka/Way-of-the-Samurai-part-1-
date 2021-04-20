import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReduser = (state = initialState,action)=>{
   
   
    switch (action.type) {
        case SET_USER_DATA:{
            return {
            ...state,
            ...action.data,
            };   
        }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId,email,login,isAuth) =>{
    return{
        type:SET_USER_DATA,
        data:{
            userId,
            email,
            login,
            isAuth
        }
    }

}; 

export const getAuthUserData = () => async (dispatch)=>{
   let response = await authAPI.me();

    if (response.data.resultCode === 0){
        let {id,login,email} = response.data.data
        dispatch(setAuthUserDataAC(id,email,login,true))
    } 
}

export const login = (email,password,rememberMe) => async (dispatch)=>{

    let response = await authAPI.login(email,password,rememberMe)
        if (response.data.resultCode === 0){
            dispatch(getAuthUserData());
        }else{
            dispatch(stopSubmit('login',{_error:`${response.data.message}`}));
        }
        
}

export const logout = () => async (dispatch)=>{
    let response = await authAPI.logout();
       
    if (response.data.resultCode === 0){
        dispatch(setAuthUserDataAC(null,null,null,false))
    }
    
}
export default authReduser;