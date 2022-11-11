import React from 'react';
import './CompletedContest.scss'
import CompletedContestItem from './completedContestItem/CompletedContestItem';
import imgItem1 from '@images/home/section-completedContest/imgItem1.jpg'

const HomeCompletedContest = () => {

    const CompletedContestItems = [
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            cContestItemImg: imgItem1,
            title: 'Completed Airdrop titile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
    ]

    return (
        <section className='section-home__cContest'>
            <div className="container">
                <h3 className="home-cContest__title">
                    Completed Bounty Hunt & Airdrops
                </h3>

                <ul className='home-cContest__items'>
                    {CompletedContestItems.map((elem, index) => <CompletedContestItem key={index} {...elem} />)}
                </ul>

                <div className='home-cContest__button-wrapper'>
                    <button className='home-cContest__button'>
                        Load more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeCompletedContest;