import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {logout} from'./../../redux/auth-reduser'
import { withRouter } from 'react-router';


class HeaderContainer extends React.Component{
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>{
    return{
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth:state.auth.isAuth
    }   
}



export default withRouter(connect(mapStateToProps,{logout})(HeaderContainer));