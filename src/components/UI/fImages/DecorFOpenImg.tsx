import React from 'react';
import './DecorFImg.scss'
import { IDecorFImg } from './interface';
import fOpenImg from '@images//home/section-top/f-blue-open.png'
import fOpenImgJpg from '@images//home/section-top/f-blue-open.jpg'

const DecorFOpenImg: React.FC<IDecorFImg> = ({ width, top, bottom, left, right, deg, zIndex, blur, ext }) => {
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
            <img className='decorFImg' src={ext? fOpenImgJpg: fOpenImg } alt="f-open-img" style={style} />
        </>
    );
};

export default DecorFOpenImg;