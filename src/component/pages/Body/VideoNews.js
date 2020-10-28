import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


function VideoNews(props) {
    return(
        <div>
            <div className="VideoNews">
                <div>
                    <video width="320px" height="185px" controls  style={{borderRadius: '20px'}}>
                        <source src={props.vid} type="video/mp4"></source>
                    </video>
                    <a href="/videonews" style={{color:'black'}}>{props.title}</a>

                </div>
                <div className="Status">
                    Vnexpress . {props.time} phút trước
                    <StatusTab/>
                </div>

            </div>
            
        </div>
    );
}

export default VideoNews;