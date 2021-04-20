const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    message : [
    {id:1, message:'Hi'},
    {id:2, message:'How are you'},
    {id:3, message:'Its my first messageaaa'}
    ],
    dialog : [
    {id:1, name:'Dimych'},
    {id:2, name:'Egor'},
    {id:3, name:'Roma'}  
    ]
}

const dialogsReduser = (state = initialState,action)=>{
   
   
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
            ...state,
            newMessageBody : action.body
            };   
        }
        case SEND_MESSAGE:{
            let body = action.newMessageBody;
            return  {
                ...state,
                message: [
                    ...state.message,
                    {id:4,message:body}
                ]
            };
           
        }
        default:
            return state;
    }
}

export const sendMessageCreator= (newMessageBody)=>{
    return{
        type :SEND_MESSAGE ,
        newMessageBody
    }
}
export const updateNewMessageBodyCreator = (text)=>{
    return{
        type:UPDATE_NEW_MESSAGE_BODY,
        body:text
    }
}

export default dialogsReduser;