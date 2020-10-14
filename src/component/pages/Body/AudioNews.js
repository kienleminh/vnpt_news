import React from 'react';
import AudioNewsImg from 'component/Figure/AudioNewsImg.png';
import 'component/css/Display.scss';

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