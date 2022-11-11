import React from 'react';
import './DecorFImg.scss'
import { IDecorFImg } from './interface';
import fBlueImg from '@images//home/section-top/f-blue-img.png'
import fBlueImgJpg from '@images//home/section-top/f-blue-img.jpg'


const DecorFBlueImg: React.FC<IDecorFImg> = ({ width, top, bottom, left, right, deg, zIndex, blur, ext }) => {

    let style = {
        width: width ? `${width}px` : '100px',
        transform: deg ? `rotate(${deg}deg)` : 'rotate(0deg)',
        zIndex: zIndex ? zIndex : 0,
        filter: blur ? `blur(${blur}px)` : 'blur(0px)',
    }

    if (top) {
        style = { ...style, ...{ top: `${top}px` } }
    } else {
        style = { ...style, ...{ bottom: `${bottom}px` } }
    }

    if (left) {
        style = { ...style, ...{ left: `${left}px` } }
    } else {
        style = { ...style, ...{ right: `${right}px` } }
    }

    return (
        <>
            <img className='decorFImg' src={ext ? fBlueImgJpg : fBlueImg} alt="f-blue-img" style={style} />
        </>
    );
};

export default DecorFBlueImg;