import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.chatInput}>
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}
                                  placeholder='Enter your message'/>
                    </div>
                    <div className={s.button}>
                        <button onClick={onSendMessage}>send a message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;