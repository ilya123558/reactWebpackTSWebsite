import React from 'react';
import DecorFBlueImg from '../../../UI/fImages/DecorFBlueImg';
import DecorFOpenImg from '../../../UI/fImages/DecorFOpenImg';
import DecorFRedImg from '../../../UI/fImages/DecorFRedImg';
import './BgFImages.scss'

const BgFImages = () => {
    return (
        <>
            <DecorFRedImg width={413} left={-250} top={-50} blur={16} deg={250}/>
            <DecorFBlueImg width={109} left={200} top={460} deg={-55} />
            <DecorFRedImg width={82} left={40} top={400} deg={45} />
            <DecorFRedImg width={196} left={900} top={97} />
            <DecorFRedImg width={196} left={-50} top={650} deg={81} />
            <DecorFRedImg width={600} left={300} top={100} deg={81} zIndex={-1}/>
            <DecorFBlueImg width={108} right={300} top={100} deg={-15} />
            <DecorFBlueImg width={508} right={-300} top={100} deg={-9} blur={16}/>
            <DecorFBlueImg width={300} right={-50} bottom={100} deg={90} />
            <DecorFBlueImg width={321} right={800} top={300} deg={10} />
        </>
    );
};

export default BgFImages;