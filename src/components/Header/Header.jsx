import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://static.highsnobiety.com/thumbor/rBS8m5hFGk7yp3SRrKZazksT3-U=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171711/replacement-logos-03.jpg' alt='' />

            <div className = {s.loginBlock}>
                {props.isAuth? <div>{props.login} - <button onClick = {props.logout}>log out</button></div>:
                <NavLink to ={`/login`}>login</NavLink>}
            </div>
        </header>
    );
}



export default Header;