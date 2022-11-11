import React from 'react';
import './CompletedContestItem.scss'

interface ICompletedContestItem {
    cContestItemImg: string,
    title: string,
    text: string,
}

const CompletedContestItem: React.FC<ICompletedContestItem> = ({cContestItemImg, title, text}) => {
    return (
        <li className='home-cContest__item'>
            <img className='home-cContest__item-img' src={cContestItemImg} alt="cContestItemImg" />
            <h4 className='home-cContest__item-title'>{title}</h4>
            <p className='home-cContest__item-text'>{text}</p>
        </li>
    );
};

export default CompletedContestItem;