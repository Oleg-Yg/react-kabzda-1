import React from "react";
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'I am a boos',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am a boos too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
                    followed: true,
                    fullName: 'Andrew',
                    status: 'I am a boos too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users