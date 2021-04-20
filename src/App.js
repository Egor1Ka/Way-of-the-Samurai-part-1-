import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { reducer } from 'redux-form';
import './App.css';
import Pereloader from './common/preloader/Preloader';
import Dialogs from './components/Dialoges/Dialogs';
//import DialogsContainer from './components/Dialoges/DialogsContainer';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import  Login  from './components/Login/login';
import Navbar from './components/NavBar/Navbar'
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from "./redux/app-reduser";
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider} from "react-redux";
const DialogsContainer = React.lazy(()=>import('./components/Dialoges/DialogsContainer'));


class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialazed)
    return <Pereloader/>

    return (
     
          <div className='app-wrapper'>
            <HeaderContainer/>
            <section className='flex-section'>
              <Navbar/>
              <div className = 'app-wrapper-content'>
                <Route path = '/profile/:userId?' render = {()=><ProfileContainer  />}/> 
                <Route path = '/dialogs' render = {()=> 
                <Suspense fallback = {<Pereloader/>}>
                <DialogsContainer />
                </Suspense>}/>
                <Route path = '/news' component = {News}/>
                <Route path = '/users' render = {()=> <UsersContainer/>}/>
                <Route path = '/login' render = {()=><Login/>}/>
              </div>
            </section>
          </div>
         
    );
  }
}



const mapStateToProps =(state)=>{
  return{
    initialazed:state.app.initialazed
  }
}


export default connect(mapStateToProps,{initializeApp})(App);
