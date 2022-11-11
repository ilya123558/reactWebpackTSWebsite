import React from 'react';
import DecorNionFItem from '@UI/decorNionFItem/DecorNionFItem';
import './ContestInfo.scss'
import ContestInfoText from './infoText/ContestInfoText';

const ContestInfo = () => {
    return (
        <div className='home-contest__info_wrapper'>
            <DecorNionFItem />
            <ContestInfoText />
        </div>
    );
};

export default ContestInfo;