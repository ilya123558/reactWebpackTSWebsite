import React from 'react';
import ContestInfo from './contestInfo/ContestInfo';
import ContestItems from './contestItems/ContestItems';
import './HomeContest.scss'

const HomeContest = () => {
    return (
        <section className='section-home__contest'>
            <div className="container">
                <ContestInfo />
                <ContestItems />
            </div>
        </section>
    ); 
};

export default HomeContest;