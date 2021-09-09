import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <img src={props.avatar}/>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;