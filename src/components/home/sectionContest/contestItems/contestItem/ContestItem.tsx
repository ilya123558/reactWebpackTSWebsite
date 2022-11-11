import React from 'react';
import './ContestItem.scss'


interface IContestItem {
    contestImage: string,
    title: string,
    text: string,
}

const ContestItem: React.FC<IContestItem> = ({contestImage, title, text}) => {
    return (
        <div className='home-contest__Item'>
            <div className='contest-Item__img-inner'>
                <img className='contest-Item__img' src={contestImage} alt="contestImage" />
            </div>
            <img className='contest-Item__img' src={contestImage} alt="contestImage" />
            <h3 className='contest-Item__title'>{title}</h3>
            <p className='contest-Item__subtitle'>
                {text}
            </p>
        </div>
    );
};

export default ContestItem;