import {getAuthUserData} from "../redux/auth-reduser";
const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';

const initialState = {
    initialazed:false,
}

const AppReduser = (state = initialState,action)=>{
    switch(action.type){
        case INITIALAZED_SUCCESS :{
            return{
                ...state,
                initialazed:true
            }
        }
        default:{
            return state; 
        }
    }
}

export const initialazedSuccess = () => ({ type:INITIALAZED_SUCCESS}); 

export const initializeApp = ()=>(dispatch)=>{
  let promise = dispatch(getAuthUserData());
  promise.then(()=>{
    dispatch(initialazedSuccess());
  })
}
export default AppReduser;