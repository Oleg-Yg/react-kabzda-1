import React from 'react';
import s from './ProfileInfo.module.css';
import Landscape from '../../../assets/images/Landscape.jpg';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={Landscape}/>
            </div>
            <div className={s.descriptionBlock}>
                    <img className={s.userPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div>
                    About me:
                    {props.profile.aboutMe}
                </div>
                <div>
                    <div>
                        <h3>
                            Contacts:
                        </h3>
                    </div>
                    <div>
                        Facebook:
                        {props.profile.contacts.facebook}
                    </div>
                    <div>
                        VK:
                        {props.profile.contacts.vk}
                    </div>
                </div>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;