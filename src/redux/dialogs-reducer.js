const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Misha',
            avatar: 'https://i.pinimg.com/originals/03/27/e7/0327e70876c263372de6556c6dfb8439.jpg'
        },
        {
            id: 2,
            name: 'Volodya',
            avatar: 'https://img.freepik.com/free-vector/vintage-turtle-top-view-illustration_225004-1028.jpg?size=626&ext=jpg'
        },
        {
            id: 3,
            name: 'Valya',
            avatar: 'https://st.depositphotos.com/1734074/2003/v/600/depositphotos_20038697-stock-illustration-art-girl.jpg'
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer