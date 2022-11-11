import React from 'react';
import SocialUl from './socialUl/SocialUl';
import './UserInfo.scss'
import UserPhoto from './userPhoto/UserPhoto';

const UserInfo = () => {

    return (
        <div className='header-user__wrapper'>
            <SocialUl />
            <div className='header-user__lang'>EN</div>
            <UserPhoto />
        </div>
    );
};

export default UserInfo;