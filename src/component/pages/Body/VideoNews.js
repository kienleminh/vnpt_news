import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


function VideoNews(props) {
    return(
        <div>
            <div className="VideoNews">
                <a href="/videonews">
                    <img src={props.img} alt="Video News Img" />
                    <div>{props.title}</div>

                </a>
                <div className="Status">
                    Vnexpress . {props.time} phút trước
                    <StatusTab/>
                </div>

            </div>
            
        </div>
    );
}

export default VideoNews;