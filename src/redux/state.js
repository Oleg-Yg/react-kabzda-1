import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;