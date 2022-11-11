import React from 'react';
import Footer from '../footer/Footer';
import HomeSubscribe from './section-subscribe/HomeSubscribe';
import HomeCompletedContest from './sectionCompletedContest/CompletedContest';
import HomeContest from './sectionContest/HomeContest';
import HomeTop from './sectionTop/HomeTop';

const Home = () => {
    return (
        <>
            <HomeTop />
            <HomeContest />
            <HomeCompletedContest />
            <HomeSubscribe />
            <Footer />
        </>
    );
};

export default Home;