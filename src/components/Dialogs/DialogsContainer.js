import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let
//                         state = store.getState().dialogsPage
//
//                     let onSendMessage = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }
//
//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text))
//                     }
//
//                     return (
//                         <Dialogs updateNewMessageText={onMessageChange}
//                                  sendMessage={onSendMessage}
//                                  dialogsPage={state}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;