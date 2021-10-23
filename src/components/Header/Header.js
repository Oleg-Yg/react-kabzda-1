import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://simple.solutions/attachments/600/react_best_practices-1453211146748.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;