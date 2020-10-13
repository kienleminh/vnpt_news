import React from 'react';
import TetImg from './Figure/TetImg.png';
import './css/Display.scss';

function ImgNews(props) {
    return(
        <>
            <img src={TetImg} alt="Tet Img" style={{marginBottom: '16px'}} />
            <img src={TetImg} alt="Tet Img" style={{marginBottom: '16px'}} />
            <img src={TetImg} alt="Tet Img" style={{marginBottom: '16px'}} />

        </>
    )
}

export default ImgNews;