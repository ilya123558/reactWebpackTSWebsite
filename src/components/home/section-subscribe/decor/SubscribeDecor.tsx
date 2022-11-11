import React from 'react';
import './SubscribeDecor.scss'
import DecorFBlueImg from '@UI/fImages/DecorFBlueImg';
import DecorFRedImg from '@UI/fImages/DecorFRedImg';

const SubscribeDecor = () => {
    return (
        <div className="home-subscribe__decor-wrapper">
            <DecorFRedImg deg={-21} width={296} left={-100} top={-150} ext={true} />
            <DecorFBlueImg deg={-15} width={570} right={-200} top={-200} blur={14} />
            <div className='home-subscribe__circle-red'></div>
            <div className="home-subscribe__circle-blue"></div>
        </div>
    );
};

export default SubscribeDecor;