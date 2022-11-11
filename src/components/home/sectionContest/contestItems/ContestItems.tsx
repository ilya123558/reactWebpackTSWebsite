import React from 'react';
import ContestItem from './contestItem/ContestItem';
import './ContestItems.scss'
import contestImage from '@images/home/section-contest/contestImage.jpg'
import contestImage2 from '@images/home/section-contest/contestImage2.jpg'

const ContestItems = () => {
    const contestItemList = [
        {
            contestImage: contestImage,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            title: 'Actuail Airdrop titile'
        },
        {
            contestImage: contestImage2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            title: 'Actuail Airdrop titile'
        }
    ]

    return (
        <div className='home-contest__Items'>
            {contestItemList.map(elem => <ContestItem key={elem.title}
                contestImage={elem.contestImage}
                text={elem.text}
                title={elem.title} />
            )}
        </div>
    );
};

export default ContestItems;