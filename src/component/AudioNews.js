import React from 'react';
import './css/Display.scss';
import AudioNewsImg from './Figure/AudioNewsImg.png';

function AudioNews(props){
    return(
        <>
            <div className='AudioNews'>
                <img src={AudioNewsImg} alt="Audio News Img" style={{paddingRight: '15px'}}/>
                <div className="title">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default AudioNews;