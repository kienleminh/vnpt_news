import React from 'react';
import 'component/css/Display.scss';
import { Carousel } from './Carousel/Carousel';

import Fig1 from 'component/Figure/TetImgBig.png';
import Fig2 from 'component/Figure/MainNewsImg.png';

const LIST_SLIDE = [
    { img: Fig1},
    { img: Fig2},
];

const Slides = () => {
    return (
        <div className="MainNews">
            <Carousel list={LIST_SLIDE} />
            <img src={this.props.img} alt="Main News Img"/>
            <div style={{paddingTop: '16px', paddingBottom: '19px'}}>{this.props.title}</div>
        </div>
    )
}

export default Slides;