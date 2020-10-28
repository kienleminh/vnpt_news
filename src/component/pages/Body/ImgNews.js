import React from 'react';
import TetImg from 'component/Figure/TetImg.png';
import 'component/css/Display.scss';

function ImgNews(props) {
    return(
        <>
            <div className="zoom-img">
                <img src={TetImg} alt="Tet Img"/>
            </div>
            <div className="zoom-img">
                <img src={TetImg} alt="Tet Img"/>
            </div>
            <div className="zoom-img">
                <img src={TetImg} alt="Tet Img"/>
            </div>

        </>
    )
}

export default ImgNews;