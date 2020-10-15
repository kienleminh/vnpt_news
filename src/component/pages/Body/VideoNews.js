import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


function VideoNews(props) {
    return(
        <div>
            <div className="VideoNews">
                <img src={props.img} alt="Video News Img" />
                <div>{props.title}</div>
                <div className="Status">
                    Vnexpress . {props.time} phút trước
                    <StatusTab/>
                </div>

            </div>
            
        </div>
    );
}

export default VideoNews;