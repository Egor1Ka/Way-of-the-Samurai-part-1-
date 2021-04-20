import React from 'react';
import s from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formsControl/formsControl';
import { maxLengthCreator, requiredField } from '../../utils/validators/validatorsForm';

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {

    let state = props.dialogsPage;
   
    let onNewMessageChenge = (e)=>{
        let body = e.target.value;
        props.onNewMessageChenge(body);
    }

    let addNewMessage = (values)=>{
        props.onSendMessageClick(values.newMessageBody);
    }
    
    let dialogsElement = state.dialog
    .map(d => <DialogItem name = {d.name} id = {d.id}/>);

    let messagesElement = state.message
    .map(message => <Message message = {message.message}/>);

        
    return (
            <div className = {s.dialogs}>
                <div className = {s.dialogsItems}>
                    {dialogsElement}
                </div>
                
                <div className={s.messages}>
                   <div>{messagesElement}</div> 
                   <ReduxAddMessageForm onSubmit = {addNewMessage}/>    
                </div>
                
            </div>
    );
}


const AddMessageForm = (props) =>{
    return <form onSubmit = {props.handleSubmit}>
        <div>
            <Field component = {Textarea} 
            name ='newMessageBody'
            validate = {[requiredField,maxLength100]}/>
        </div>
        <div>
            <button>add message</button>
        </div>
    </form>
}

const ReduxAddMessageForm = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);




export default Dialogs;