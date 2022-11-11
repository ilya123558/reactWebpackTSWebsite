import React from 'react';
import './MyNionButton.scss'

interface IMyNionButton{
    width?: number,
    fontWeight?: number,
    fontSize?: number,
    lineHeight?: number,
    children: any,
    
    onClickHandler: () => void
}

const MyNionButton: React.FC<IMyNionButton> = ({width, children, fontWeight, fontSize, lineHeight, onClickHandler}) => {

    const style = {
        width: width? `${width}px` : '246px',
        fontWeight: fontWeight? fontWeight : 700,
        fontSize: fontSize? `${fontSize}px`: '21px',
        lineHeight: lineHeight? `${lineHeight}px`: '75px'
    }

    return (
        <button className='myNionButton' style={style} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default MyNionButton;