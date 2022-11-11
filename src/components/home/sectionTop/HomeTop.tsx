import React from 'react';
import MyNionButton from '../../UI/buttons/myNionButton/MyNionButton';
import BgFImages from './bgFImages/BgFImages';
import './HomeTop.scss'
import HomeTopTitleText from './titleText/HomeTopTitleText';
import nionCosmoImg from '@images/home/section-top/nion-cosmo.png'
import bg from '@images/home/section-top/bg.png'

const HomeTop = () => {
    return (
        <section className='section-home__top' style={{ backgroundImage: `url(${bg})` }}>
            <img className='nionCosmo-img' src={nionCosmoImg} alt="nionCosmo" />
            <div className="container">
                <div className='home-top__wrapper'>
                    <HomeTopTitleText />
                    <MyNionButton onClickHandler={() => console.log('click')} >
                        Actual Airdrops
                    </MyNionButton>
                    <div className='home-top__text'>
                        Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission
                        of scalability and sustainability
                        of the FOIL elastic blockchain.
                    </div>
                </div>
            </div>
            <BgFImages />
        </section>
    );
};


export default HomeTop;