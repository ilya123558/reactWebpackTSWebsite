import React from 'react';
import './Header.scss'
import Logo from './logo/Logo';
import Nav from '../UI/nav/Nav';
import { INavItem } from '../UI/nav/Nav';
import UserInfo from './userInfo/UserInfo';

const Header = () => {

    const navItems: INavItem[] = [
        { link: '', text: 'Foil' },
        { link: '', text: 'Learn' },
        { link: '', text: 'Blog' },
        { link: '', text: 'Product' },
        { link: '', text: 'Community' },
        { link: '', text: 'Block Explorer' },
        { link: '', text: 'Contact Us' },
    ]



    return (
        <header className='header'>
            <div className='header-container'>
                <Logo />
                <Nav navItems={navItems}/>
                <UserInfo />
            </div>
        </header>
    );
};

export default Header;