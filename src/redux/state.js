import dialogsReduser from "./dialogs-reduser";
import proileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";

let store = {
    _state :{
        profilePage : {
            posts : [
            {id:1,message:'Hi , how are you' , like :12},
            {id:2,message:'Its my first post', like:11}
            ],
            newPostText :'it-sosi1'
        },
        
        dialogsPage : {
            message : [
            {id:1, message:'Hi'},
            {id:2, message:'How are you'},
            {id:3, message:' my first message'}
            ],
            dialog : [
            {id:1, name:'Dimych'},
            {id:2, name:'Egor'},
            {id:3, name:'Roma'}  
            ],
            newMessageBody : '',


        },
        sidebar:{} 
    },
    _callSubscriber(){
        console.log('state chenge')
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
   

    addPost (){
        let newPost = {
            id : this._state.profilePage.posts.length++,
            message: this._state.profilePage.newPostText,
            like:0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    dispatch(action){ 
        this._state.profilePage = proileReduser(this._state.profilePage,action);
        this._state.dialogsPage =  dialogsReduser(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReduser(this._state.sidebar,action);
        
        this._callSubscriber(this._state);
    },

}
debugger;

 
export default store;
window.store = store;