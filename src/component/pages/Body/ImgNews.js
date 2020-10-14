import React from 'react';
import TetImg from 'component/Figure/TetImg.png';
import 'component/css/Display.scss';

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