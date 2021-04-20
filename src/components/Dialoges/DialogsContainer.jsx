import React from 'react';
import {sendMessageCreator }from '../../redux/dialogs-reduser'
import Dialogs from './Dialogs';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state)=>{
    return{
        dialogsPage:state.dialogsPage,
        newPostText: state.dialogsPage.newMessageBody,
    }
}

let mapDispatshToProps = (dispatch)=>{
    return{
        onSendMessageClick:(newMessageBody)=>{ 
            dispatch(sendMessageCreator(newMessageBody));
        },

    }
}

export default compose(
    connect(mapStateToProps,mapDispatshToProps),
    withAuthRedirect
)(Dialogs)
