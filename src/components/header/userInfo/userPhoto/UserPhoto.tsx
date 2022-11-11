import React from 'react';
import photo from  '@images/header/headerUser.jpg'
import './UserPhoto.scss'

const UserPhoto = () => {
    return (
        <div className="header-user__photo">
            <img className="header-user__img" src={photo} alt="userPhoto" />
        </div>
    );
};

export default UserPhoto;