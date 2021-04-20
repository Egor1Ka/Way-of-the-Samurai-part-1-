import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../../common/formsControl/formsControl'
import { maxLengthCreator, requiredField } from '../../utils/validators/validatorsForm'
import {login,logout} from "./../../redux/auth-reduser";
import style from "../../common/formsControl/form.module.css";
const maxLength10 = maxLengthCreator(100);
const Login = (props)=>{
    const onSubmit = (formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe,);
    }
    debugger;
    if(props.isAuth){
        return<Redirect to = '/profile'/>
    }
    console.log(<props className="isAuth"></props>)
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit = {onSubmit}/>
    </div>
}

const LoginForm = ({handleSubmit,error})=>{
    return <form onSubmit = {handleSubmit}>
            <div>
                {createField('email',Input,[requiredField,maxLength10],'email')}
                
            </div>
            <div>
                {createField()}
                <Field  
                name ='password' 
                type = 'password'
                component = {Input} 
                validate = {[requiredField,maxLength10]}
                placeholder="Password"/>
            </div>
            <div>
                <Field  
                name ='rememberMe' 
                component = {Input} 
                type="checkbox"/> remember me
            </div>

            { error && <div className = {style.formSummaryError}>
                <span>{error}</span>
            </div>}

            <div>
                <button>Login</button>
            </div>
           
        </form>
    
}

const mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    } 
}

const ReduxLoginForm = reduxForm({form:'login'})(LoginForm);
export default connect(mapStateToProps,{login,logout})(Login);

