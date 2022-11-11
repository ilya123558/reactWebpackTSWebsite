import React from 'react';
import './Nav.scss'

export interface INavItem {
    link: string,
    text: string
}

interface Props {
    navItems: INavItem[]
}

const Nav: React.FC<Props> = ({navItems}) => {

    return (
        <nav>
            <ul className='navItems'>
                {navItems.map((elem: INavItem) => <li key={elem.text} className={`navItem ${elem.text}`}>
                    <a href={elem.link}>{elem.text}</a>
                </li>)}
            </ul>
        </nav>
    );
};

export default Nav;